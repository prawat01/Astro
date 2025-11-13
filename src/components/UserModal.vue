<script lang="ts" setup>
import { ref } from 'vue'

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  Provine: string;
}

const props = defineProps<{
  user: User
}>()

const open = ref(false)
</script>

<template>
  <button @click="open = !open" type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Modal</button>

  <div v-if="open" class="fixed z-10 inset-0 overflow-y-auto" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="bg-gray-100 rounded-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4 shadow-xl my-4 relative mx-auto max-w-sm">
      <button @click="open = false" class="close absolute top-0 right-0 mt-3 mr-3 text-gray-400 hover:text-gray-500 bg-transparent border-none" style="font-size: 28px;">&times;</button>
      <h2 class="text-3xl leading-6 font-medium text-gray-900 mb-3">{{ props.user.name }}</h2>
      <p class="text-xl text-gray-600">Email: {{ props.user.email }}</p>
      <p class="text-xl text-gray-600">Phone: {{ props.user.phone }}</p>
      <p class="text-xl text-gray-600">Phone: {{ props.user.Provine }}</p>
    </div>
  </div>
</template>