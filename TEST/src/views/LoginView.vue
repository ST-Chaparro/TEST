<script setup>
import Nabvar from '@/components/navegacion/Navbar.vue'
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'


const auth = useAuthStore()


const email = ref("")
const password = ref("")


const submit = (e) => {
    e.preventDefault(); 
    auth.login(email.value, password.value)
}


</script>
<template>
    <div class="w-screen h-screen flex flex-col overflow-hidden bg-gray-100">
      <Nabvar />
  
      <div class="flex-1 flex items-center justify-center">
        <form class="card">
          <div class="logo-container">
            <img src="@/assets/logosofu.png" alt="logo sofu" class="logo">
          </div>
          <h2 class="title">Bienvenido</h2>
  
          <div class="input-card">
            <label for="email">Correo Electrónico</label>
            <input 
              type="email"
              id="email"
              v-model="email"
              required
            />
          </div>
  
          <div class="input-card">
            <label for="password">Contraseña</label>
            <input 
              type="password"
              id="password"
              v-model="password"
              required
            />
          </div>
  
          <button type="submit" @click="submit" class="login-button">
            Iniciar Sesión
          </button>
  
          <p class="version">[ versión - 0.0.0 ]</p>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Evita scroll en toda la pantalla */
  html, body {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  
  .card {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    width: 100%;
    max-width: 380px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-top: 5px solid #003366;
    text-align: center;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .logo {
    width: 200px;
  }
  
  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .input-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-align: left;
  }
  
  .input-card label {
    font-size: 18px;
    color: #003366;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .input-card input {
    padding: 15px;
    border: 1px solid #003366;
    border-radius: 5px;
    font-size: 16px;    
  }
  
  .login-button {
    width: 100%;
    padding: 12px;
    border: none;
    background-color: #003366;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 15px;
  }
  
  .login-button:hover {
    background-color: white;
    color: #003366;
    border: 1px solid #003366;
  }
  
  .version {
    font-size: 12px;
    color: gray;
    margin-top: 10px;
  }
  </style>
  