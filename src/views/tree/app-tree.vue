<template lang="pug">
  .tree
    v-row
      v-col(cols="2")
        .tree__input
          v-text-field(:placeholder="'New Branch'" color="black" v-model="newBranchName")
      
      v-col.d-flex.align-center(cols="2")
        v-btn(color="primary" @click="addBranch") Add
          v-icon mdi-plus
    
    v-row
      v-col(cols="12")
        transition-group(name="slide-fade")
          branch-item(v-for="branch,index in state.data" :key="branch.key" :branch="branch" :branches="state")
</template>

<script lang="ts">
import BranchItem from '@/components/branch/branch-item.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    BranchItem
  },
  computed: {
    state() {
      return this.$store.state
    }
  },
  data() {
    return {
      newBranchName: ''
    }
  },
  methods: {
    addBranch() {
      this.$store.commit('createSubBranch', {name: this.newBranchName, data: this.state})
      this.newBranchName = ''
    }
  }
})
</script>

<style lang="scss" scoped src="./tree.scss">
</style>