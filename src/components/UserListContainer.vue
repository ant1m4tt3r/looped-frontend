<template>
  <div class="container max-w-sm bg-black flex flex-col p-6 text-white">
    <input
      v-model="search"
      type="rounded py-6 focus:outline-none"
      placeholder="Search for a user..."
    />
    <h1 class="text-xl font-bold my-6">{{ numberOfUsers }} Joined</h1>
    <span class="description text-sm mb-6"
      >People who signed up for the event, whether by purchasing it or entering
      a ticket code.</span
    >
    <UserList :users="state.users" :search="search" />
  </div>
</template>

<script>
import { useDebounceFn } from "@vueuse/core";
import {
  defineComponent,
  reactive,
  computed,
  onMounted,
  ref,
  watch,
} from "vue";
import UserList from "./UserList.vue";
import { useParticipants } from "@/services/useParticipantsService";

export default defineComponent({
  name: "UserListContainer",
  components: { UserList },

  setup() {
    const search = ref("");
    const isLoading = ref(true);
    const state = reactive({
      users: [],
    });

    const numberOfUsers = computed(() => state.users.length);

    async function fetchParticipants() {
      state.users = await useParticipants(search.value);
    }

    const debouncedFetch = useDebounceFn(fetchParticipants, 500);

    watch(search, debouncedFetch);

    onMounted(async () => {
      await fetchParticipants();
      isLoading.value = false;
    });

    return {
      isLoading,
      numberOfUsers,
      state,
      search,
    };
  },
});
</script>

<style>
input {
  background-color: #262626;
  border-radius: 99px;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
}

.description {
  color: #a5a5a5;
}
</style>
