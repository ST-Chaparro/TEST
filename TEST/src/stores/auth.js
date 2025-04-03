import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import {useRouter} from 'vue-router'


export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth()
  const authUser = ref(null)
  const router = useRouter()

  onMounted(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        authUser.value = user
        
      }
    })
  })

  const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value )
    .then((userCredential) => {
        const user = userCredential.user
        authUser.value = user
        router.push({name: 'dashboard'})
        // console.log(authUser.value)
    })
    .catch(error => {
      console.log(error.message)
    })
 }

 const logout = () => {
     signOut(auth).then(()=> {
      authUser.value = null
      router.push({name: 'home'})
     }).catch(error => {
      console.log(error)
     })
 }

 const isAuth = computed(()=>{
  return authUser.value
  
 })

return {
    user: authUser,
    login,
    isAuth,
    logout
}
})

