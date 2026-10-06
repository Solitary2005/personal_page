/* 滚动高亮导航、区块渐入、GitHub star 数、博客分类筛选 */
(function () {
  /* ---------- 区块渐入 ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('.section'));

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    sections.forEach(function (el) { observer.observe(el); });
  } else {
    sections.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 滚动高亮导航（仅主页有锚点区块时生效） ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-right a[href*="#"]'));

  function updateActiveNav() {
    var offset = window.scrollY + 120;
    var currentId = sections.length ? sections[0].id : '';

    sections.forEach(function (section) {
      if (section.id && offset >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      var anchor = href.indexOf('#') >= 0 ? href.slice(href.indexOf('#')) : '';
      var isActive = anchor === '#' + currentId;
      link.classList.toggle('active', isActive);
    });
  }

  if (sections.length && navLinks.length) {
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);
  }

  /* ---------- GitHub star 数 ---------- */
  function formatStars(count) {
    if (count >= 1000) {
      var compact = (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, '');
      return compact + 'k';
    }
    return String(count);
  }

  function loadGitHubStars() {
    var repoLinks = Array.prototype.slice.call(document.querySelectorAll('[data-github-repo]'));

    repoLinks.forEach(function (link) {
      var repo = link.getAttribute('data-github-repo');
      var stars = link.querySelector('.github-stars');

      if (!repo || !stars || !window.fetch) return;

      fetch('https://api.github.com/repos/' + repo)
        .then(function (response) {
          if (!response.ok) throw new Error('GitHub stars unavailable');
          return response.json();
        })
        .then(function (data) {
          if (typeof data.stargazers_count !== 'number') return;
          stars.textContent = '★ ' + formatStars(data.stargazers_count);
          stars.classList.add('is-visible');
        })
        .catch(function () {
          stars.textContent = '';
          stars.classList.remove('is-visible');
        });
    });
  }

  loadGitHubStars();

  /* ---------- 博客分类筛选 ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.blog-tabs button'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.blog-card'));

  function normalizeTag(tag) {
    return tag.trim().toLowerCase().replace(/\s+/g, '-');
  }

  function filterBlog(filter) {
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(',').map(normalizeTag);
      card.classList.toggle('hidden', filter !== 'all' && tags.indexOf(filter) === -1);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      filterBlog(tab.getAttribute('data-filter'));
    });
  });
})();
