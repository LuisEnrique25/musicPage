import { createSlice }  from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const initialState= {
    email: "",
    name: "",
    token: ""
}


const userSlice = createSlice({
    name: "user",
    //si existe algo en el localStorage toma eso para entrar o no al login
    initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : initialState ,
    reducers:{
        setLoginData: (state, action) => {
            const loginData = action.payload; // -> {name:"", email:"", token:""}
            //forma 1 para cambiar el estado
            //state.email = loginData.email;
            //state.name = loginData.name;
            //state.token = loginData.token;
            
            //forma 2 para sobre escribir los valore del estado 
            const newState =  {...state, ...loginData };
            //guardar info en localStorage para persistencia
            localStorage.setItem("user", JSON.stringify(newState))

            return newState;
        },
        logout:() =>{
            localStorage.removeItem("user"); //elimina el user del localStorage para evitar la persistencia por el localStorage
            return initialState;  //regresa el initialState a strings vacios
        }
    },
});

export const { setLoginData, logout } = userSlice.actions

export default userSlice.reducer;

export const login = (data, navigate) =>  (dispatch) => {
        //configuracion de axios en utils
        axiosMusic.post(`/api/auth/login`, data)  
        .then(({ data }) => {
            dispatch(setLoginData(data))
            navigate("/")
        })
        .catch((err) => console.log(err))

}