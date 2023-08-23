import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
    console.log('AXIOS')
    return await obtenerEstudianteAPIAxios(cedula);
}

//Recibe al Estudiante desde el body
export const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = async (id) => {
    return await eliminarEstudiante(id);
}

const obtenerEstudianteAPI  = async (cedula) =>{
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`)
    .then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios  = async (cedula) =>{
    console.log('AXIOS2')
    const headers = {Authorization :"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjgwNjU5NiwiZXhwIjoxNjkyODE2NTk2fQ.tnKkpjIZm_4qgNK3NSCAJ5U0NKH0y0lxuPAseRfZc7sbQNgnBrvG2xFxvNIg894sLWSWRZDTBsHVIzm1MeykWw",
    Mensaje : "valor"}
    const data = axios
        .get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, {headers : headers})
        .then(r=>r.data);

    console.log(data);
    return data;
}

const ingresarEstudiante= (bodyEstudiante) => {
    const headers = {Authorization :"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5Mjc0OTMzOSwiZXhwIjoxNjkyNzU5MzM5fQ.S4FKSxtl2fhCDOKtExK8LoVoJiFhLNJG_kL7F2klSeFuGHHySIod7Wy_4AxVXEEXXweyYORJoQdkOgrPxZw3TA",
    Mensaje : "valor"}
    axios
        .post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`
        , bodyEstudiante, {headers : headers})
        .then(r=>r.data);
}

const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers = {Authorization :"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5Mjc0OTMzOSwiZXhwIjoxNjkyNzU5MzM5fQ.S4FKSxtl2fhCDOKtExK8LoVoJiFhLNJG_kL7F2klSeFuGHHySIod7Wy_4AxVXEEXXweyYORJoQdkOgrPxZw3TA",
    Mensaje : "valor"}
    axios
    .put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`
    , bodyEstudiante,{headers : headers})
    .then(r=>r.data);
}

const eliminarEstudiante = async (id) => {
    const headers = {Authorization :"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5Mjc0OTMzOSwiZXhwIjoxNjkyNzU5MzM5fQ.S4FKSxtl2fhCDOKtExK8LoVoJiFhLNJG_kL7F2klSeFuGHHySIod7Wy_4AxVXEEXXweyYORJoQdkOgrPxZw3TA",
    Mensaje : "valor"}
    axios
        .delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,{headers : headers})
        .then(r=>r.data)
}

