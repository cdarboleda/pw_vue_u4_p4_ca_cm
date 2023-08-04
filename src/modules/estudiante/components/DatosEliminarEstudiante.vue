<template>
	<div class="container">
		<div class="form">
			<label for="id">ID</label>
			<input id="id" v-model="id" type="text" />
			<button class="btnAction" @click="eliminarEstudiante">Eliminar</button>
		</div>
	</div>
</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
	data() {
		return {
			id: null,
		};
	},
	methods: {
		async eliminarEstudiante() {
			const data = await eliminarEstudianteFachada(this.id);
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