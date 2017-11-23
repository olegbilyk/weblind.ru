'use strict';
(function () {
  function highlight() {
      var current = document.getElementsByClassName('link-active');

      if (current[0]) current[0].classList.remove('link-active');

      var h2s = document.getElementsByClassName('title-link');

      for (var i = 0; i < h2s.length; i++) {
        var h2 = h2s[i];
        if (h2.getBoundingClientRect().top > 1) break;
      }
      i--;

      if (i >= 0) {
        var href = h2s[i].firstElementChild && h2s[i].firstElementChild.getAttribute('href');
        var li = document.querySelector('#vertical-menu li a[href="' + href + '"]');
// console.log('1')
        if (href && li) {
  // console.log('2')
          // console.log(href, 'href')
          // console.log(li, 'li')
          li.classList.add('link-active');
        }
      }

    }

    highlight();

    document.getElementById('site-main').addEventListener('scroll', highlight)

})();
