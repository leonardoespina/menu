<template>
  <q-layout view="hHh lpR fFf">
    <Menu />
    <q-page-container> <router-view /> </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Menu from "../components/header/Menu";
import Footer from "../components/header/Footer";
export default {
  components: { Menu, Footer },
};
</script>
