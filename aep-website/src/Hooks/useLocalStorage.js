const getDataStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const setDataStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const useLocalStorage = () => {
    return {
        getDataStorage, setDataStorage
    }
}

export default useLocalStorage