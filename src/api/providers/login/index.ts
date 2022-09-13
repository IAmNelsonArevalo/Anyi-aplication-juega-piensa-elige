import axios from "axios";

const useLoginProviders = () => {
    const login = (fullname: string) : Promise<any> => {
        return axios.post('/auth/login', {
            fullname: fullname,
            password: "password"
        })
    }

    return {
        login
    };
}

export default useLoginProviders;