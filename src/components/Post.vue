<template>
  <div class="container mt-2 py-3 pb-5">
    <div class="row g-4">
      <!-- Error -->
      <div v-if="isError" class="col-12 text-center text-danger">
        {{ $t('error_occurred') }}
      </div>

      <!-- Posts -->
      <div v-for="post in posts" :key="post.id" class="col-6 col-md-4 col-lg-3">
        <PostCard :post="post"/>
      </div>
    </div>

    <!-- Loading Spinner -->
    <div v-if="isLoading" class="d-flex justify-content-center align-items-center col-12 mt-5 mx-auto">
      <div class="spinner-border text-white" role="status">
        <span class="visually-hidden">{{ $t('loading') }}</span>
      </div>
    </div>

    <!-- Yuklash tugmasi va kuzatuv elementi -->
    <div ref="loadMore" class="col-12 text-center mt-4" v-if="!isLoading && nextPageUrl">
      <button class="btn btn-outline-primary" @click="loadMorePosts">
        {{ $t('load_more') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, onMounted} from 'vue';
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

// Postlar hook'dan
const {posts, isLoading, isError, loadPosts, nextPageUrl} = usePosts();

// Computed sahifalar soni
const totalPages = computed(() => (nextPageUrl.value ? currentPage.value + 1 : currentPage.value));

// Elementga `ref`
const loadMore = ref<HTMLElement | null>(null);

// Qo‘shimcha postlarni yuklash
const loadMorePosts = () => {
  if (currentPage.value < totalPages.value && !isLoading.value) {
    currentPage.value += 1;
    loadPosts(currentPage.value);
  }
};

// Til o‘zgarganda postlarni qayta yuklash
watch(() => langStore.lang, () => {
  locale.value = langStore.lang;
  currentPage.value = 1;
  loadPosts(currentPage.value);
});

// IntersectionObserver orqali avtomatik yuklash
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && currentPage.value < totalPages.value && !isLoading.value) {
          loadMorePosts();
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 1.0,
    }
  );

  if (loadMore.value) {
    observer.observe(loadMore.value);
  }
});
</script>

<style scoped>
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
