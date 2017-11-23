'use strict';
(function () {
  // Открываем и закрываем меню в мобильной версиии
  var mobileMenuBox = document.querySelector('.mobile-menu-box');
  var toggleMenuBox = document.querySelector('.mobile-menu-btn');

  toggleMenuBox.addEventListener('click', function (ev) {
    ev.preventDefault();
    toggleMenuBox.classList.toggle('mobile-menu-btn--open');

    mobileMenuBox.classList.toggle('close');
    mobileMenuBox.classList.toggle('open');

    document.body.classList.toggle('mobile-menu-hidden');
  })
})();
