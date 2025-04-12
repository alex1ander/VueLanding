<template>
  <div id="pop-up">
    <div class="pop-up-form">
      <svg width="13" height="13" class="btn-pop-up">
        <use href="#close"></use>
      </svg>
      <div class="pop-up-container">
        <form class="wpcf7-form" style="flex:6;">

            <div class="this-input-block">
              <label for="name">Ваше ім’я:</label>
              <input type="text" id="name" name="name" placeholder="Ваше ім’я:" required>
            </div>
            <div class="this-input-block">
              <label for="phone">Ваш телефон:</label>
              <input type="tel" id="phone" name="phone" placeholder="+38 ____ ___ ___" required>
            </div>

          <button type="submit" class="btn-160-circle reverse-style">Отримати консультацію</button>
        </form>
      </div>
    </div>
  </div>
</template>
  