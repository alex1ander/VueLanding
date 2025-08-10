<template>
  <form class="contact-from" style="flex:6;" @submit.prevent="handleSubmit">

    <!-- honeypot поле (скрытое) для защиты от спама -->
    <input type="text" v-model="honeypot" name="honeypot" style="display:none" autocomplete="off" tabindex="-1" />

    <!-- Поле имени -->
    <div class="this-input-block">
      <input type="hidden" v-model="localService" name="service" readonly />
      <label for="name">{{ $t('formLabelName') }}</label>
      <input
        type="text"
        id="name"
        name="name"
        :placeholder="$t('formLabelName')"
        required
        v-model="name"
      />
    </div>

    <!-- Кастомный дропдаун + поле -->
    <div class="this-input-block">
      <label>{{ $t('formLabelContact') }}</label>

      <div class="wrapper-input">
        <div
          class="dropdown-list"
          ref="dropdown"
          :class="{ active: isDropdownActive }"
        >
          <div class="dropdown-head text-with-svg" @click="toggleDropdown">
            <span>{{ currentType.label }}</span>
          </div>

          <div class="dropdown-body" @click.stop>
            <ul class="selected-list animated-list">
              <li
                v-for="type in contactTypes"
                :class="{ active: type.value === currentType.value }"
                :key="type.value"
                @click.stop="selectType(type)"
                class="cursor-hover"
              >
                {{ type.label }}
                <svg
                  v-if="type.value === currentType.value"
                  width="24"
                  height="24"
                  class="sprite-svg-fill"
                >
                  <use href="#check"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <input
          name="email"
          v-if="currentType.value === 'email'"
          type="email"
          v-model="contactValue"
          placeholder="example@example.com"
          required
        />
        <input
          name="phone"
          v-else-if="currentType.value === 'tel'"
          type="tel"
          v-model="contactValue"
          :placeholder="$t('formPlaceholderType')"
          required
        />
        <input
          name="telegram"
          v-else-if="currentType.value === 'tg'"
          type="text"
          v-model="contactValue"
          placeholder="@telegram_username"
          required
        />
        <input
          name="whatsapp"
          v-else-if="currentType.value === 'whatsapp'"
          type="tel"
          v-model="contactValue"
          :placeholder="$t('formPlaceholderType')"
          required
        />
      </div>
    </div>

    <!-- Чекбокс оставить комментарий -->
    <div class="isWantsComment this-input-block">
      <label>{{ $t('formIsWantsComment') }}</label>
      <div class="wrapper-input">
        <input
          type="checkbox"
          v-model="wantsComment"
        />
      </div>
    </div>

    <!-- Текстовое поле комментария, появляется только если wantsComment === true -->
    <transition name="expand">
      <div class="this-input-block" v-if="wantsComment" style="overflow: hidden;">
        <label for="comment">{{ $t('formLabelComment') }}</label>
        <textarea
          id="comment"
          name="comment"
          v-model="comment"
          rows="4"
          :placeholder="$t('formPlaceholderComment')"
        ></textarea>
      </div>
    </transition>




    <!-- Кнопка -->
    <button type="submit" class="btn-240 gr-transition" :disabled="loading">
      {{ loading ? $t('loading') : $t('consultBtn') }}
    </button>

    <!-- Сообщение об успехе или ошибке -->
    <p v-if="message.text" :class="['form-message', message.type]">{{ message.text }}</p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    service: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      localService: this.service,  // локальная копия пропса
      name: '',
      contactValue: '',
      currentTypeValue: 'tel',
      isDropdownActive: false,
      honeypot: '', // для защиты от спама
      loading: false,
      message: {
        text: '',
        type: '' // 'success' или 'error'
      },

      wantsComment: false,
      comment: '',
    }
  },
  computed: {
    contactTypes() {
      return [
        { value: 'email', label: 'Email' },
        { value: 'tel', label: this.$t('phone') },
        { value: 'tg', label: 'Telegram' },
        { value: 'whatsapp', label: 'WhatsApp' },
      ]
    },
    currentType() {
      return this.contactTypes.find(type => type.value === this.currentTypeValue) || this.contactTypes[0]
    },
  },
  watch: {
    service(newVal) {
      this.localService = newVal
    }
  },
  methods: {
    selectType(type) {
      this.currentTypeValue = type.value
      this.contactValue = ''
      this.isDropdownActive = false
      this.clearMessage()
    },
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive
    },
    onClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isDropdownActive = false
      }
    },
    clearMessage() {
      this.message.text = ''
      this.message.type = ''
    },
    async handleSubmit() {
      this.clearMessage()

      if (this.honeypot.trim() !== '') {
        console.warn('Spam detected via honeypot')
        return
      }

      this.loading = true
      try {
        const payload = {
          name: this.name,
          contactType: this.currentType.value,
          contactValue: this.contactValue,
          service: this.localService,
        }

        // Добавляем комментарий, если пользователь хочет его оставить
        if (this.wantsComment && this.comment.trim() !== '') {
          payload.comment = this.comment.trim()
        }

        const res = await axios.post('http://localhost:3000/send-lead', payload)

        if (res.data.success) {
          this.message.text = this.$t('formMessageSuccess')
          this.message.type = 'success'

          // Сброс формы
          this.name = ''
          this.contactValue = ''
          this.localService = ''
          this.currentTypeValue = 'tel'
          this.isDropdownActive = false
          this.wantsComment = false
          this.comment = ''
        } else {
          this.message.text = this.$t('formMessageErrorSend')
          this.message.type = 'error'
        }
      } catch (error) {
        console.error('Ошибка при отправке:', error.response ? error.response.data : error.message)
        this.message.text = this.$t('formMessageErrorServer')
        this.message.type = 'error'
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onClickOutside)
  },
}
</script>

<style scoped>
.form-message {
  margin-top: 1rem;
  font-weight: 600;
}

.form-message.success {
  color: green;
}

.form-message.error {
  color: red;
}

.isWantsComment{
  flex-direction: row;
  align-items: center;
  align-self: start;
}




</style>
