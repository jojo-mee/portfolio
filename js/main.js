"use strict";

function typeWriter(text, n) {
    if (n < (text.length)) {
      $('.test').html(text.substring(0, n+1));
      n++;
      setTimeout(function() {
        typeWriter(text, n)
      }, 100);
    }
  }
  
  $(document).ready(function(e) {
    var text = $('.test').data('text');
    
    typeWriter(text, 0);
  });
  