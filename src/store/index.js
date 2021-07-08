import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            versao: {numero: "1.0", nome: "USP", altNome: "UFES", altLink: "https://time-table-ufes.vercel.app/"},
            seletor: null,
            disciplinas: [],
            organizador: [],
        }
    },
    mutations: {
        SET_SELETOR(state, value) {
            state.seletor = value
        },
        SET_DISCIPLINAS(state, dis) {
            state.disciplinas = dis;
            localStorage.setItem('disciplinas', JSON.stringify(dis));
        },
        SET_ORGANIZADOR(state, org) {
            state.organizador = org;
            localStorage.setItem('organizador', JSON.stringify(org));
        },
    },
    getters: {
        seletor: (state) => state.seletor,
        disciplinas: (state) => state.disciplinas,
        organizador: (state) => state.organizador,
        versao: (state) => state.versao,
    },
    actions: {
        lerMemoria() {
            const dis = JSON.parse(localStorage.getItem('disciplinas'));
            const org = JSON.parse(localStorage.getItem('organizador'));
            if (dis && org) {
                store.commit('SET_DISCIPLINAS', dis);
                store.commit('SET_ORGANIZADOR', org);
            } else {
                store.commit('SET_DISCIPLINAS', []);
                store.commit('SET_ORGANIZADOR', [null, null, null, null, null,
                                                 null, null, null, null, null,
                                                 null, null, null, null, null, 
                                                 null, null, null, null, null]);
            }
        },
    }
})

export default store