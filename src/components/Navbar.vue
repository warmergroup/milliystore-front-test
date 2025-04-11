<script setup lang="ts">
import {useLanguage} from "../hooks/useLanguage.ts";

const {changeLanguage} = useLanguage()
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <div class="container">
            <a class="navbar-brand" href="#">Milly<span class="text-primary">Store</span></a>
            <div class="ms-auto d-flex align-items-center gap-3">
                <!-- Language Dropdown -->
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle d-flex align-items-center gap-2" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://flagcdn.com/w20/uz.png" width="20" alt="Uzbekistan flag">

                    </button>
                  <ul class="dropdown-menu dropdown-menu-end bg-dark">
                    <li><a class="dropdown-item text-light" @click="changeLanguage('uz')">🇺🇿 O'zbekcha</a></li>
                    <li><a class="dropdown-item text-light" @click="changeLanguage('ru')">🇷🇺 Русский</a></li>
                    <li><a class="dropdown-item text-light" @click="changeLanguage('en')">🇬🇧 English</a></li>
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