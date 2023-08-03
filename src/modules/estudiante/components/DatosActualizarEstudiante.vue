<template>
	<div class="container">
		<div class="form">
			<label for="id">ID</label>
			<input id="id" v-model="id" type="text" />
			<label for="cedula">Cédula</label>
			<input id="cedula" v-model="cedula" type="text" />
			<label for="nombre">Nombre</label>
			<input id="nombre" v-model="nombre" type="text" />
			<label for="apellido">Apellido</label>
			<input id="apellido" v-model="apellido" type="text" />
			<label for="fecha">Fecha</label>
			<input id="fecha" v-model="fechaNacimiento" type="text" />
			<label for="provincia">Provincia</label>
			<input id="provincia" v-model="provincia" type="text" />
			<button class="btnAction" @click="actualizarEstudiante">Actualizar</button>
		</div>
	</div>
</template>

<script>
	import { actualizarEstudianteFachada } from '../helpers/EstudianteCliente';
	export default {
		data() {
			return {
				id: null,
				cedula: null,
				nombre: null,
				apellido: null,

			};
		},
		methods: {
			async actualizarEstudiante() {
				const data = {
					cedula: this.cedula,
					nombre: this.nombre,
					apellido: this.apellido,
					provincia: "Pichincha"
				}
				await actualizarEstudianteFachada(data, this.id);
			}
		}
	}
</script>

<style>
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