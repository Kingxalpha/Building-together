document.getElementById("google_translate_element").style.borderColor='#f5207d'
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', 
        includedLanguages: 'en,fr',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
