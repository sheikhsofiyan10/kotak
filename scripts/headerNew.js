export function loadHeaderJs() {
  var headerFooterProduct = document.querySelectorAll(
    "[data-headerfooter-product]"
  );
  var multipleOff = document.querySelectorAll("[data-multiple-off]");
  const data_headerclose1 = document.querySelector(
    "[data-close-header-offcanvas]"
  );
  const data_openoffcavas1 = document.querySelector(
    "[data-mb-headermenuoffcanvas]"
  );

  Array.from(headerFooterProduct).forEach((item) =>
    item.addEventListener("click", productFooter)
  );

  if (document.querySelectorAll(".product-card").length > 0) {
    document.querySelectorAll(".product-card").forEach((item) =>
      item.addEventListener("click", (e) => {
        let subSection = e.currentTarget.querySelector("p").innerText.trim();
        let text = document
          .querySelector(".multiple-screen-active")
          .getAttribute("data-multiple-off");
        HEADER_LINKS_TRACK.satelliteTrack(pageName, text, subSection, "", "");
      })
    );
  }

  function productFooter() {
    text = this.innerText.trim();
    HEADER_LINKS_TRACK.satelliteTrack(pageName, text, "", "", "");

    let siblings = document.querySelectorAll(".headerfooter-icondec");
    siblings.forEach(function (e) {
      e.classList.remove("active");
    });
    document.body.style.overflow = "hidden";
    var headerProductValue = this.getAttribute("data-headerfooter-product");
    this.classList.add("active");
    Array.from(multipleOff).forEach((element) => {
      element.classList.remove("multiple-screen-active");
      if (headerProductValue === element.getAttribute("data-multiple-off")) {
        element.classList.add("multiple-screen-active");
        let noti;
        if (
          document.querySelector("#notification_widget").getBoundingClientRect()
            .height
        ) {
          noti = document
            .querySelector("#notification_widget")
            .getBoundingClientRect().height;
        } else if (document.querySelector("#custom-modal-widget")) {
          noti = document
            .querySelector("#custom-modal-widget")
            .getBoundingClientRect().height;
        } else {
          noti = 0;
        }
        let mobile_hedar = document
          .querySelector(".mobile-header-container")
          .getBoundingClientRect().height;
        let noti_movile_header = (document.querySelector(
          ".mb-header-menuoffcanvas-body"
        ).style.marginTop = noti + mobile_hedar + "px");
        data_openoffcavas1.classList.add("active");
        document
          .querySelector(".mb-headeropenclose")
          .classList.add("mb-headeropenclose-active");
      }
    });
  }
  if (document.querySelector(".home-event") != null) {
    document
      .querySelector(".home-event")
      .addEventListener("click", function () {
        let siblings = document.querySelectorAll(".headerfooter-icondec");
        let canvasbody = document.querySelector(
          ".mb-header-menuoffcanvas-body"
        );
        let body_hiding1 = document.querySelector("body");
        let remove_header_close = document.querySelector(".mb-headeropenclose");
        remove_header_close.classList.remove("mb-headeropenclose-active");
        body_hiding1.style.overflow = "";
        Array.from(multipleOff).forEach((element) => {
          element.classList.remove("multiple-screen-active");
          data_openoffcavas1.classList.remove("active");
        });
        siblings.forEach(function (e) {
          e.classList.remove("active");
        });
        this.classList.add("active");
        canvasbody
          .querySelector(".multiple-screen")
          .classList.add("multiple-screen-active");
      });
  }

  const sub_header_li = document.querySelectorAll(".sub-header-li");
  const sub_menu_detail = document.querySelectorAll(".sub-menu-detail");
  sub_header_li.forEach((e) => e.addEventListener("mousemove", sub_header));

  function sub_header() {
    sub_header_li.forEach((item_remove) =>
      item_remove.classList.remove("active")
    );

    this.classList.add("active");
    const menu_attribut = this.getAttribute("data-menu");
    sub_menu_detail.forEach((item_deail) => {
      if (item_deail.getAttribute("data-menu") === menu_attribut) {
        if (document.querySelector(".sub-menu-container.active")) {
          let sub_menu_conatiner_height =
            item_deail.parentElement.getBoundingClientRect().height;
          item_deail.parentElement.children[1].style.top = `${sub_menu_conatiner_height}px`;
        }
        item_deail.classList.add("sub-menu-detail-active");
      } else {
        item_deail.classList.remove("sub-menu-detail-active");
      }
    });
  }

  sub_header_li.forEach((e) =>
    e.addEventListener("mouseleave", close_subheader)
  );

  sub_menu_detail.forEach((e) =>
    e.addEventListener("mouseleave", close_subheader)
  );

  function close_subheader() {
    let isMouseOutside = true;

    sub_header_li.forEach((item_header) => {
      if (item_header.matches(":hover")) {
        isMouseOutside = false;
      }
    });

    sub_menu_detail.forEach((item_detail) => {
      if (item_detail.matches(":hover")) {
        isMouseOutside = false;
      }
    });

    if (isMouseOutside) {
      sub_header_li.forEach((item_remove) =>
        item_remove.classList.remove("active")
      );

      sub_menu_detail.forEach((item_deail) => {
        item_deail.classList.remove("sub-menu-detail-active");
      });
    }
  }

  if (document.querySelector("[data-openoffcavas]")) {
    const data_headerclose = document.querySelector(
      "[data-close-header-offcanvas]"
    );
    const data_openoffcavas = document.querySelector("[data-openoffcavas]");
    var body_hiding = document.querySelector("body");
    data_openoffcavas.addEventListener("click", open_headeroffcavs);
    function open_headeroffcavs() {
      let noti;
      if (
        document.querySelector("#notification_widget").getBoundingClientRect()
          .height
      ) {
        noti = document
          .querySelector("#notification_widget")
          .getBoundingClientRect().height;
      } else if (document.querySelector("#custom-modal-widget")) {
        noti = document
          .querySelector("#custom-modal-widget")
          .getBoundingClientRect().height;
      } else {
        noti = 0;
      }
      let mobile_hedar = document
        .querySelector(".mobile-header-container")
        .getBoundingClientRect().height;
      let noti_movile_header = (document.querySelector(
        ".mb-header-menuoffcanvas-body"
      ).style.marginTop = noti + mobile_hedar + "px");
      console.log(noti_movile_header);
      document.querySelectorAll(".multiple-screen").forEach((elem) => {
        elem.classList.remove("multiple-screen-active");
      });
      document
        .querySelector("[data-mb-headermenuoffcanvas]")
        .classList.add("active");
      this.parentElement.classList.add("mb-headeropenclose-active");
      let canvasbody = document.querySelector(".mb-header-menuoffcanvas-body");

      canvasbody
        .querySelector(".multiple-screen")
        .classList.add("multiple-screen-active");
      let siblings = document.querySelectorAll(".headerfooter-icondec");

      body_hiding.style.overflow = "hidden";
      siblings.forEach(function (e) {
        e.classList.remove("active");
      });
    }
    data_headerclose.addEventListener("click", close_headeroffcavs);
    function close_headeroffcavs() {
      this.parentElement.classList.remove("mb-headeropenclose-active");
      if (document.querySelector(".mb-header-menuoffcanvas", ".active")) {
        document
          .querySelector(".mb-header-menuoffcanvas", ".active")
          .classList.remove("active");
        body_hiding.style.overflow = "";
      }
    }
  }

  // tab select and event handlers
  if (document.querySelectorAll("[data-ic-target]")) {
    const tab = document.querySelectorAll("[data-ic-target]");
    Array.from(tab).forEach((tab) =>
      tab.addEventListener("click", tabcontainer)
    );

    // tab handler function
    function tabcontainer() {
      // target id
      const data_target = this.getAttribute("data-ic-target");
      // add class in parentnode
      this.closest(".tab-plans").classList.add("active");
      // selecte tab
      const tab_parent_selecter =
        document.querySelectorAll(".tab-plans.active");
      // parent select
      Array.from(tab_parent_selecter).forEach((tab_parent_selecter) => {
        // tab children
        const tab_parent = tab_parent_selecter.children;
        Array.from(tab_parent).forEach((tab_parent) => {
          // tab
          if (tab_parent.matches(".tab-plans-items") === true) {
            // select current tab
            const tab_children = tab_parent.children;
            Array.from(tab_children).forEach((tab_children) => {
              if (data_target === tab_children.getAttribute("data-ic-target")) {
                tab_children.classList.add("active");
              } else {
                tab_children.classList.remove("active");
                this.closest(".tab-plans").classList.remove("active");
                // this.parentNode.parentNode.classList.remove('active')
              }
            });
          }

          // tab-container
          if (tab_parent.matches(".tab-plans-container") === true) {
            // select childerof tab-container-children
            const tab_container_children = tab_parent.children;
            Array.from(tab_container_children).forEach(
              (tab_container_children) => {
                if (data_target === tab_container_children.id) {
                  tab_container_children.classList.add("active", "show");
                } else {
                  tab_container_children.classList.remove("active", "show");
                }
              }
            );
          }
        });
      });
    }
  }

  //
  if (document.querySelectorAll("[data-mb-lilevel=level1]").length > 0) {
    const mb_lilevel1 = document.querySelectorAll("[data-mb-lilevel=level1]");
    const mb_lilevel2 = document.querySelectorAll("[data-mb-lilevel=level2]");
    /* const mb_lilevel3 = document.querySelectorAll("[data-mb-lilevel=level3]"); */

    mb_lilevel1.forEach((item) =>
      item.addEventListener("click", headermenulevel1)
    );
    Array.from(mb_lilevel2).forEach((item) =>
      item.addEventListener("click", headermenulevel2)
    );
  }

  function headermenulevel1() {
    let tab = this.parentElement;
    let submain2 = tab.querySelector(".mb-sub-main-2");
    const siblings = Array.from(this.parentElement.parentElement.children);
    if (submain2.classList.contains("active")) {
      submain2.classList.remove("active");
      tab.querySelector(".mb-sub-main-3").classList.remove("active");
      this.parentElement.classList.remove("level1active");
      siblings.forEach((sibling) => {
        if (sibling !== this.parentElement) {
          sibling.classList.remove("dsp-none");
        }
      });
    } else {
      submain2.classList.add("active");
      this.parentElement.classList.add("level1active");
      siblings.forEach((sibling) => {
        if (sibling !== this.parentElement) {
          sibling.classList.add("dsp-none");
        }
      });
    }
  }

  function headermenulevel2() {
    let level1 = this.parentElement;
    let submain3 = level1.querySelector(".mb-sub-main-3");
    if (submain3.classList.contains("active")) {
      submain3.classList.remove("active");
      this.parentElement.classList.remove("level2active");
      // level1.querySelector(".mb-sub-main-4").classList.remove("active");
    } else {
      submain3.classList.add("active");
      this.parentElement.classList.add("level2active");
    }
  }

  // ham-open-close
  if (document.querySelector("#open-hem-burager")) {
    const open_hem_burager = document.querySelector("#open-hem-burager");
    open_hem_burager.addEventListener("click", open_hemburager);
    const close_hem_burager = document.querySelector("#close-hem-burager");
    close_hem_burager.addEventListener("click", close_hemburager);
    const hem_buragercontainer = document.querySelector(
      ".hem-burager-container"
    );

    function open_hemburager() {
      this.classList.add("active");
      close_hem_burager.classList.add("active");
      hem_buragercontainer.classList.add("hem-active");
    }

    function close_hemburager() {
      this.classList.remove("active");
      open_hem_burager.classList.remove("active");
      hem_buragercontainer.classList.remove("hem-active");
    }
  }

  // scroll bars
  let mql = window.matchMedia("(min-width: 700px)");
  if (mql.matches === true) {
    if (document.querySelector("#sub-header-menu-detail-cntainer")) {
      const header_container = document.querySelector(".header-container");
      const headermenulogo_container = document.querySelector(
        "[data-header-menulogo-container]"
      );
      const header_subcontainer = document.querySelector(
        "#sub-header-menu-detail-cntainer"
      );
      const hem_burager = document.querySelector("[data-hem-burager]");

      const sub_header_conatiner =
        header_subcontainer.getBoundingClientRect().bottom;

      window.addEventListener("scroll", function () {
        const scroll_current = window.scrollY;
        if (scroll_current >= sub_header_conatiner) {
          header_container.classList.add(
            "header_active",
            "animateIn",
            "fadeInDown"
          );
          headermenulogo_container.classList.add(
            "header-menulogo-container-active"
          );
          hem_burager.classList.add("hem-burager-active");
        } else if (scroll_current == 0) {
          header_container.classList.remove(
            "header_active",
            "animateIn",
            "fadeInDown"
          );
          headermenulogo_container.classList.remove(
            "header-menulogo-container-active"
          );
          hem_burager.classList.remove("hem-burager-active");
        }
      });
    }
  } else {
    let prevScrollY = window.scrollY;
    const mobile_header_container = document.querySelector(
      ".mobile-header-container"
    );
    const mobile_header_bottom =
      mobile_header_container.getBoundingClientRect().bottom;
    const mobileFooterNav = document.querySelector(".headerfooter-container");
    window.addEventListener("scroll", function () {
      const mobile_scroll_current = window.scrollY;
      if (mobile_scroll_current >= mobile_header_bottom) {
        mobile_header_container.classList.add("header_active");
        mobileFooterNav &&
          mobileFooterNav.classList.remove(
            "headerfooter-container_active",
            "animateIn",
            "fadeInUp"
          );
      } else if (mobile_scroll_current == 0) {
        mobile_header_container.classList.remove("header_active");
      }
      if (mobile_scroll_current < prevScrollY) {
        mobileFooterNav &&
          mobileFooterNav.classList.add(
            "headerfooter-container_active",
            "animateIn",
            "fadeInUp"
          );
      }

      prevScrollY = mobile_scroll_current;
    });
  }

  // Hidding a extra children

  var parentElementContainer = document.querySelectorAll(
    ".product-cardlist-container"
  );

  parentElementContainer.forEach(function (ele) {
    var dataMaxChildren = parseInt(ele.getAttribute("data-show-more"));

    var anchorChildElement = ele.querySelectorAll("a");
    for (var i = dataMaxChildren; i < anchorChildElement.length; i++) {
      anchorChildElement[i].classList.add("hide");
    }
    if (ele.querySelector(".showmore")) {
      ele.querySelector(".showmore").addEventListener("click", (e) => {
        const cards = ele.querySelectorAll("a");
        if (e.currentTarget.querySelector("p").innerText == "Show More") {
          e.currentTarget.querySelector("p").innerText = "Show Less";
          e.currentTarget.classList.remove("showmore");
          e.currentTarget.classList.add("showless");
          cards.forEach((card) => {
            card.classList.remove("hide");
          });
        } else {
          e.currentTarget.querySelector("p").innerText = "Show More";
          e.currentTarget.classList.remove("showless");
          e.currentTarget.classList.add("showmore");
          cards.forEach((card, ind) => {
            if (ind >= dataMaxChildren) {
              card.classList.add("hide");
            }
          });
        }
      });
    }
  });

  document.body.addEventListener("click", function (e) {
    let innerDiv = document.querySelector(".hem-burager-container");
    if (innerDiv.classList.contains("hem-active")) {
      let hemIcon =
        e.target.closest(".open-hem-burager") ===
        document.querySelector(".open-hem-burager");
      let hemContainer =
        e.target.closest(".hem-burager-container") ===
        document.querySelector(".hem-burager-container");
      if (hemIcon || hemContainer) {
        document.querySelector("#open-hem-burager").classList.add("active");
        document.querySelector("#close-hem-burager").classList.add("active");
        document
          .querySelector(".hem-burager-container")
          .classList.add("hem-active");
      } else {
        document.querySelector("#open-hem-burager").classList.remove("active");
        document.querySelector("#close-hem-burager").classList.remove("active");
        document
          .querySelector(".hem-burager-container.hem-active")
          .classList.remove("hem-active");
      }
    }
  });

  var elements = document.querySelectorAll(
    ".multicolor .sub-menu-detail-level"
  );
  for (var j = 0; j < elements.length; j++) {
    var getelement = elements[j];
    if (j % 2 === 0) {
      getelement.style.backgroundColor =
        getelement.getAttribute("data-primaryColor");
    } else {
      getelement.style.backgroundColor = getelement.getAttribute(
        "data-secondaryColor"
      );
    }
  }

  let elementwithDatasize = document.querySelectorAll('[data-size="0"]');

  elementwithDatasize.forEach((element) => {
    const linkElement = document.createElement("a");
    linkElement.className = "mb-sub-main-li";
    linkElement.href = element.getAttribute("data-href");

    element.replaceWith(linkElement);
    linkElement.appendChild(element);
  });

  // mobile devices
  // Select elements
  const loginbtnmd = document.querySelector(".login-btnmd");
  const loginbtnmdclose = document.querySelector(".login-btnoffcanvasclose");
  const loginOffCanvas = document.querySelector(".login-btnoffcanvas");
  const loginBackdrop = document.querySelector(".loginbtn-backdrop");

  // event handlers
  loginbtnmd?.addEventListener("click", loginbtnfn);
  loginbtnmdclose?.addEventListener("click", loginbtnmdclosefn);

  // function
  function loginbtnfn() {
    document.body.style.overflow = "hidden";
    loginOffCanvas.classList.add("login-btnoffcanvasshow");
    loginBackdrop.classList.add("loginbtn-backdropshow");
  }
  function loginbtnmdclosefn() {
    document.body.style.overflow = "";
    loginOffCanvas.classList.remove("login-btnoffcanvasshow");
    loginBackdrop.classList.remove("loginbtn-backdropshow");
  }

  const loginbtnheader = document.querySelectorAll(".login-btnhender");
  loginbtnheader.forEach((el) =>
    el.addEventListener("click", loginbtnheaderanlaytics)
  );

  function loginbtnheaderanlaytics() {
    try {
      HEADER_LINKS_TRACK.satelliteTrack(pageName, "Header:Login", "", "", "");
    } catch (error) {
      console.error(error);
    }
  }

  const loginbtndivdec = document.querySelectorAll(".loginbtndiv-dec");
  loginbtndivdec.forEach((el) =>
    el.addEventListener("click", loginbtndivdecAnalytics)
  );

  function loginbtndivdecAnalytics() {
    try {
      let ctaText = `header:login | ${$(this).text().trim()}`; //pass the title of the CTA
      HEADER_LINKS_TRACK.satelliteTrack(pageName, ctaText, "", "", "");
    } catch (error) {
      console.error(error);
    }
  }

  if (!document.querySelector(".login-btncontainerdes")) {
    document.querySelector(".header-login")?.classList.add("cur-pt");
  }
}
