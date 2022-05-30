<template lang="pug">
  .branch
    v-treeview
      v-row.d-flex.align-center
        .col-4
          v-text-field(:placeholder="'New Branch'" color="black" v-model="name" @blur="changeName")
        .col-2
          v-btn.mr-2(fab x-small color="primary" @click="createSubBranch")
            v-icon mdi-plus
          v-btn(fab x-small color="primary" @click="deleteSubBranch")
            v-icon mdi-minus
      
      transition-group(name="slide-fade")
        branch-item(:branch="item" :branches="branch" v-for="item in branch.data" :key="item.key")
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'branch-item',
  props: {
    branch: {
      type: Object,
      required: true
    },
    branches: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: this.branch.name
    }
  },
  methods: {
    changeName() {
      this.$store.commit('changeBranchName', {key: this.branch.key, name: this.name, data: this.branch})
    },
    createSubBranch() {
      this.$store.commit('createSubBranch', {data: this.branch})
    },
    deleteSubBranch() {
      this.$store.commit('deleteSubBranch', {key: this.branch.key, data: this.branches})
    }
  }
})
</script>

<style lang="scss" scoped src="./branch.scss">
</style>