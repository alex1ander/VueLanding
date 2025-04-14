<template>
    <form class="contact-from" style="flex:6;" @submit.prevent="handleSubmit">
      <!-- Поле имени -->
      <div class="this-input-block">
        <label for="name">Ваше ім’я:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ваше ім’я:"
          required
          v-model="name"
        />
      </div>
  
      <!-- Кастомный дропдаун + поле -->
      <div class="this-input-block">
        <label>Ваш контакт:</label>

        <div class="wrapper-input">
          <div class="dropdown-list" @click="toggleDropdown" :class="{ active: isDropdownActive }">
                <div class="dropdown-head text-with-svg">
                    <span>{{ currentType.label }}</span>
                </div>
        
                <div class="dropdown-body" v-if="isDropdownActive">
                <ul class="selected-list">
                    <li v-for="type in contactTypes" :key="type.value" @click.stop="selectType(type)">
                    {{ type.label }}
                    </li>
                </ul>
                </div>
          </div>
    
          <input
            v-if="currentType.value === 'email'"
            type="email"
            v-model="contactValue"
            placeholder="example@example.com"
            required
          />
          <input
            v-else-if="currentType.value === 'tel'"
            type="tel"
            v-model="contactValue"
            placeholder="+38 ____ ___ ___"
            required
          />
          <input
            v-else-if="currentType.value === 'tg'"
            type="text"
            v-model="contactValue"
            placeholder="@telegram_username"
            required
          />
        </div>
      </div>
  
      <!-- Кнопка -->
      <button type="submit" class="btn-160-circle reverse-style">Отримати консультацію</button>
    </form>
  </template>
  
  <script>

import { gsap } from 'gsap';
  export default {
    data() {
      return {
        name: '',
        contactValue: '',
        isDropdownActive: false,
        
        contactTypes: [
          { value: 'email', label: 'Email' },
          { value: 'tel', label: 'Телефон' },
          { value: 'tg', label: 'Telegram' },
        ],
        currentType: { value: 'tel', label: 'Телефон' },
      };
    },
    methods: {
        selectType(type) {
            this.currentType = type;
            this.contactValue = '';
            this.isDropdownActive = false;
        },
        handleSubmit() {
            console.log('Имя:', this.name);
            console.log('Тип:', this.currentType.value);
            console.log('Контакт:', this.contactValue);
        },
        toggleDropdown() {
            this.isDropdownActive = !this.isDropdownActive;
            this.animateItems();
        },
        animateItems() {
            gsap.killTweensOf('.selected-list li');
            gsap.set('.selected-list li', { opacity: 0, y: 20 });

            gsap.timeline().to('.selected-list li', {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                ease: 'power3.out',
            });
        },
    },
  };
  </script>
  
  