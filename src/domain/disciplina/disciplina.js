export default class Disciplina {
    constructor(codigo, nome, professor, site, link, cor, tarefas='') {
        this.codigo = codigo;
        this.nome = nome;
        this.professor = professor;
        this.site = site;
        this.link = link;
        this.cor = cor;
        this.tarefas = tarefas;
    }
}