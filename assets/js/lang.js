/* 中英切换：data-lang 块显隐 + data-i18n-en/zh 文本替换（同 DavidLXu 方案） */
(function () {
  function determineLanguageSetting() {
    var saved = null;
    try {
      saved = localStorage.getItem('site_lang');
    } catch (e) {}
    if (saved === 'en' || saved === 'zh') return saved;
    var browserLang = (navigator.language || '').toLowerCase();
    return browserLang.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function setLanguage(lang) {
    var useLang = lang === 'zh' ? 'zh' : 'en';
    try {
      localStorage.setItem('site_lang', useLang);
    } catch (e) {}
    document.documentElement.setAttribute('lang', useLang);

    document.querySelectorAll('[data-i18n-en]').forEach(function (elem) {
      var enText = elem.getAttribute('data-i18n-en');
      var zhText = elem.getAttribute('data-i18n-zh') || enText;
      elem.textContent = useLang === 'zh' ? zhText : enText;
    });

    document.querySelectorAll('[data-lang]').forEach(function (elem) {
      var elemLang = elem.getAttribute('data-lang');
      elem.style.display = elemLang === useLang ? '' : 'none';
    });

    var enBtn = document.getElementById('lang-en');
    var zhBtn = document.getElementById('lang-zh');
    if (enBtn && zhBtn) {
      enBtn.classList.toggle('active', useLang === 'en');
      zhBtn.classList.toggle('active', useLang === 'zh');
    }
  }

  setLanguage(determineLanguageSetting());

  var enBtn = document.getElementById('lang-en');
  var zhBtn = document.getElementById('lang-zh');
  if (enBtn) enBtn.addEventListener('click', function () { setLanguage('en'); });
  if (zhBtn) zhBtn.addEventListener('click', function () { setLanguage('zh'); });
})();
