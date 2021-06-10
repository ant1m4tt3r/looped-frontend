<script>
import UserListContainer from "@/components/UserListContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { UserListContainer },
});
</script>

<template>
  <div class="flex flex-col max-w-screen-xl mx-auto">
    <div class="border-2 border-gray-800 rounded py-8 px-8 flex justify-center">
      <UserListContainer />
    </div>
  </div>
</template>
