class Roles{
    constructor(id, name, description){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export default Roles;

/*usuarios - atividades: n - n
usuarios - disponibilidade: 1 - n e n - n
usuarios - setores: n - 1
usuarios - cargos: 1 - 1
*/