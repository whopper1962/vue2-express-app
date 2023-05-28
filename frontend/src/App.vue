<template>
  <div>
    <NavBar></NavBar>
    <div class="p-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style></style>
