<script setup lang="ts">
import {computed, onMounted} from 'vue';
import {useLanguage} from '../hooks/useLanguage.ts';
import {useLanguageStore} from "../stores/language.ts";

// Store va funksiyalar
const {changeLanguage} = useLanguage();
const langStore = useLanguageStore();

// Hozirgi til kodi (masalan: 'uz', 'ru', 'en')
const currentLang = computed(() => langStore.lang);

// Sahifa yuklanganda saqlangan tilni tiklash
onMounted(() => {
  const storedLang = langStore.lang; // Get stored language from Pinia store
  changeLanguage(storedLang); // Change language using i18n
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div class="container">
      <a class="navbar-brand" href="#">Milly<span class="text-primary">Store</span></a>

      <div class="ms-auto d-flex align-items-center gap-3">
        <!-- Language Dropdown -->
        <div class="dropdown">
          <button class="btn btn-dark p-2 d-flex align-items-center gap-2" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
            <img
              :src="`https://flagcdn.com/w20/${currentLang === 'uz' ? 'uz' : currentLang === 'ru' ? 'ru' : 'gb'}.png`"
              width="20"
              :alt="currentLang + ' flag'"
            />
          </button>

          <ul class="dropdown-menu dropdown-menu-end bg-dark">
            <!-- Uzbek flag (hidden if current language is 'uz') -->
            <li v-if="currentLang !== 'uz'">
              <a class="dropdown-item text-light d-flex align-items-center gap-2" @click="changeLanguage('uz')">
                <img src="https://flagcdn.com/w20/uz.png" width="20" alt="Uzbekistan Flag"/>
              </a>
            </li>
            <!-- Russian flag (hidden if current language is 'ru') -->
            <li v-if="currentLang !== 'ru'">
              <a class="dropdown-item text-light d-flex align-items-center gap-2" @click="changeLanguage('ru')">
                <img src="https://flagcdn.com/w20/ru.png" width="20" alt="Russia Flag"/>
              </a>
            </li>
            <!--            English flag (hidden if current language is 'en')-->
            <li v-if="currentLang !== 'en'">
              <a class="dropdown-item text-light d-flex align-items-center gap-2" @click="changeLanguage('en')">
                <img src="https://flagcdn.com/w20/gb.png" width="20" alt="Great Britain Flag"/>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" class="text-light"><i class="fa-regular fa-heart"></i></a>
        <a href="#" class="text-light"><i class="fa-solid fa-basket-shopping"></i></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar i {
  font-size: 1.25rem;
}

.dropdown-menu {
  min-width: 10px;
  margin-top: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-item {
  padding: 0.5rem 1rem;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
