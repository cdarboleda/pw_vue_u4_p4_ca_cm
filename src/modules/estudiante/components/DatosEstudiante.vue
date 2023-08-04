<template>
	<div class="container">
		<div class="form">
			<label for="cedula">Cédula</label>
			<input id="cedula" v-model="cedula" type="text" />
			<button class="btnAction" @click="consultarEstudiante">Consultar</button>

			<div v-show="consultado" class="form-result">
				<label for="nombre">Nombre</label>
				<input id="nombre" v-model="nombre" type="text" />
				<label for="apellido">Apellido</label>
				<input id="apellido" v-model="apellido" type="text" />
				<label for="fecha">Fecha</label>
				<input id="fecha" v-model="fechaNacimiento" type="text" />
				<label for="provincia">Provincia</label>
				<input id="provincia" v-model="provincia" type="text" />
			</div>
		</div>
	</div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
	data() {
		return {
			cedula: this.$route.query.cedula,
			nombre: null,
			apellido: null,
			fechaNacimiento: null,
			provincia: this.$route.query.provincia,
			consultado: false,
		};
	},
	methods: {
		async consultarEstudiante() {
			const data = await obtenerEstudianteFachada(this.cedula);
			this.nombre = data.nombre;
			this.apellido = data.apellido;
			this.fechaNacimiento = data.fechaNacimiento;
			this.provincia = data.provincia;
			this.consultado = true;
			console.log(data)
		},
	},

	mounted(){
			const {cedula} = this.$route.params;
      		console.log(cedula);
			console.log(this.$route)
			const {provincia} = this.$route.query;
			this.cedula = cedula;
			console.log(provincia)
			this.consultarEstudiante()
		}
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

/* 
	.form {
		margin: 15px 25px;
		padding: 15px 25px;
		border-radius: 10px;
        background-color: rgb(21, 65, 66);
		display: flex;
        color: white;
		flex-direction: column;
		width: 300px;
		text-align: left;
	} */

	.form {
	display: flex;
	color: white;
	flex-direction: column;
	text-align: left;
	width: 340px;
	height: 450px;
	background-color: #5AD9F2;
	border: 3px solid #3D6B74;
	border-radius: 8px;
	padding: 20px 30px;
	box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.247);
	max-width: calc(100vw-40px);
	font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.form-result {
	margin: 15px 0px;
	display: flex;
	flex-direction: column;
	text-align: left;
}

.btnAction {
	display: flex;
	align-self: center;
	text-align: center;
	width: fit-content;
	border: none;
	font-size: 10px;
	border-radius: 5px;
	background-color: hsla(96, 68%, 79%, 0.966);
	padding: 10px;
}

label,
input {
	margin-bottom: 10px;
}

button {
	width: 100px;
}

button:hover {
	cursor: pointer;
}
</style>