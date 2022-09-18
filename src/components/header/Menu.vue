<template>
  <!-- -->
  <q-header elevated class="bg-orange text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>Bienvenidos</q-toolbar-title>
      <!-- INICIO DEL POPUP-->
      <q-btn dense flat round icon="person">
        <q-menu>
          <q-list style="min-width: 100px"> <MenuSection /></q-list>
        </q-menu>
      </q-btn>
      <!-- FIN DEL POPUP-->
    </q-toolbar>
  </q-header>
  <!-- -->
  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    bordered
    :width="200"
    :breakpoint="400"
  >
    <q-scroll-area
      style="
        height: calc(100% - 50px);
        margin-top: 50px;
        border-right: 1px solid #ddd;
      "
    >
      <!--Inicio Componente de ItemMenu-->

      <q-list padding>
        <div>
          <MenuItem />
        </div>
      </q-list>
      <!--Fin del ItemMenu-->
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref } from "vue";
import MenuItem from "../header/menuItem";
import MenuSection from "../header/menuSection";

export default {
  name: "Menu",
  components: {
    MenuItem,
    MenuSection,
  },
  setup() {
    const leftDrawerOpen = ref(false),
      perfilOpen = ref(false);

    return {
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      perfilOpen,
      perfil() {
        perfilOpen.value = !perfilOpen.value;
      },
    };
  },
};
</script>
