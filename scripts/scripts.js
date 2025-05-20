import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
} from "./aem.js";
import { loadHeaderJs } from "./headerNew.js";

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector("h1");
  const picture = main.querySelector("picture");
  // eslint-disable-next-line no-bitwise
  if (
    h1 &&
    picture &&
    h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING
  ) {
    const section = document.createElement("div");
    section.append(buildBlock("hero", { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  await loadCSS(`${window.hlx.codeBasePath}/styles/client-all-min.css`);
  await loadCSS(`${window.hlx.codeBasePath}/styles/header-new.css`);
  await loadCSS(`${window.hlx.codeBasePath}/styles/secondary-footer.css`);
  await loadCSS(`${window.hlx.codeBasePath}/styles/footer.css`);
  try {
    if (!window.location.hostname.includes("localhost"))
      sessionStorage.setItem("fonts-loaded", "true");
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Auto Blocking failed", error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  //buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = "en";
  decorateTemplateAndTheme();
  const main = doc.querySelector("main");
  if (main) {
    decorateMain(main);
    document.body.classList.add("appear");
    await loadSection(main.querySelector(".section"), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem("fonts-loaded")) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector("main");
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector("header"));
  loadFooter(doc.querySelector("footer"));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import("./delayed.js"), 3000);
  // load anything that can be postponed to the latest here
}

window.addEventListener("load", async () => {
  console.log("scripts.js loaded");
  setTimeout(() => {
    loadHeaderJs();
  }, 3000);
});

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

// Dynamically load a third-party script
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;
  script.onload = callback;
  script.onerror = () => {
    console.error(`Failed to load script: ${url}`);
  };
  script.crossOrigin = "anonymous"; // <-- Important for CORS cases
  document.head.appendChild(script);
}

// Adobe Analytics Script
loadScript(
  "https://assets.adobedtm.com/18d6771123cb/9acc6fcece69/launch-e0a440c6fb45-development.min.js",
  () => {
    // Add your analytics here
    console.log("Adobe Analytics Loaded");

    var visitorID = "";
    if (
      typeof _satellite != "undefined" &&
      typeof _satellite.getVisitorId() != "undefined" &&
      _satellite.getVisitorId() != null &&
      typeof _satellite.getVisitorId().getMarketingCloudVisitorID() !=
        "undefined"
    ) {
      visitorID = _satellite.getVisitorId().getMarketingCloudVisitorID();
    }

    window.digitalData = {
      page: {
        pageInfo: {
          pageName: document.title,
          pageURL: window.location.href,
        },
      },

      user: {
        visitorID: visitorID,
      },

      event: "pageLoad",
    };
  }
);

loadPage();

// Footer
window.addEventListener("DOMContentLoaded", () => {
  $(".sec-footer-links, .mb-secfooter-link").on("click", function () {
    let ctaText = $(this).text();
    secFootAnalytics(ctaText);
  });

  function secFootAnalytics(ctaText) {
    try {
      digitalData.scm = [];
      digitalData.scm.cta = `SFOOTER | ${ctaText}`;
      digitalData.page.pageinfo.pageName = pageName;
      digitalData.web.identifier = "website";
      if (typeof _satellite != "undefined") {
        _satellite.track("cta_name");
      }
    } catch (error) {
      console.error(error);
    }
  }
});
