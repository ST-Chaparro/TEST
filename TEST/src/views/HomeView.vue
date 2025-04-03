<script setup>
 import Navbar from '@/components/navegacion/Navbar.vue';
</script>

<template>
  <div>
    <Navbar/>
  </div>
  <div class="flex items-center justify-center">
    <h1 class="text-3xl font-bold ">Home</h1>
  </div>
    
  <!-- <div class="hero">
    <div class="text-container">
      <h1><span class="span">GPS</span> SOFU</h1>
      <p>Donde la Seguridad se Encuentra con la Innovación</p>
      <router-link :to="{ name: 'login' }" class="iniciar-button">
        Empezar a Monitorear      
      </router-link>
    </div>
    <div class="image-container">
    
    </div>
  </div>
   -->
</template>


<!-- <style scoped>

.hero {
  display: flex;
  align-items: center;
  height: 93vh;
  justify-content: space-between;
  background: radial-gradient(circle at center, #0f1b8a 0%, #060a41 100%);
  color: white;
  padding: 0 10%;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}


.text-container {
  max-width: 50%;
  margin: 0 auto;
  padding: 10px;
}

h1 {
  font-size: 65px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 9px;
}

.span {
  color:  #d61515;
  text-transform: uppercase;
  font-weight: bolder;
}

p {
  font-size: 25px;
  margin-bottom: 20px;
}


.iniciar-button {
  display: inline-block;
  text-decoration: none;
  background: #d61515;
  color: #fcfbfb;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.iniciar-button:hover {
  background: #f8faf8;
  color: #02041a;
  transform: scale(1.05);
}


@media (max-width: 576px) {
  .iniciar-button {
    width: 100%;
  }
}

</style> -->

