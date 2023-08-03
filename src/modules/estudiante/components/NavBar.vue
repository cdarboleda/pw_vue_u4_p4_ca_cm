<template>
  	<div class="navBar">
		<router-link class="routerElem" to="/">Bienvenida</router-link>
		<router-link class="routerElem" to="/consultar">Consultar</router-link>
		<router-link class="routerElem" to="/actualizar">Actualizar</router-link>
        <router-link class="routerElem" to="/guardar">Guardar</router-link>
        <router-link class="routerElem" to="/eliminar">Eliminar</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.navBar {
    display: flex;

    justify-content: center;
		font-weight: bold;
		padding: 10px;
    color: white;
    font-size: larger;
		background-color: hsla(96, 68%, 79%, 0.966);
		border: 10px solid rgb(21, 65, 66);
    border-radius: 5px;
    margin-bottom: 25px;
	}
	.routerElem {
		margin: 0 25px;
    padding: 10px 0px;
	}
	.routerElem:hover {
		background-color: rgb(224, 94, 94);
	}
</style>