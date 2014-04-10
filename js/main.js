(function(w, d, b) {
  var rwdBlast = b.querySelector('.rwd-blast');
  
  var blastImages = ['desktop.png', 'large.png', 'medium.png', 'mobile.png'];
  var i = 0;
  
  function blast() {
    rwdBlast.style.opacity = 0;
    
    setTimeout(function() {
      rwdBlast.style.backgroundImage = 'url(images/' + blastImages[i] + ')';
      rwdBlast.style.opacity = 1;
      
      if(++i < blastImages.length) {
        setTimeout(blast, 1300);
      }
    }, 600);
  }
  
  window.addEventListener("load", blast, true);
  
}(window, document, document.body));
