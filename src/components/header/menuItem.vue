<template>
  <q-item
    v-for="menus in menu"
    :key="menus.id"
    clickable
    v-ripple
    :to="menus.ruta"
    exact
    active-class="my-menu-link"
  >
    <q-item-section avatar>
      <q-icon :name="menus.icon" />
    </q-item-section>

    <q-item-section> {{ menus.name }} </q-item-section>
  </q-item>
</template>
<script>
import { Menu } from "../../helper/helper.js";
export default {
  setup() {
    const menu = Menu();

    const ruta = (val) => {
      console.log(val);
    };

    return { ruta, menu };
  },
};
</script>
