import Vue from "vue";
import Vuex from "vuex";

import * as types from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 1,
    age: 18,
    list: [
      {
        name: "JonSnow",
        age: 18
      },
      {
        name: "Cercei",
        age: 19
      },
      {
        name: "LittleFinguer",
        age: 20
      }
    ]
  },
  getters: {
    // listLen: state => [...state.list.filter(item => item > 2)],
    // longListLen: (state, getters) => [...getters.listLen, state.num, state.age]
    getNameByAge: state => age => state.list.find(item => item.age === age).name
  },
  mutations: {
    [types.ADD_NUM](state, params) {
      state.num += params;
    },
    addAge(state) {
      state.age += 10;
    },
    reduceNum(state) {
      state.num -= 2;
    },
    reduceAge(state) {
      state.age -= 10;
    }
  },
  actions: {
    [types.ADD_AGE]({ commit }) {
      commit("addAge");
    }
  },
  modules: {}
});
