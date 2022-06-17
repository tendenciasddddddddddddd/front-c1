export default class ZonasProxi{
    constructor(axios,url){
    this.axios = axios;
    this.url =url;
    }

    /* getAll(){
        return this.axios.get(this.url+'/users')
    } */
    getAll(page, take) {
        return this.axios.get(this.url + `/provincias?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + '/provincias', params);
    }

    get(id) {
        return this.axios.get(this.url + `/provincias/${id}`);
    }

    update(id, params) {
        return this.axios.put(this.url + `/provincias/${id}`, params);
    }

    remove(id) {
        return this.axios.delete(this.url + `/provincias/${id}`);
    }

    activateProvincia(id, state) {
        return this.axios.put(this.url + `/provincias/activate/${id}?state=${state}`);
    }

    async queryProvincia(querys) {
        return await this.axios.get(this.url + `/provincias/query?querys=${querys}`);
    }

//------------------------------------------------------GESTION DE CANTONES--------------------------------------

    getListProvicnias() {
        return this.axios.get(this.url + '/cantones/newprov');
    }

    getAllCanton(page, take) {
        return this.axios.get(this.url + `/cantones?page=${page}&take=${take}`);
    }

    createCanton(params) {
        return this.axios.post(this.url + '/cantones', params);
    }

    getId(id) {
        return this.axios.get(this.url + `/cantones/${id}`);
    }

    updateCanton(id, params) {
        return this.axios.put(this.url + `/cantones/${id}`, params);
    }

    removeCanton(id) {
        return this.axios.delete(this.url + `/cantones/${id}`);
    }

    activateCanton(id, state) {
        return this.axios.put(this.url + `/cantones/activate/${id}?state=${state}`);
    }

    async queryCanton(querys) {
        return await this.axios.get(this.url + `/cantones/query?querys=${querys}`);
    }

//------------------------------------------------------GESTION DE Parroquia--------------------------------------

    async getListCantones() {
        return await this.axios.get(this.url + '/parroquias/newcant');
    }

    getAllParroquia(page, take) {
        return this.axios.get(this.url + `/parroquias?page=${page}&take=${take}`);
    }

    createParroquia(params) {
        return this.axios.post(this.url + '/parroquias', params);
    }

    getIdParroquia(id) {
        return this.axios.get(this.url + `/parroquias/${id}`);
    }

    updateParroquia(id, params) {
        return this.axios.put(this.url + `/parroquias/${id}`, params);
    }

    removeParroquia(id) {
        return this.axios.delete(this.url + `/parroquias/${id}`);
    }

    activateParroquia(id, state) {
        return this.axios.put(this.url + `/parroquias/activate/${id}?state=${state}`);
    }

    async queryParroquia(querys) {
        return await this.axios.get(this.url + `/parroquias/query?querys=${querys}`);
    }
    //------------------------------------------------------GESTION DE Parroquia--------------------------------------


    getAllNacionalidad(page, take) {
        return this.axios.get(this.url + `/nacionalidad?page=${page}&take=${take}`);
    }

    createNacionalidad(params) {
        return this.axios.post(this.url + '/nacionalidad', params);
    }

    getIdNacionalidad(id) {
        return this.axios.get(this.url + `/nacionalidad/${id}`);
    }

    updateNacionalidad(id, params) {
        return this.axios.put(this.url + `/nacionalidad/${id}`, params);
    }

    removeNacionalidad(id) {
        return this.axios.delete(this.url + `/nacionalidad/${id}`);
    }

    activateNacionalidad(id, state) {
        return this.axios.put(this.url + `/nacionalidad/activate/${id}?state=${state}`);
    }

    //------------------------------------------------------GESTION DE Parroquia--------------------------------------


    getAllEtnias(page, take) {
        return this.axios.get(this.url + `/etnias?page=${page}&take=${take}`);
    }

    createEtnias(params) {
        return this.axios.post(this.url + '/etnias', params);
    }

    getIdEtnias(id) {
        return this.axios.get(this.url + `/etnias/${id}`);
    }

    updateEtnias(id, params) {
        return this.axios.put(this.url + `/etnias/${id}`, params);
    }

    removeEtnias(id) {
        return this.axios.delete(this.url + `/etnias/${id}`);
    }

    activateEtnias(id, state) {
        return this.axios.put(this.url + `/etnias/activate/${id}?state=${state}`);
    }
}