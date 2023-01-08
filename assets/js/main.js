const form = document.getElementById("contact-form");
// const validRegExp = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
const validRegExp = /\S+@\S+\.\S+/;
const error_msg = document.getElementById("error-msg");
const email_input = document.getElementById("email");
const error_img = document.getElementById("error-img");
const skip_btn = document.getElementById("skip-btn");

skip_btn.addEventListener('focusin', () => {
    skip_btn.classList.remove("absolute");
    skip_btn.classList.add("static");
})

skip_btn.addEventListener('focusout', () => {
    skip_btn.classList.remove("static");
    skip_btn.classList.add("absolute");
})

let mobileMenu = () =>{
    const toggle = document.querySelector("#mobile-toggle");
    const menu = document.querySelector(".menu-items");
    const logo = document.querySelector(".logo");
    toggle.addEventListener("click", () => {
        menu.classList.toggle("navigation-mobile");
        menu.classList.toggle("hidden");
        toggle.getAttribute("aria-expanded") ==="false"?toggle.setAttribute("aria-expanded", "true"):toggle.setAttribute("aria-expanded", "false");
        document.querySelector('#mobile-toggle .humburger-icon').classList.toggle('hidden');
        document.querySelector('#mobile-toggle .close-icon').classList.toggle('hidden');
        logo.classList.toggle("logo-white");
    });
}
let tabbedContent = function() {
  let tab = document.getElementsByClassName("tab");
  let tabContent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tab.length; i++) {
      tab[i].addEventListener('click', function() {
          for (var i = 0; i < tab.length; i++) {
              tab[i].classList.remove('active-tab');
              tab[i].setAttribute("aria-selected", "false");
          };
          for (var i = 0; i < tabContent.length; i++) {
              tabContent[i].classList.add('hidden');
              tabContent[i].classList.remove('flex');
              tabContent[i].setAttribute("aria-hidden", "true");
          };
          this.classList.add('active-tab');
          this.setAttribute("aria-selected", "true");
          let matchingTab = this.getAttribute('aria-controls');
          let tapPanel = document.getElementById(matchingTab);
          tapPanel.classList.remove('hidden');
          tapPanel.classList.add('flex');
          tapPanel.setAttribute("aria-hidden", "false");
      }, false);
  }
}

let resetInput = function(){
    email_input.setAttribute("aria-invalid", "false");
    email_input.setAttribute("aria-describedby", null);
    email_input.closest('#input-validation').classList.remove("bg-softRed");
    error_img.classList.add("hidden");
    error_img.classList.remove("inline-flex");
    error_msg.classList.add("hidden");
}
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    is_valid = validRegExp.test(form.email.value);
    resetInput();
    if(!is_valid){
        email_input.setAttribute("aria-invalid", "true");
        email_input.setAttribute("aria-describedby", "error-msg");
        email_input.closest('#input-validation').classList.add("bg-softRed");
        error_img.classList.add("inline-flex");
        error_img.classList.remove("hidden");
        error_msg.classList.remove("hidden");
        // setTimeout(() => {
        //     resetInput();
        // }, 4000)
    }else{
        form.submit()
    }
});
tabbedContent();
mobileMenu();