const createOptions = (method, data = null) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const auth = `Bearer ${token}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: auth,
        },
        body: data ? JSON.stringify(data) : null,
    }
    return options
}

class API {
    static URL = "url da api"
    static updateAchados = (id, data) => fetch(`${this.URL}/achados/${id}`, createOptions('PUT', data))
    static updatePerdidos = (id, data) => fetch(`${this.URL}/perdidos/${id}`, createOptions('PUT', data))
    static getAchados = () => fetch(`${this.URL}/achados?page=1`, createOptions('GET'))
    static getPerdidos = () => fetch(`${this.URL}/perdidos?page=1`, createOptions('GET'))
    static postAchado = (data) => fetch(`${this.URL}/achados`, createOptions('POST', data))
    static postPerdido = (data) => fetch(`${this.URL}/perdido`, createOptions('POST', data))
    static deleteAchados = (id) => fetch(`${this.URL}/achados/${id}`, createOptions('DELETE'))
    static deletePerdidos = (id) => fetch(`${this.URL}/perdidos/${id}`, createOptions('DELETE'))
}

export default API;