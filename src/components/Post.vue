<template>
  <div class="container py-5">
    <div class="row g-4">
      <!-- Loading -->
      <div v-if="isLoading" class="col-12 text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">{{ $t("loading") }}</span>
        </div>
      </div>

      <!-- Error -->
      <div v-if="isError" class="col-12 text-center text-danger">
        {{ $t("error_occurred") }}
      </div>

      <!-- Posts -->
      <div v-for="post in posts" :key="post.id" class="col-12 col-md-6 col-lg-3">
        <PostCard :post="post"/>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="d-flex justify-content-center mt-4">
      <button
        class="btn btn-outline-secondary me-2"
        :disabled="currentPage <= 1"
        @click="goToPage(currentPage - 1)"
      >
        {{ $t("previous") }}
      </button>
      <button
        class="btn btn-outline-secondary"
        :disabled="currentPage >= totalPages"
        @click="goToPage(currentPage + 1)"
      >
        {{ $t("next") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue';
import {usePosts} from '../hooks/usePost';
import PostCard from '../components/PostCard.vue';
import {useLanguageStore} from '../stores/language';
import {useI18n} from 'vue-i18n';

// Til sozlamasi
const langStore = useLanguageStore();
const {locale} = useI18n();
locale.value = langStore.lang;

// Sahifalash
const currentPage = ref(1);

// Postlar API
const {data, isLoading, isError, refetch} = usePosts({page: currentPage, limit: 12});

// Computed qiymatlar
const posts = computed(() => data.value?.data || []);
const totalPages = computed(() => data.value?.totalPages || 1);

// Sahifa o'zgarsa qaytadan chaqir
const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
};

// Til o‘zgarsa query qayta ishlashi uchun kuzatish
watch(() => langStore.lang, () => {
  locale.value = langStore.lang;
  refetch();
});
</script>

<style scoped>

</style>
