<template>
    <div class="dropdown-list" @click="toggleDropdown" :class="{ active: isDropdownActive }">
      <div class="dropdown-head text-with-svg btn-backarea">
        <svg width="30" height="30" class="sprite-svg-fill">
          <use href="#earth"></use>
        </svg>
        <span class="lang-code">{{ $t('currentLanguageCode') }}</span> <!-- Здесь отображается текущий язык -->
      </div>
      <div class="dropdown-body">
        <ul class="selected-list animated-list">
          <li :class="{ active: locale.value === 'ua' }" @click.stop="switchLanguage('ua')">
            Українська
            <svg v-if="locale.value === 'ua'" width="16" height="16" class="sprite-svg-fill">
              <use href="#check"></use>
            </svg>
          </li>
          <li :class="{ active: locale.value === 'ru' }" @click.stop="switchLanguage('ru')">
            Русский
            <svg v-if="locale.value === 'ru'" width="24" height="24" class="sprite-svg-fill">
              <use href="#check"></use>
            </svg>
          </li>
          <li :class="{ active: locale.value === 'en' }" @click.stop="switchLanguage('en')">
            English
            <svg v-if="locale.value === 'en'" width="24" height="24" class="sprite-svg-fill">
              <use href="#check"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownActive: false, // по умолчанию меню скрыто
        locale: {
          value: localStorage.getItem('lang') || 'en',
        },
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownActive = !this.isDropdownActive;
      },
      switchLanguage(language) {
        this.locale.value = language;
        this.$router.push(`/${language}`);
        localStorage.setItem('lang', language);
        document.documentElement.lang = language;
        this.isDropdownActive = false; // Закрыть меню после выбора языка
      },
    },
    watch: {
      // Следим за изменением locale.value и обновляем язык
      'locale.value': function(newLang) {
        this.$i18n.locale = newLang;  // Обновляем локаль для i18n
      },
    },
    mounted() {
      // Устанавливаем начальную локаль после монтирования компонента
      this.$i18n.locale = this.locale.value;
    },
  };
  </script>
  