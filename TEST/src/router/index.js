import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebaseAuth, useStorageFileUrl } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      meta: { requiresAuth: true},
      // children: [
      //   {
      //     path: '/perfil',
      //     name:  'perfil',
      //     component: () => import('../components/users/Profile.vue')
      //   }
      // ]
    },
    {
      path: '/perfil',
      name:  'perfil',
      component: () => import('../components/perfil/Profile.vue'),
      meta: { requiresAuth: true},
      children: [
        {
          path: '/perfil/editar',
          name: 'editar-perfil'
        }
      ]
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const auth = useFirebaseAuth();
  

  const user = await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
  
  // Si el usuario está autenticado y trata de acceder a rutas públicas (home o login), redirigir al dashboard
  if (user && (to.name === 'login' || to.name === 'home')) {
    next({ name: 'dashboard' });
    return;
  }
  
  // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir a login
  if (requiresAuth && !user) {
    next({ name: 'login' });
    return;
  }
  

  next();
});

export default router;
