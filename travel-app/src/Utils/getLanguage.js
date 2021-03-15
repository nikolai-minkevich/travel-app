class getLanguage {
    STORAGE_VARIABLE_NAME = "travelApp43_language";
    LANGUAGE = ["en", "ru", "fr"];
    DEFAULT_LANGUAGE_CODE = 0;

    get = () => {
        const lang = localStorage.getItem(STORAGE_VARIABLE_NAME);
        if (!lang) lang = LANGUAGE[DEFAULT_LANGUAGE_CODE];
        return lang;
    }

    set = lang => localStorage.setItem(STORAGE_VARIABLE_NAME, lang);
}

export default getLanguage

// lang должен иметь значение 0, 1, 2 в соответствии с language