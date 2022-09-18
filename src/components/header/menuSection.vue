<template>
  <q-item v-for="menus in menu" :key="menus.id" clickable v-close-popup>
    <q-item-section>{{ menus.name }}</q-item-section>
  </q-item>
  <q-separator />
</template>
<script>
import { MenuSection } from "../../helper/helper.js";
export default {
  setup() {
    const menu = MenuSection();

    const ruta = (val) => {
      console.log(val);
    };

    return { ruta, menu };
  },
};
</script>
