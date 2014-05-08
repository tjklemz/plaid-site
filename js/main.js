function hasClass(ele, cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className = ele.className.replace(reg,'');
  }
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += (ele.className === '' ? '' : ' ') + cls;
  }
}

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
  
  w.addEventListener("load", blast, true);
  w.addEventListener("load", function() {
    var v = d.getElementsByClassName('video')[0];
    v.innerHTML = '<iframe src="//player.vimeo.com/video/94218298?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/94218298">Introducing Plaid for Responsive Web Layouts</a> from <a href="http://vimeo.com/user27734894">Plaid RWD</a> on <a href="https://vimeo.com">Vimeo</a>.</p>';
  });
  
  (function() {
    var posts = d.getElementById('blog').getElementsByClassName('blog');
    
    function closePosts() {
      for (i = 0, len = posts.length; i < len; ++i) {
        closePost(posts[i]);
      }
    }
    
    function openPost(p) {
      var shouldScroll = (scroll === undefined ? true : scroll);
      var h = 0;
      
      for (var i = 0, len = p.children.length; i < len; ++i) {
        h += p.children[i].clientHeight;
      }
      
      p.style.height = h + 'px';
      removeClass(p, 'closed');
    }
    
    function closePost(p) {
      addClass(p, 'closed');
      var t = p.querySelector('h1');
      var h = t.clientHeight + 40;
      p.style.height = h + 'px';
    }
    
    for(var i = 0, len = posts.length; i < len; ++i) {
      (function() {
        var post = posts[i];
        
        var f = d.createElement('footer');
        var p = d.createElement('p');
        var a = d.createElement('a');
        a.setAttribute('href', '#blog');
        a.appendChild(d.createTextNode('back to top'));
        p.appendChild(a);
        f.appendChild(p);
        
        post.appendChild(f);
        
        f.addEventListener('click', function(e) {
          e.preventDefault();
          d.getElementById('blog').scrollIntoView();
          closePosts();
        });
        
        post.querySelector('.blog-link').addEventListener('click', function(e) {
          e.preventDefault();
          if(!hasClass(post, 'closed')) {
            closePost(post);
          } else {
            openPost(post);
          }
        });
      })();
    }
    
    w.addEventListener("load", function() {
      closePosts();
      var p = null;
      
      if (w.location.hash && (p = b.querySelector(w.location.hash))) openPost(p);
      // else {
      //   var width = d.documentElement ? d.documentElement.clientWidth : 0;
      //   if (width > 800) openPost(posts[0]);
      // }
      
      w.addEventListener('resize', react, true);
    }, true);
    
    var timer = 0;
    
    function react() {
      clearTimeout(timer);
      timer = setTimeout(adapt, 16);
    }
    
    function adapt() {
      for (i = 0, len = posts.length; i < len; ++i) {
        if (hasClass(posts[i], 'closed')) {
          closePost(posts[i]);
        } else {
          openPost(posts[i]);
        }
      }
    }
    
  })();
  
}(window, document, document.getElementsByTagName('body')[0]));
