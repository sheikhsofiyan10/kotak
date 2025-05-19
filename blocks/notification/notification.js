export default async function decorate(block) {
  console.log("inside block");

  window.onload = () => {
    //document.addEventListener('DOMContentLoaded', () => {

    console.log("inside addEventListener");

    const wrapper = document.querySelector(".notification-wrapper");

    const block = wrapper?.querySelector(".notification.block");

    if (!wrapper || !block) return;

    block.id = "notification";

    if (!wrapper.querySelector(".close-btn-banner")) {
      const closeBtn = document.createElement("button");

      closeBtn.className = "close-btn-banner";

      closeBtn.setAttribute("aria-label", "Close notification");

      closeBtn.setAttribute("role", "button");

      closeBtn.innerHTML = `
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
  
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
  
  </svg>
  
       `;

      closeBtn.addEventListener("click", () => {
        wrapper.classList.remove("show");

        localStorage.setItem("notificationClosed", "true");

        document.body.style.paddingTop = "";
      });

      wrapper.appendChild(closeBtn);
    }

    const isClosed = localStorage.getItem("notificationClosed") === "true";

    if (!isClosed) {
      wrapper.classList.add("show");

      document.body.style.paddingTop = "60px";

      const notificationHeight = block.offsetHeight;

      const onScroll = () => {
        if (window.scrollY >= notificationHeight) {
          wrapper.classList.remove("show");
          document.body.style.paddingTop = "";
          window.removeEventListener("scroll", onScroll);
        } else {
          wrapper.classList.add("show");
          document.body.style.paddingTop = "60px";
        }
      };

      window.addEventListener("scroll", onScroll);
    }

    //  const onScroll = () => {

    //     if (window.scrollY >= notificationHeight) {

    //       wrapper.classList.add('show');

    //       localStorage.setItem('notificationClosed', 'true');

    //       document.body.style.paddingTop = '';

    //       window.removeEventListener('scroll', onScroll);

    //     }

    //     else {

    //       wrapper.classList.remove('hidden');

    //       document.body.style.paddingTop = '60px';

    //     }

    //   };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const target = mutation.target;

          if (
            target.classList.contains("header_active") &&
            wrapper.classList.contains("show")
          ) {
            target.style.top = "60";
          }
        }
      });
    });

    const potentialHeaders = document.querySelectorAll("[class]");

    potentialHeaders.forEach((el) => {
      observer.observe(el, { attributes: true });
    });
  };
}
