import { doc } from 'firebase/firestore'
import { useFirestore, useDocument } from 'vuefire'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'


export default function useProfile() {
  const db = useFirestore()
  const authStore = useAuthStore()

  const userDocRef = computed(() => {
    if (!authStore.user?.uid) return null
    return doc(db, 'usuarios', authStore.user.uid)
  })

  const userDoc = useDocument(userDocRef)

  return {
    userDoc
  }
}
