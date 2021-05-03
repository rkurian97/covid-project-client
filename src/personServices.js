import axios from 'axios'
const url = 'http://localhost:3000/'

class PersonServices{
    static login(person){
        return new Promise(async (resolve, reject) => {
            try {
                const res= await axios.post(`${url}login`, {person})
                const data= res.data
                if(data.error === "Invalid login details"){
                    reject('Invalid login details')
                }else{
                    resolve(data)
                }
            }catch(error){
                reject('Invalid Credentials')
            }
        })
    }
    static register(person){
        return new Promise(async (resolve, reject) => {
            try {
                const res= await axios.post(`${url}register`, {person})
                const data= res.data
                resolve(data)
            }catch(error){
                reject(`Unable to register\n${error}`)
            }
        })
    }
    static update(person){
        return new Promise(async (resolve, reject) => {
            try {

            }catch(error){
                reject(`Unable to register\n${error}`)
            }
        })
    }
    static delete(person){
        return new Promise(async (resolve, reject) => {
            try {

            }catch(error){
                reject(`Unable to register\n${error}`)
            }
        })
    }

    static findPerson(person){
        return new Promise (async (resolve, reject)=> {
            try {
                console.log(person.email)
                const res= await axios.post(`${url}search`, {person})
                const data= res.data
                resolve(data)
            }catch(error){
                reject(`Unable to find the account\n${error}`)
            }
        })
    }
}

export default PersonServices