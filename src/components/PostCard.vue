<script setup lang="ts">
import {computed} from 'vue';
import {useLanguageStore} from '../stores/language';
import {useI18n} from 'vue-i18n';

// Props definition
const props = defineProps<{
  post: {
    id: number;
    title: string;
    cat2: any;       // Category object
    cat3: any;       // Subcategory object
    description: string;
    price: number;
    status: string;
    views: number;
    region: any;
    city: any;
    currency: any;
    images: any[];
  }
}>();

const langStore = useLanguageStore();
const {locale} = useI18n();
locale.value = langStore.lang;

// Get the language
const lang = computed(() => langStore.lang);

// Get the image URL for the first image in the post
const getImage = computed(() => {
  return props.post.images?.[0]?.rs_medium
    ? `https://api.milliy.store/${props.post.images[0].rs_medium}`
    : 'https://via.placeholder.com/300x200';
});
</script>

<template>
  <div class="card product-card">
    <button class="btn btn-secondary position-absolute z-1 top-0 end-0 m-1">
      <i class="far fa-heart"></i>
    </button>
    <div class="image-container">
      <img loading="lazy" :src="getImage" class="card-img-top" :alt="post.title"/>
      <div class="views-badge position-absolute bottom-0 start-0">
        <i class="far fa-eye"></i> {{ $t("views") }}: {{ post.views }}
      </div>
    </div>

    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <h1 class="card-title text-light">{{ post.title }}</h1>
        <div class="card-category">
          <p class="text-secondary m-0">
            {{ post.cat2?.[`name_${lang} /`] || '' }} {{ post.cat3?.[`name_${lang}`] || '' }}
          </p>
        </div>
        <div class="location">
          <small class="text-white-50">
            {{ post.region?.[`name_${lang} ,`] || '' }} {{ post.city?.[`name_${lang}`] || '' }}
          </small>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2">
        <p class="price p-0 m-0">
          {{ post.price }} {{ post.currency?.[`name_${lang}`] || '' }}
        </p>
        <button class="btn btn-secondary btn-sm">
          <i class="bi bi-cart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 23rem;
  border: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  display: flex;
  flex-direction: column;
  background-color: #2b2a2a;
  flex-grow: 1;
  padding: 15px;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}

.image-container {
  position: relative;
}

.views-badge {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 5px;
}

.card-title {
  font-size: .8rem;
  font-weight: 600;
}

.card-category {
  font-size: 0.875rem;

}

.price {
  font-size: 1rem;
  font-weight: 400;
  color: #007bff;
}

.location {
  font-size: 0.875rem;
  color: #6c757d;
}
</style>
