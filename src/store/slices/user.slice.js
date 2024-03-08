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
        setLoginData: (state, action) => {
            const loginData = action.payload; // -> {name:"", email:"", token:""}
            //forma 1 para cambiar el estado
            //state.email = loginData.email;
            //state.name = loginData.name;
            //state.token = loginData.token;
            
            //forma 2 para sobre escribir los valore del estado 
            return {...state, ...loginData }
        }
    },
});

const { setLoginData } = userSlice.actions

export default userSlice.reducer;

export const login = (data) =>  (dispatch) => {
        //configuracion de axios en utils
        axiosMusic.post(`/api/auth/login`, data)  
        .then(({ data }) => dispatch(setLoginData(data)))
        .catch((err) => console.log(err))

}