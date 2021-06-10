<template>
  <ul class="max-h-96 overflow-hidden overflow-y-auto">
    <li v-for="(user, index) in users" :key="user.email">
      <div
        class="
          flex flex-row
          border-gray-600 border-t
          py-6
          items-center
          justify-items-stretch
        "
      >
        <small class="text-gray-400 mr-5">{{ index + 1 }}</small>
        <img :src="user.imageUrl" :alt="user.name" class="w-12 h-12 mr-3" />
        <span class="flex-grow">{{ user.name }}</span>
        <span
          v-if="user.purchase"
          class="
            text-sm
            font-bold
            rounded-full
            w-5
            h-5
            text-center
            align-middle
            bg-indigo-600
          "
          >$</span
        >
        <span class="pl-5 text-gray-600 font-bold">></span>
      </div>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    users: {
      required: true,
      type: Array,
    },
    search: {
      default: "",
      type: String,
    },
  },
});
</script>
