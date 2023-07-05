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
    static URL = "http://45.235.53.125:8080"
    static updateAchados = (id, data) => fetch(`${this.URL}/achados/${id}`, createOptions('PUT', data))
    static getAchados = () => fetch(`${this.URL}/achados?page=1`, createOptions('GET'))
}


export default API;