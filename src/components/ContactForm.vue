<template>
    <form class="contact-from" style="flex:6;" @submit.prevent="handleSubmit">

        <!-- Поле имени -->
        <div class="this-input-block">
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
                <div class="dropdown-list" @click="toggleDropdown" :class="{ active: isDropdownActive }">
                    <div class="dropdown-head text-with-svg">
                        <span>{{ currentType.label }}</span>
                    </div>

                    <div class="dropdown-body">
                        <ul class="selected-list">
                            <li v-for="type in contactTypes" :class="{ active: type.value === currentType.value }" :key="type.value" @click.stop="selectType(type)">
                                {{ type.label }}
                                <svg v-if="type.value === currentType.value" width="24" height="24" class="sprite-svg-fill">
                                    <use href="#check"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>

                <input name="email"
                    v-if="currentType.value === 'email'"
                    type="email"
                    v-model="contactValue"
                    placeholder="example@example.com"
                    required
                />
                <input name="phone"
                    v-else-if="currentType.value === 'tel'"
                    type="tel"
                    v-model="contactValue"
                    :placeholder="$t('formPlaceholderType')"
                    required
                />
                <input name="telegram"
                    v-else-if="currentType.value === 'tg'"
                    type="text"
                    v-model="contactValue"
                    placeholder="@telegram_username"
                    required
                />
            </div>
        </div>

        <!-- Кнопка -->
        <button type="submit" class="btn-240 gr-transition">{{ $t('consultBtn') }}</button>
    </form>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            service: '',
            name: '',
            contactValue: '',
            currentTypeValue: 'tel',
            isDropdownActive: false,
        };
    },
    computed: {
        contactTypes() {
            return [
                { value: 'email', label: 'Email' },
                { value: 'tel', label: this.$t('phone') },
                { value: 'tg', label: 'Telegram' },
            ];
        },
        currentType() {
            return this.contactTypes.find(type => type.value === this.currentTypeValue) || this.contactTypes[0];
        }
    },

    methods: {
        selectType(type) {
            this.currentTypeValue = type.value;
            this.contactValue = '';
            this.service = '';
            this.isDropdownActive = false;
        },
        toggleDropdown() {
            this.isDropdownActive = !this.isDropdownActive;
        },
        async handleSubmit() {
            try {
                const payload = {
                    name: this.name,
                    phone: `${this.currentType.label}: ${this.contactValue}`,
                    service: this.service,
                };

                console.log('Отправляемые данные:', payload);

                const res = await axios.post('http://localhost:3000/send-lead', payload);

                if (res.data.success) {
                    alert('✅ Лид отправлен!');
                    this.name = '';
                    this.contactValue = '';
                } else {
                    alert('❌ Ошибка при отправке.');
                }
            } catch (error) {
                console.error('Ошибка при отправке:', error.response ? error.response.data : error.message);
                alert('⚠️ Ошибка сервера.');
            }
        }
    }

};

</script>
