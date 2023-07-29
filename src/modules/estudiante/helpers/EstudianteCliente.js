import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
    return await obtenerEstudianteAPI(cedula);
}

//Recibe al Estudiante desde el body
export const ingresarEstudianteFachada = (bodyEstudiante) => {

}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {

}

export const eliminarEstudianteFachada = (id) => {

}

const obtenerEstudianteAPI  = async (cedula) =>{
    const data = await fetch(`http://localhost:8080/API/Matricula/v1.0/estudiantes/${cedula}`)
    .then(r => r.json())
    console.log(data)
}
