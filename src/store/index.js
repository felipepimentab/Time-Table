import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    selecionado: null,
}

const mutations = {
    SELECIONAR_DETALHES(state, index) {
        state.selecionado = index
    }
}

const actions = {

}

const getters = {
    disciplinaSelecionada: state => state.selecionado
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})