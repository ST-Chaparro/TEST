<script setup>
import {} from "vue-router";
import Nabvar from "@/components/navegacion/Navbar.vue";

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
</script>

<template>
  <div>
    <Nabvar />
  </div>
  <div class="mt-5">
    <h1 class="text-3xl font-bold text-center ">Monitorear</h1>
    <div class="container">
      <ul>cliente|</ul>
    </div>
     
    <div class="flex items-center justify-center  mt-10">
   
    </div>
   
  </div>
</template>
