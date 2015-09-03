//1. make sure the import has loaded before trying to get it's content
    window.addEventListener('HTMLImportsLoaded', function(e) {
    
    // 2. all imports loaded so grab the DOM of the imported html
    var link = document.querySelector('link[rel="import"]');
    var content = link.import;
        
    // 3. Grab elements from static.html's document.
    var header = content.getElementById('headerContent');
    var nav = content.getElementById('navContent');
    var footer = content.getElementById('footerContent');

    //4. insert imported content into the right place in the page
    document.getElementById('page-header').appendChild(header);
    document.getElementById('page-nav').appendChild(nav);
    document.getElementById('page-footer').appendChild(footer);
    });

    // Google Analytics
    // <script>
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-63864473-1', 'auto');
  ga('send', 'pageview');

// </script>