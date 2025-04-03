<script setup>
import Navbar from '../navegacion/Navbar.vue';
import useProfile from '@/composables/useProfile';

const { userDoc } = useProfile()



</script>

<template>
  <div>
    <Navbar/>
  </div>

  <div class="max-w-5xl mx-auto bg-white shadow my-6 rounded overflow-hidden">
    <!-- Portada (cover) -->
    <div class="bg-gray-200 h-40 relative">
      <!-- Avatar superpuesto en la esquina inferior izquierda -->
      <img
        
        alt="Avatar de usuario"
        class="absolute w-24 h-24 rounded-full border-4 border-white bottom-0 left-8 transform translate-y-1/2 object-cover"
      />
    </div>

    <!-- Contenido: info de usuario + botón Editar Perfil -->
    <div class="px-8 pt-16 pb-6 flex items-center justify-between">
      <div v-if="!userDoc">
          <p>Cargando perfil</p>
      </div>
      <!-- Información de usuario -->
      <div v-else >
        <h2 class="text-xl font-bold">{{ userDoc.name }}</h2>
        <p class="mt-1 "><span class="font-bold"></span>   <span class="uppercase">{{ userDoc.rol }}</span></p>
        <p class="mt-1"><span class="font-semibold">Teléfono:</span> 8888888</p>
        <p class="mt-1">
          <span class="font-semibold">Correo Electrónico:</span> {{userDoc.email }}
        </p>
        <p class="mt-1">Yopal, Casanare, Colombia</p>
      </div>

      <!-- Botón Editar Perfil -->
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Editar Perfil
      </button>
    </div>
  </div>
</template>

