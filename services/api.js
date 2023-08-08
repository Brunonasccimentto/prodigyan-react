import axios from "axios";

const api = axios.create({
    baseURL: "https://apix.al.prodigyan.com"
})

export const tipos = async () => {
    try {
        const response = await api.get("/cliente/tipos")
        return response.data[0]
    } catch (error) {
        console.log(error)
        return {"data": [], "status": 501}
    }
}

export const gravar = async (nome, email, idtipo_cliente, telefone, logradouro, cep, numero, complemento, bairro, cidade, uf) => {
    try {
        const response = await api.post("/cliente/gravar", { nome, email, idtipo_cliente, telefone, logradouro, cep, numero, complemento, bairro, cidade, uf })
        return response.data[0]
    } catch (error) {
        console.log(error)
        return {"data": "Erro ao cadastrar cliente", "status": 501}
    }
    
}

export const buscarId = async (id) => {
    try {
        const response = await api.get(`/cliente/buscar/id/${id}`) 
        return response.data[0]
    } catch (error) {
        console.log(error)
        return {"data": [], "status": 501}
    }
    
}

// export const buscarEmail = async (email) => {
//     return api.get(`/cliente/buscar/email/${email}`)
// }

export const todos = async () =>{
    try {
        const response = await api.get("/cliente/todos")
        return response.data[0]
    } catch (error) {
        console.log(error)
        return {"data": [], "status": 501}
    }
}