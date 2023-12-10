<template>
  <div id="app">
      <Navbar />
    <!-- <Sidebar /> -->
    <TabelAccount />
    <TabelUser />
  </div>
</template>

<script>
import Navbar from './component/NavbarAtas.vue';
import Sidebar from './component/Sidebar.vue';
import TabelAccount from './component/DataTableAccount.vue';
import TabelUser from './component/DataTableUser.vue';
export default {
  components: {
    Sidebar,
    Navbar,
TabelAccount   ,
TabelUser,
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>