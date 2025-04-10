<template>
  <div class="row g-3 my-2 mx-auto w-75">
    <div class="col-2">
      <select class="form-select bg-dark text-light">
        <option selected>Kategoriyalar</option>
        <option>Mebel</option>
        <option>Stol</option>
        <option>Divan</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select bg-dark text-light">
        <option selected>Davlat</option>
        <option>O'zbekiston</option>
        <option>Rossiya</option>
        <option>Xitoy</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select bg-dark text-light">
        <option selected>Aralash</option>
        <option>Narxi: Yuqoridan</option>
        <option>Narxi: Pastdan</option>
      </select>
    </div>
    <div class="col-2">
      <input type="search" class="form-control bg-dark text-light" placeholder="Kalit so'z">
    </div>
    <div class="col-2">
      <button class="btn btn-primary w-100">Qidiruv</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>