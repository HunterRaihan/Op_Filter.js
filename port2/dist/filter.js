function opFilter(target, item, anime) {
    'use strict';
    let Target = document.querySelectorAll(target),
      Item = document.querySelectorAll(item);
    Target.forEach(li => {
      li.onclick = function() {
        Target.forEach(li => {
          li.className = "";
        });
        li.className = "active";
        const value = li.textContent;
        Item.forEach(e => {
          e.classList.add(anime);
          e.style.display = 'none';
          if (e.getAttribute('data-filter') == value.toLowerCase() || value == "all") {
            e.style.display = 'block';
          }
        });
      };
    });
  }
  opFilter('.filter-links li', '.filter-items li', 'zoomOut');