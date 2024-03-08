import { createSlice }  from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        token: ""
    },
    reducers:{
        
    },
});

export default userSlice.reducer;

export const login = (data) =>  (dispath) => {
        //configuracion de axios en utils
        axiosMusic.post(`/api/auth/login`, data)  
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err))

}