function showLanguageSelector() {
    const languageSelector = document.querySelector('.language-select');
    const arrow = document.querySelector('.arrow-lang');
  
    languageSelector.style.display = 'block';
    languageSelector.style.position = 'absolute';
    languageSelector.style.top = arrow.offsetTop + arrow.offsetHeight + 'px';
    languageSelector.style.left = arrow.offsetLeft + 'px';
  }
  
  function applyLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    const textWrapper = document.querySelector('.text-wrapper-77');
  
    textWrapper.textContent = selectedLanguage;
    const languageSelector = document.querySelector('.language-select');
    languageSelector.style.display = 'none';
    // Добавьте здесь логику для изменения языка на странице или другие действия
  }
  