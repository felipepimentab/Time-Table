import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            selecionado: null
        }
    },
    mutations: {
        SELECIONAR_DETALHES(state, value) {
            state.selecionado = value
        }
    },
    getters: {
        disciplinaSelecionada: state => state.selecionado
    }
})

export default store