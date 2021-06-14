export default class Disciplina {
    constructor(codigo, nome, professor, site, link, cor, tarefas=[]) {
        this.id = this.randomId();
        this.codigo = codigo;
        this.nome = nome;
        this.professor = professor;
        this.site = site;
        this.link = link;
        this.cor = cor;
        this.tarefas = tarefas;
    }

    randomId() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}