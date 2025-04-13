import {ref, onMounted} from 'vue';
import api from '../service/api';

export const usePosts = () => {
  const posts = ref<any[]>([]); // Yangi tip belgilash
  const currentPage = ref(1); // Hozirgi sahifa
  const isLoading = ref(false); // Yuklanayotgan holat
  const nextPageUrl = ref<string | null>(null); // Keyingi sahifa URL-si
  const isError = ref(false); // Xato holati

  const loadPosts = async (page = 1) => {
    isLoading.value = true;
    isError.value = false;

    try {
      const response = await api.get('/posts', {
        params: {order: 'random', page, per_page: 12},
      });

      // Agar keyingi sahifa mavjud bo'lsa, uni saqlash
      nextPageUrl.value = response.data.next_page_url;

      // Yangi postlarni eski ro'yxatga qo'shish
      posts.value = [...posts.value, ...response.data.data];
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    loadPosts(currentPage.value); // Dastlabki postlarni yuklash
  });

  return {
    posts,
    isLoading,
    isError, // Xato holatini qo'shish
    loadPosts, // Postlarni yuklash
    nextPageUrl,
  };
};
