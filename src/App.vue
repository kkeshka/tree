<template lang="pug">
  v-app
    .container
      AppTree
</template>

<script lang="ts">
import Vue from 'vue';

import AppTree from '@/views/tree/app-tree.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppTree
  },
  data: () => ({
    //
  }),
});
</script>
