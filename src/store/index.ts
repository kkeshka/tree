import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [] as Array<any>
  },
  getters: {
  },
  mutations: {
    createSubBranch(state, {data, name = ''}) {
        const randomId = Math.random().toString(36).slice(2);
        const newBranch: any = {
          name: name as string,
          key: randomId as string,
          data: [] as Array<any>
        }

        data.data.push(newBranch)
    },

    deleteSubBranch(state, {key, data}) {
      data.data = data.data.filter((item:any) => item.key !== key)
    },

    changeBranchName(state, {key, name, data}) {
      data.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
