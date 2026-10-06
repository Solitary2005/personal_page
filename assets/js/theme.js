(function () {
  var themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  var moonIcon = themeToggle.querySelector('.icon-moon');
  var sunIcon = themeToggle.querySelector('.icon-sun');

  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (moonIcon) moonIcon.style.display = isDark ? 'none' : '';
    if (sunIcon) sunIcon.style.display = isDark ? '' : 'none';
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (e) {}
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

  themeToggle.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });
})();
