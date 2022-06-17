export default class AulasProxi {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    create(params) {
        return this.axios.post(this.url + '/aulas', params);
    }

    updateAulaDocentes(id) {
        return this.axios.get(this.url + `/aulas/newlist?id=${id}`);
    }
   
    remove(id) {
        return this.axios.delete(this.url + `/aulas/${id}`);
    }

    get(id) {
        return this.axios.get(this.url + `/aulas/${id}`); //studen
    }

    getMain(id) {
        return this.axios.get(this.url + `/aulas/mainlist/${id}`); //studen
    }

    async  updateAulaEstudantes(id) {
        return await this.axios.get(this.url + `/aulas/studen?id=${id}`);
    }

    update(id, params) {
        return this.axios.put(this.url + `/aulas/${id}`, params);
    }

    removeUsers(id, params) {
        return this.axios.put(this.url + `/aulas/users/${id}`, params);
    }

    //***********************************TAREAS************************************ */

    createTask(id, params) {
        return this.axios.put(this.url + `/tasks/${id}`, params);
    }

    editTask(id, params) {
        return this.axios.put(this.url + `/tasks/editTask/${id}`, params);
    }

    editCode(id, params) {
        return this.axios.put(this.url + `/tasks/editCode/${id}`, params);
    }

    calificarTask(id, params) {
        return this.axios.put(this.url + `/tasks/calificarTask/${id}`, params);
    }

    reviewTasks(id, params) {
        return this.axios.put(this.url + `/tasks/reviewTask/${id}`, params);
    }

    removeTask(id, params) { 
        return this.axios.put(this.url + `/tasks/removetask/${id}`, params);
    }
    
    //********************************ESTUDIANTES reviewTask */
    sendTask(id, params) {
        return this.axios.put(this.url + `/tasks/send/${id}`, params); //RUTA ARBOL 2
    }

    updateTask(id, params) {
        return this.axios.put(this.url + `/tasks/update/${id}`, params); //RUTA ARBOL 2
    }
}