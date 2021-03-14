const STORAGE_VARIABLE_NAME = "travelApp43_language";
const LANGUAGES = ["en", "ru", "fr"];
const DEFAULT_LANGUAGE_CODE = LANGUAGES[0];

export class LanguageSwitcher {
  constructor() {
    this.load();
  }
  load() {
    this.language = localStorage.getItem(STORAGE_VARIABLE_NAME);
    if (!this.language) {
      this.language = DEFAULT_LANGUAGE_CODE;
      this.save();
    }
    return this.get();
  }
  save() {
    localStorage.setItem(STORAGE_VARIABLE_NAME, this.language);
    return this.get();
  }
  set(newLanguage) {
    if (!LANGUAGES.includes(newLanguage)) {
      return this.get();
    }
    this.language = newLanguage;
    this.save();
    return this.get();
  }
  get() {
    return this.language;
  }
}
