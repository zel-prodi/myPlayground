<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        My Vuejs Playground
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="(page, i) in pages" :key="i">
        <v-btn :to="page.to" text>{{page.text}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- <Test />
    <modal /> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import Test from "./components/Test.vue";
// import Modal from "./components/Modal.vue";
export default {
  name: 'App',
  components: {
    // Test,
    // Modal
  },

  data(){
    return {
      pages:[
        {text: 'Upload Files', to: '/UploadFiles'}
      ]
    }
  }
};
</script>
