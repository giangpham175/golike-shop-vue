import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: null,
        phone: null,
        address: null,
        girlSize: null,
        girlQty: null,
        boySize: null,
        boyQty: null
    },
    mutations: {},
    actions: {},
    modules: {}
})