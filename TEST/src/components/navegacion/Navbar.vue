<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();

const menuOpen = ref(false);

const logoutAndCloseMenu = () => {
  menuOpen.value = false;
  auth.logout();
};
</script>

<template>
  <nav class="bg-zinc-100 p-4 font-mono shadow-lg w-full">
    <div class=" flex items-center justify-between w-full px-4">
      <router-link to="/dashboard" class="flex items-center text-green-800" v-if="auth.isAuth">
        <img src="/src/assets/logosofu.png" class="h-9 mr-2" />
      </router-link>
      <router-link to="/" class="flex items-center text-green-800" v-else >
        <img src="/src/assets/logosofu.png" class="h-9 mr-2" />
      </router-link>

      <div class="flex items-center gap-4">
        <!-- <button
          v-if="auth.isAuth"
          class="flex items-center justify-center w-12 h-12 border-2 border-second bg-second rounded-lg hover:bg-white hover:border-blue-800 transition-all"
        >
      
        </button> -->

        <router-link
          to="/perfil"
        >
          <button
          v-if="auth.isAuth"
          class="flex items-center justify-center w-12 h-12 border-2 border-none bg-white rounded-full hover:bg-gray-300 transition-all"
          ></button>
        </router-link>
    
          
      

        <button
          @click="menuOpen = !menuOpen"
          class="group flex items-center justify-center w-12 h-12 border-2 border-second bg-second rounded-lg hover:bg-zinc-100 hover:border-second transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            class="fill-white group-hover:fill-second transition-colors duration-300"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed top-0 left-0 w-64 h-full bg-white text-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50"
    >
      <div class="flex justify-between items-center p-4 border-b">
        <span class="text-xl font-bold">DSEI</span>
        <button
          @click="menuOpen = false"
          class="group text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            class="fill-gray-400 group-hover:fill-black transition-colors duration-200"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </button>
      </div>

      <div v-if="auth.isAuth">
        <ul class="p-4 space-y-4">
          <li>
            <router-link
              to="/"
              class="flex items-center px-4 py-2 border-2 bg-black rounded-md text-zinc-100 font-bold hover:border-black hover:text-black hover:bg-zinc-100 cursor-pointer"
              @click="logoutAndCloseMenu"
            >
              <span class="mr-2"></span> Cerrar Sesion
            </router-link>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center px-4 py-2 border rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              <span class="mr-2"></span> Soporte Técnico
            </a>
          </li>
        </ul>
      </div>

      <div v-else>
        <ul class="p-4 space-y-4">
          <li>
            <router-link
              to="/login"
              class="flex items-center px-4 py-2 border-2 bg-second rounded-md text-zinc-100 font-bold hover:border-second hover:text-second hover:bg-zinc-100 cursor-pointer"
              @click="menuOpen = false"
            >
              <span class="mr-2"></span> Ingresar
            </router-link>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center px-4 py-2 border rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              <span class="mr-2"></span> Soporte Técnico
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-if="menuOpen"
      @click="menuOpen = false"
      class="fixed inset-0 bg-black opacity-50 z-40"
    ></div>
  </nav>
</template>


