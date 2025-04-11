<template>
  <div class="row g-3 my-2 mx-auto w-75">
    <!-- Tilni tanlash uchun dropdown -->
    <div class="col-2">
      <select class="form-select bg-dark text-light" v-model="selectedLanguage">
        <option value="uz">O'zbekcha</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>

    <!-- Kategoriyalar -->
    <div class="col-2">
      <select class="form-select bg-dark text-light" v-model="selectedCategory">
        <option class="bg-dark text-light" disabled selected value="">Kategoriyalar</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ getCategoryName(cat) }}
        </option>
      </select>
    </div>

    <!-- Davlatlar -->
    <div class="col-2">
      <select class="form-select bg-dark text-light" v-model="selectedCountry">
        <option class="bg-dark text-light" disabled selected value="">Davlatlar</option>
        <option v-for="country in countries" :key="country.id" :value="country.id">
          {{ getCountryName(country) }}
        </option>
      </select>
    </div>

    <!-- Saralash -->
    <div class="col-2">
      <select class="form-select bg-dark text-light" v-model="sortOption">
        <option disabled selected value="">Saralash</option>
        <option value="desc">Narxi: Yuqoridan</option>
        <option value="asc">Narxi: Pastdan</option>
      </select>
    </div>

    <!-- Kalit so'z qidiruv -->
    <div class="col-2">
      <input type="search" class="form-control bg-dark text-light" placeholder="Kalit so'z" v-model="searchTerm">
    </div>

    <!-- Qidiruv tugmasi -->
    <div class="col-2">
      <button class="btn btn-primary w-100">Qidiruv</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCategories } from '../hooks/useCategory';
import { useCountries } from '../hooks/useCountries';

const selectedCountry = ref('');
const selectedCategory = ref('');
const searchTerm = ref('');
const sortOption = ref('');
const selectedLanguage = ref('uz'); // Foydalanuvchi tanlagan til

// Kategoriyalar va davlatlar ma'lumotlarini olish
const { data: categories = [] } = useCategories();
const { data: countries = [] } = useCountries();

// Tilga qarab kategoriya nomini olish
const getCategoryName = (cat: any) => {
  switch (selectedLanguage.value) {
    case 'ru':
      return cat.name_ru || cat.name_uz; // Agar ruscha nom mavjud bo'lsa, uni qaytaradi
    case 'en':
      return cat.name_en || cat.name_uz; // Agar inglizcha nom mavjud bo'lsa, uni qaytaradi
    default:
      return cat.name_uz; // O'zbekcha nomni qaytaradi
  }
};

// Tilga qarab davlat nomini olish
const getCountryName = (country: any) => {
  switch (selectedLanguage.value) {
    case 'ru':
      return country.name_ru || country.name_uz; // Agar ruscha nom mavjud bo'lsa, uni qaytaradi
    case 'en':
      return country.name_en || country.name_uz; // Agar inglizcha nom mavjud bo'lsa, uni qaytaradi
    default:
      return country.name_uz; // O'zbekcha nomni qaytaradi
  }
};

// API so'rovlarini yaratish
const queryParams = ref({});

watch([selectedCategory, selectedCountry, searchTerm, sortOption], () => {
  queryParams.value = {
    ...(selectedCategory.value && { cat1: selectedCategory.value }),
    ...(selectedCountry.value && { country: selectedCountry.value }),
    ...(searchTerm.value && { search: searchTerm.value }),
    ...(sortOption.value && {
      order:
        sortOption.value === 'asc' ? 'price_up' :
          sortOption.value === 'desc' ? 'price_down' : '',
    }),
    limit: 10,
  };
});
</script>
