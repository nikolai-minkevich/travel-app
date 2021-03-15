class GetLanguage {
    STORAGE_VARIABLE_NAME = "travelApp43_language";
    DEFAULT_LANGUAGE_CODE = 0;

    get = () => {
        let lang = localStorage.getItem(this.STORAGE_VARIABLE_NAME);
        if (!lang) lang = this.DEFAULT_LANGUAGE_CODE;
        return lang;
    }

    set = lang => localStorage.setItem(this.STORAGE_VARIABLE_NAME, lang);
}

export default GetLanguage

// lang должен иметь значение 0, 1, 2 в соответствии с 
// LANGUAGE = ["en", "ru", "fr"];