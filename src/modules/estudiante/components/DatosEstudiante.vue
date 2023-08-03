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
				cedula: null,
				nombre: null,
				apellido: null,
				fechaNacimiento: null,
				provincia: null,
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
			}
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
        border:none;
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