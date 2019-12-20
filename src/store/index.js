import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: null,
        phone: null,
        address: null,
        girlSize: [],
        girlQty: null,
        boySize: [],
        boyQty: null
    },
    mutations: {
        order(state, payload) {
            state.name = payload.name;
            state.phone = payload.phone;
            state.address = payload.address;
            state.girlSize = payload.girlSize;
            state.girlQty = payload.girlQty;
            state.boySize = payload.boySize;
            state.boyQty = payload.boyQty;
        }
    },
    actions: {},
    modules: {}
})