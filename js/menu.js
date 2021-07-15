/*desplegar oociones desde el boton menu*/
var btnMenu = document.getElementById('btn-menu');
var nav =document.getElementById('nav');

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
});
/*cambio a menu de crear cuenta*/
$('.toggle').click(function(){
$('.formulario').animate({
	height: "toggle",
	'padding-top':'toggle',
	'padding-bottom': 'toggle',
	opacity: 'toggle'
	} ,"slow");
});
/*cambio de indicador menu de crear cuenta - inicar secion _------->document.getElementById("toggle").innerHTML = "Iniciar Seción";*/

/*------CONEXION CRUD-------*/
