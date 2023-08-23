<template>
	<div class="container">
		<div class="form">
			<div class="form-floating mb-3">
				<input id="cedula" class="form-control" v-model="cedula" type="text" />
				<label for="cedula">Cédula</label>
			</div>

			<div class="form-floating mb-3">
				<input id="nombre" class="form-control" v-model="nombre" type="text" />
				<label for="nombre">Nombre</label>
			</div>

			<div class="form-floating mb-3">
				<input
					id="apellido"
					class="form-control"
					v-model="apellido"
					type="text"
				/>
				<label for="apellido">Apellido</label>
			</div>

			<div class="form-floating mb-3">
				<input
					id="fecha"
					class="form-control"
					v-model="fechaNacimiento"
					type="text"
				/>
				<label for="fecha">Fecha</label>
			</div>

			<div class="form-floating mb-3">
				<input
					id="provincia"
					class="form-control"
					v-model="provincia"
					type="text"
				/>
				<label for="provincia">Provincia</label>
			</div>

			<button class="btn btn-outline-primary" @click="guardarEstudiante">
				Guardar
			</button>
		</div>
	</div>
</template>

<script>
	import { ingresarEstudianteFachada } from '../helpers/EstudianteCliente';
	export default {
		data() {
			return {
				cedula: null,
				nombre: null,
				apellido: null,
			};
		},
		methods: {
			guardarEstudiante() {
				const data = {
					cedula: this.cedula,
					nombre: this.nombre,
					apellido: this.apellido,
					provincia: "Pichincha"
				}
				ingresarEstudianteFachada(data);

				console.log('Usuario insertado')
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
						}
						*/

	.form {
		display: flex;
		color: white;
		flex-direction: column;
		text-align: left;
		width: 340px;
		height: fit-content;
		background-color: #5ad9f2;
		border: 3px solid #3d6b74;
		border-radius: 8px;
		padding: 20px 30px;
		box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.247);
		max-width: calc(100vw-40px);
		font-family: Verdana, Geneva, Tahoma, sans-serif;

		padding: 1.5rem;
		margin-right: 0;
		margin-left: 0;
		border-width: 1px;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
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

	/* 
			button {
				width: 100px;
			}

			button:hover {
				cursor: pointer;
			} */
</style>