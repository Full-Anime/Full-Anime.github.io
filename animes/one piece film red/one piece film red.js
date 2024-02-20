"use strict"

//funcion para que la barra de navegacion se haga fixed:



const barraDeNavegacion = document.querySelector(".barra-de-navegacion")
const body = document.querySelector(".body")
const ventanas = document.querySelector(".ventanas")
window.onscroll = function(){
	let scrolly = window.scrollY

	if (scrolly > 100) {
	ventanas.classList.add("ventana-fixed")
	barraDeNavegacion.classList.add("position-fixed")
	}
	if (scrolly < 100) {
		ventanas.classList.remove("ventana-fixed")
		barraDeNavegacion.classList.remove("position-fixed")
	}

}


const listadoDeAnimesResponsive = document.getElementById("listado-de-animes-responsive")
listadoDeAnimesResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-listado-de-animes").click()
})

const whatsapp = document.getElementById("icono-whatsapp")
const telegram = document.getElementById("icono-telegram")
const facebook = document.getElementById("icono-facebook")
const instagram = document.getElementById("icono-instagram")

const whatsappFooter = document.getElementById("icono-whatsapp-footer")
const telegramFooter = document.getElementById("icono-telegram-footer")
const facebookFooter = document.getElementById("icono-facebook-footer")
const instagramFooter = document.getElementById("icono-instagram-footer")

whatsapp.addEventListener("click", ()=>{
	document.getElementById("enlace-whatsapp").click()
})

telegram.addEventListener("click", ()=>{
	document.getElementById("enlace-telegram").click()
})

facebook.addEventListener("click", ()=>{
	document.getElementById("enlace-facebook").click()
})

instagram.addEventListener("click", ()=>{
	document.getElementById("enlace-instagram").click()
})

whatsappFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-whatsapp").click()
})

telegramFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-telegram").click()
})

facebookFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-facebook").click()
})

instagramFooter.addEventListener("click", ()=>{
	document.getElementById("enlace-instagram").click()
})

const modal = document.querySelector(".modal")
const iconoBarras = document.querySelector(".icono-de-barras-responsive")
const iconoX = document.querySelector(".icono-x")
iconoBarras.addEventListener("click", desplegarModal)
iconoX.addEventListener("click", ocultarModal)

let desplegar = false
let ocultar = true
function desplegarModal(){
	if (ocultar == true) {
		modal.removeAttribute("hidden")
		modal.classList.add("desplazar-modal")
		body.classList.add("ocultar-scroll")
		desplegar = true
	}
}

function ocultarModal(){
	if (desplegar == true) {
		modal.setAttribute("hidden", "true")
		modal.classList.remove("desplazar-modal")
		body.classList.remove("ocultar-scroll")
		ocultar = true
	}
}




//funcion de desplazamiento de imagen:
const delante = document.querySelector(".adelante")
const atras = document.querySelector(".atras")
const delante_responsive = document.querySelector(".adelante-responsive")
const atras_responsive = document.querySelector(".atras-responsive")
const contenedorImg = document.querySelector(".imagen-portada")
const titulo = document.querySelector(".titulo")
const informacion = document.querySelector(".informacion")
const pieDelTituloContainer = document.querySelector(".pie-de-titulo")

const imagen1 = document.createElement("IMG")
const imagen2 = document.createElement("IMG")
const imagen3 = document.createElement("IMG")

const punto1 = document.querySelector(".punto-1")
const punto2 = document.querySelector(".punto-2")
const punto3 = document.querySelector(".punto-3")
const punto4 = document.querySelector(".punto-4")

delante.addEventListener("click", avanzar)
atras.addEventListener("click", atrasar)
delante_responsive.addEventListener("click", avanzar)
atras_responsive.addEventListener("click", atrasar)

let adelanteA = true
let adelanteB = false
let adelanteC = false
let adelanteD = false

	
	if (adelanteA == true) {
	imagen1.src = "../../imagenes/one piece film red img 3.jpeg"
	contenedorImg.appendChild(imagen1)
	

	punto1.classList.add("punto-1-a")


}

function avanzar(){

	if (adelanteA == true) {
		imagen2.src = "../../imagenes/one piece film red img 9.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-1")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		adelanteA = false
		adelanteB = true


		
	}

	else if (adelanteB == true) {
		imagen1.src = "../../imagenes/one piece film red img 5.jpg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("desplazamiento-2")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		adelanteB = false
		adelanteC = true
		
	}

	else if (adelanteC == true) {
		imagen2.src = "../../imagenes/one piece film red img 5.jpeg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-3")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
		adelanteC = false
		adelanteD = true		
	}
	else if (adelanteD == true) {
		imagen1.src = "../../imagenes/one piece film red img 3.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.add("desplazamiento-4")
		
		

		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto1.classList.remove("punto-1-e")
		punto1.classList.add("punto-1-a")
		adelanteD = false
		adelanteA = true
		
		}
	
}
delante.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
atras.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
delante_responsive.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})
atras_responsive.addEventListener("click", () =>{
	clearInterval(intervaloAvanzar)
	tiempoRetardo()
})

let intervaloAvanzar
let tiempoAvanzar



function tiempoRetardo(){
	intervaloAvanzar = setInterval(avanzar, 5000)
}

tiempoRetardo()
function atrasar(){

	if (adelanteD == true) {
		imagen1.src = "../../imagenes/one piece film red img 5.jpg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesod")
		contenedorImg.classList.add("posicion-de-imagen")
		
		
		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto3.classList.replace("punto-3-e", "punto-3-a")
		adelanteD = false
		adelanteC = true

		
		
	}

	else if (adelanteC == true) {
		imagen2.src = "../../imagenes/one piece film red img 9.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("retrocesoc")
		contenedorImg.classList.add("posicion-de-imagen")
		
		
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto2.classList.replace("punto-2-e", "punto-2-a")
		adelanteC = false
		adelanteB = true
	}

	else if (adelanteB == true ) {
		imagen1.src = "../../imagenes/one piece film red img 3.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesob")
		contenedorImg.classList.add("posicion-de-imagen")
		
		
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto1.classList.replace("punto-1-e", "punto-1-a")
		adelanteB = false
		adelanteA = true
	}
	else if (adelanteA == true) {
		
		imagen2.src = "../../imagenes/one piece film red img 5.jpeg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("posicion-de-imagen")
		contenedorImg.classList.add("retrocesoa")
		
		adelanteA = false
		adelanteD = true
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
	}
	
}

const botonDescargar1 = document.querySelector(".boton-descargar-1")


botonDescargar1.addEventListener("click", descargar1)


let enlaceMediafire = document.querySelector(".link-1")
let mediafire1 = `https://www.mediafire.com/file/2ccj1shln8e8fu7/film_red.rar/file`


function descargar1(){
	enlaceMediafire.setAttribute("href", mediafire1)
	enlaceMediafire.click()
}
const botonInicio = document.querySelector(".inicio")
botonInicio.addEventListener("click", home)

function home(){
	document.querySelector('.link-inicio').click()
}

const botonInicioResponsive = document.querySelector(".icono-de-inicio-responsive")
botonInicioResponsive.addEventListener("click", home)





const botonManga = document.querySelector(".manga")
botonManga.addEventListener("click", manga)

function manga(){
	document.querySelector('.link-manga').click()
}

document.getElementById("manga-responsive").addEventListener("click", ()=>{
	document.querySelector('.link-manga').click()
})

//enlaces de cada uno de los index de cada serie:

let enlace = ["../../animes/chainsaw man/chainsaw.html",
"../../animes/Death Note/death note.html",
"../../animes/Shingeki No Kyojin/shingeki no kyojin.html",
"../../animes/spy x family/spy x family.html",
"../../animes/naruto/naruto.html",
"../../animes/jujutsu kaisen/jujutsu kaisen.html",
"../../animes/kimetsu no yaiba/kimetsu no yaiba.html",
"../../animes/one punch man/one punch man.html",
"../../animes/tokyo ghoul/tokyo ghoul.html",
"../../animes/my hero academia/my hero academia.html",
"../../animes/mob psycho 100/mob psycho.html",
"../../animes/full metal alchemist/full metal alchemist.html",
"../../animes/fire force/fire force.html",
"../../animes/tokyo revengers/tokyo revengers.html",
"../../animes/highschool of the dead/hsotd.html",
"../../animes/dragon ball z/dragon ball z.html",
"../../animes/dragon ball super/dragon ball super.html",
"../../animes/one piece/one piece.html",
"../../animes/record of ragnarok/record of ragnarok.html",
"../../animes/vinland saga/vinland saga.html",
"../../animes/nanatsu no tazai/nanatsu no tazai.html",
"../../animes/inuyasha/inuyasha.html",
"../../animes/goblin slayer/goblin slayer.html",
"../../animes/caballeros del zodiaco/caballeros del zodiaco.html",
"../../animes/cowboy bebop/cowboy bebop.html",
"../../animes/hunter hunter 1999/hunter hunter 1999.html",
"../../animes/full metal panic/full metal panic.html",
"../../animes/cyberpunk/cyberpunk.html",
"../../animes/kaguya sama/kaguya sama.html",
"../../animes/dr stone/dr stone.html",
"../../animes/food wars/food wars.html",
"../../animes/steins gate/steins gate.html",
"../../animes/mirai nikki/mirai nikki.html",
"../../animes/trigun stampede/trigun stampede.html",
"../../animes/mashle/mashle.html",
"../../animes/oshi no ko/oshi no ko.html",
"../../animes/hells paradise/hells paradise.html",
"../../animes/tengoku daimakyo/tengoku daimakyo.html",
"../../animes/sono bisque/sono bisque.html",
"../../animes/jojos bizarre adventure/jo jos.html",
"../../animes/solo leveling/solo leveling.html",
"../../animes/arcane/arcane.html",
"../../animes/blue lock/blue lock.html",
"../../animes/parasyte/parasyte.html",
"../../animes/edens zero/edens zero.html",
"../../animes/black clover/black clover.html",
"../../animes/hellsing/hellsing.html",
"../../animes/naruto shippuben/naruto shippuben.html",
"../../animes/zom 100/zom 100.html",
"../../animes/fairy tail/fairy tail.html",
"../../animes/skip and loafer/skip and loafer.html",
"../../animes/mushoku tensei/mushoku tensei.html",
"../../animes/boruto/boruto.html",
"../../animes/sousou no fierren/sousou no fierren.html",
"../../animes/dragon ball/dragon ball.html",
"../../animes/dragon ball gt/dragon ball gt.html",
"../../animes/sailor moon/sailor moon.html",
"../../animes/bleach/bleach.html",
"../../animes/bleach thousand year/bleach thousand year.html",
"../../animes/hunter hunter 2011/hunter hunter 2011.html",
"../../animes/evangelion/evangelion.html",
"../../animes/tengen toppa gurren lagann/tengen toppa gurren lagann.html",
"../../animes/code geass/code geass.html",
"../../animes/fullmetal alchemist version 1/fullmetal alchemist version 1.html",
"../../animes/capitan tsubasa/capitan tsubasa.html",
"../../animes/classroom of the elite/classroom of the elite.html",
"../../animes/tower of god/tower of god.html",
"../../animes/overlord/overlord.html",
"../../animes/baki/baki.html",
"../../animes/sword art online/sword art online.html",
"../../animes/no game no life/no game no life.html",
"../../animes/uzaki chan/uzaki chan.html",
"../../animes/kanojo mo kanojo/kanojo mo kanojo.html",
"../../animes/pluto/pluto.html",
"../../animes/buddy daddies/buddy daddies.html",
"../../animes/dragon ball z peliculas/dragon ball z peliculas.html",
"../../animes/dragon ball super broly/dragon ball super broly.html",
"../../animes/dragon ball super super hero/dragon ball super super hero.html",
"../../animes/one piece film red/one piece film red.html",
"../../animes/one piece film gold/one piece film gold.html",
"../../animes/one piece film z/one piece film z.html",
"../../animes/one piece stampede/one piece stampede.html",
"../../animes/demon slayer mugen train/demon slayer mugen train.html",
"../../animes/el viaje de chihiro/el viaje de chihiro.html",
"../../animes/your name/your name.html",
"../../animes/suzume/suzume.html",
"../../animes/the first slam dunk/the first slam dunk.html",
"../../animes/howl no ugoku shiro/howl no ugoku shiro.html",
"../../animes/jujutsu kaisen 0/jujutsu kaisen 0.html",
"../../animes/el tiempo contigo/el tiempo contigo.html",
"../../animes/la princesa mononoke/la princesa mononoke.html",
"../../animes/pokemon peliculas/pokemon peliculas.html",
"../../animes/rebuilds of evangelion/rebuilds of evangelion.html",
"../../animes/the end of evangelion/the end of evangelion.html",
"../../animes/my hero academia peliculas/my hero academia peliculas.html",
"../../animes/black clover pelicula/black clover pelicula.html",
"../../animes/nanatsu no tazai peliculas/nanatsu no tazai peliculas.html",
"../../animes/no game no life zero/no game no life zero.html",
"../../animes/spy family pelicula/spy family pelicula.html",
"../../animes/kaguya sama pelicula/kaguya sama pelicula.html"]



//funcion de buscar en el input:
const input = document.querySelector(".input-buscador")
const contenedorInput = document.querySelector(".input")

let linkInput = document.querySelector(".search-link")


const containerSeries = document.querySelector(".lista-de-series")



document.addEventListener("keyup", e=>{
	if (e.target.matches(".input-buscador")) {
		document.querySelectorAll(".series").forEach(fruta =>{
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			?fruta.classList.remove("filtro")
			:fruta.classList.add("filtro")
		})
	}
})

for (let i = 0; i < 100; i++) {
			document.getElementById(`data-serie-${i}`).addEventListener("click", (e)=>{
			linkInput.setAttribute("href", enlace[i])
			linkInput.click()
	})
}





const buscar = document.querySelector(".buscador")
buscar.addEventListener("click", buscadorInput)

input.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		buscadorInput()
	}
})

function buscadorInput(){
	if (input.value.toLowerCase() == "chainsaw man") {
		linkInput.setAttribute("href", enlace[0])
		linkInput.click()

	} else if (input.value.toLowerCase() == "death note") {
		linkInput.setAttribute("href", enlace[1])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "shingeki no kyojin" || input.value.toLowerCase() == "attack on titan") {
		linkInput.setAttribute("href", enlace[2])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "spy family" || input.value.toLowerCase() == "spy x family") {
		linkInput.setAttribute("href", enlace[3])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "naruto") {
		linkInput.setAttribute("href", enlace[4])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "jujutsu kaisen") {
		linkInput.setAttribute("href", enlace[5])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "kimetsu no yaiba" || input.value.toLowerCase() == "demon slayer") {
		linkInput.setAttribute("href", enlace[6])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "one punch man") {
		linkInput.setAttribute("href", enlace[7])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "tokyo ghoul") {
		linkInput.setAttribute("href", enlace[8])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "my hero academia" || input.value.toLowerCase() == "boku no hero") {
		linkInput.setAttribute("href", enlace[9])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "mob psycho 100") {
		linkInput.setAttribute("href", enlace[10])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "fullmetal alchemist: brotherhood") {
		linkInput.setAttribute("href", enlace[11])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "fire force" || input.value.toLowerCase() == "enen no shouboutai") {
		linkInput.setAttribute("href", enlace[12])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "tokyo revengers") {
		linkInput.setAttribute("href", enlace[13])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "highschool of the dead") {
		linkInput.setAttribute("href", enlace[14])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "dragon ball z") {
		linkInput.setAttribute("href", enlace[15])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "dragon ball super") {
		linkInput.setAttribute("href", enlace[16])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "one piece") {
		linkInput.setAttribute("href", enlace[17])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "record of ragnarok" || input.value.toLowerCase() == "shumatsu no valkyrie") {
		linkInput.setAttribute("href", enlace[18])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "vinland saga") {
		linkInput.setAttribute("href", enlace[19])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "nanatsu no tazai" || input.value.toLowerCase() == "the seven capital sins") {
		linkInput.setAttribute("href", enlace[20])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "inuyasha") {
		linkInput.setAttribute("href", enlace[21])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "goblin slayer") {
		linkInput.setAttribute("href", enlace[22])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "caballeros del zodiaco" || input.value.toLowerCase() == "saint seiya") {
		linkInput.setAttribute("href", enlace[23])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "cowboy bebop") {
		linkInput.setAttribute("href", enlace[24])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "hunter x hunter 1999") {
		linkInput.setAttribute("href", enlace[25])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "full metal panic" || input.value.toLowerCase() == "fullmetal panic") {
		linkInput.setAttribute("href", enlace[26])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "cyberpunk" || input.value.toLowerCase() == "cyberpunk: edgerunners") {
		linkInput.setAttribute("href", enlace[27])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "kaguya-sama" || input.value.toLowerCase() == "kaguya-sama: love is war") {
		linkInput.setAttribute("href", enlace[28])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "dr stone") {
		linkInput.setAttribute("href", enlace[29])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "food wars!" || input.value.toLowerCase() == "Shokugeki no soma") {
		linkInput.setAttribute("href", enlace[30])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "steins, gate") {
		linkInput.setAttribute("href", enlace[31])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "mirai nikki") {
		linkInput.setAttribute("href", enlace[32])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "trigun stampede") {
		linkInput.setAttribute("href", enlace[33])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "mashle: magic and muscles" || input.value.toLowerCase() == "mashle") {
		linkInput.setAttribute("href", enlace[34])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "oshi no ko") {
		linkInput.setAttribute("href", enlace[35])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "hells paradise" || input.value.toLowerCase() == "hell's paradise" || input.value.toLowerCase() == "jigokuraku") {
		linkInput.setAttribute("href", enlace[36])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "heavenly delusion" || input.value.toLowerCase() == "tengoku daimakyo") {
		linkInput.setAttribute("href", enlace[37])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "sono bisque doll wa koi wo suru" || input.value.toLowerCase() == "my dress-up darling") {
		linkInput.setAttribute("href", enlace[38])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "jojos bizarre adventure" || input.value.toLowerCase() == "jojos: bizarre adventure") {
		linkInput.setAttribute("href", enlace[39])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "solo leveling") {
		linkInput.setAttribute("href", enlace[40])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "arcane: league of legends" || input.value.toLowerCase() == "arcane") {
		linkInput.setAttribute("href", enlace[41])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "blue lock") {
		linkInput.setAttribute("href", enlace[42])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "parasyte" || input.value.toLowerCase() == "parasyte: the maxim") {
		linkInput.setAttribute("href", enlace[43])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "edens zero" || input.value.toLowerCase() == "eden's zero") {
		linkInput.setAttribute("href", enlace[44])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "black clover") {
		linkInput.setAttribute("href", enlace[45])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "hellsing") {
		linkInput.setAttribute("href", enlace[46])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "naruto shippuben") {
		linkInput.setAttribute("href", enlace[47])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "zom 100" || input.value.toLowerCase() == "zom 100: the bucket list of the dead") {
		linkInput.setAttribute("href", enlace[48])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "fairy tail") {
		linkInput.setAttribute("href", enlace[49])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "skip and loafer" || input.value.toLowerCase() == "skip to loafer") {
		linkInput.setAttribute("href", enlace[50])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "mushoku tensei" || input.value.toLowerCase() == "mushoku tensei: isekai ittara honki dasu") {
		linkInput.setAttribute("href", enlace[51])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "boruto" || input.value.toLowerCase() == "boruto: naruto the next generation") {
		linkInput.setAttribute("href", enlace[52])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "sousou no fierren" || input.value.toLowerCase() == "soso no fierren") {
		linkInput.setAttribute("href", enlace[53])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dragon ball") {
		linkInput.setAttribute("href", enlace[54])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dragon ball gt") {
		linkInput.setAttribute("href", enlace[55])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "sailor moon") {
		linkInput.setAttribute("href", enlace[56])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "bleach") {
		linkInput.setAttribute("href", enlace[57])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "bleach: thousand-year blood war") {
		linkInput.setAttribute("href", enlace[58])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "neon genesis evangelion" || input.value.toLowerCase() == "evangelion") {
		linkInput.setAttribute("href", enlace[60])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "tengenn toppa gurren lagann") {
		linkInput.setAttribute("href", enlace[61])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "code geass") {
		linkInput.setAttribute("href", enlace[62])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "fullmetal alchemist") {
		linkInput.setAttribute("href", enlace[63])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "capitan tsubasa") {
		linkInput.setAttribute("href", enlace[64])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "classroom of the elite") {
		linkInput.setAttribute("href", enlace[65])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "tower of god" || input.value.toLowerCase() == "la torre de dios") {
		linkInput.setAttribute("href", enlace[66])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "overlord") {
		linkInput.setAttribute("href", enlace[67])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "baki") {
		linkInput.setAttribute("href", enlace[68])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "sword art online") {
		linkInput.setAttribute("href", enlace[69])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "no game no life") {
		linkInput.setAttribute("href", enlace[70])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "uzaki chan" || input.value.toLowerCase() == "uzaki-chan" || input.value.toLowerCase() == "uzaki-chan wa asobitai!") {
		linkInput.setAttribute("href", enlace[71])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "kanojo mo kanojo" || input.value.toLowerCase() == "girlfriend, girlfriend") {
		linkInput.setAttribute("href", enlace[72])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "pluto") {
		linkInput.setAttribute("href", enlace[73])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "buddy daddies") {
		linkInput.setAttribute("href", enlace[74])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dragon ball z: peliculas") {
		linkInput.setAttribute("href", enlace[75])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dragon ball super: broly") {
		linkInput.setAttribute("href", enlace[76])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "dragon ball super: super hero") {
		linkInput.setAttribute("href", enlace[77])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "one piece film: red" || input.value.toLowerCase() == "one piece film red") {
		linkInput.setAttribute("href", enlace[78])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "one piece film: gold" || input.value.toLowerCase() == "one piece film gold") {
		linkInput.setAttribute("href", enlace[79])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "one piece film z" || input.value.toLowerCase() == "one piece film z") {
		linkInput.setAttribute("href", enlace[80])
		linkInput.click()
	}

	else if (input.value.toLowerCase() == "one piece: stampede") {
		linkInput.setAttribute("href", enlace[81])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "demon slayer: mugen train" || input.value.toLowerCase() == "demon slayer mugen train") {
		linkInput.setAttribute("href", enlace[82])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "el viaje de chihiro") {
		linkInput.setAttribute("href", enlace[83])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "your name" || input.value.toLowerCase() == "kimi no na wa") {
		linkInput.setAttribute("href", enlace[84])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "suzume" || input.value.toLowerCase() == "suzume no tojimari") {
		linkInput.setAttribute("href", enlace[85])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "the first slam dunk") {
		linkInput.setAttribute("href", enlace[86])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "howl no ugoku shiro") {
		linkInput.setAttribute("href", enlace[87])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "jujutsu kaisen 0") {
		linkInput.setAttribute("href", enlace[88])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "el tiempo contigo" || input.value.toLowerCase() == "tenki no ko") {
		linkInput.setAttribute("href", enlace[89])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "la princesa mononoke") {
		linkInput.setAttribute("href", enlace[90])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "pokemon: peliculas") {
		linkInput.setAttribute("href", enlace[91])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "rebuilds of evangelion") {
		linkInput.setAttribute("href", enlace[92])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "the end of evangelion") {
		linkInput.setAttribute("href", enlace[93])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "my hero academia: peliculas") {
		linkInput.setAttribute("href", enlace[94])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "black clover: la espada del rey mago") {
		linkInput.setAttribute("href", enlace[95])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "nanatsu no tazai: peliculas") {
		linkInput.setAttribute("href", enlace[96])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "no game, no life zero") {
		linkInput.setAttribute("href", enlace[97])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "spy x family movie: code: white") {
		linkInput.setAttribute("href", enlace[98])
		linkInput.click()
	}
	
	else if (input.value.toLowerCase() == "kaguya-sama: pelicula") {
		linkInput.setAttribute("href", enlace[99])
		linkInput.click()
	}
	
	
	
	
	
	
	else{
		document.querySelector(".href-error").click()
	}
	
}




const inputResponsive = document.querySelector(".input-buscador-responsive")
let linkInputResponsive = document.querySelector(".search-link-responsive")


const containerSeriesResponsive = document.querySelector(".lista-de-series-responsive")



document.addEventListener("keyup", e=>{
	if (e.target.matches(".input-buscador-responsive")) {
		document.querySelectorAll(".series-responsive").forEach(fruta =>{
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			?fruta.classList.remove("filtro-responsive")
			:fruta.classList.add("filtro-responsive")
		})
	}
})

for (let i = 0; i < 100; i++) {
			document.getElementById(`responsive-data-serie-${i}`).addEventListener("click", (e)=>{
			linkInputResponsive.setAttribute("href", enlace[i])
			linkInputResponsive.click()
	})
}



inputResponsive.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		buscadorInputResponsive()
	}
})






function buscadorInputResponsive(){
	if (inputResponsive.value.toLowerCase() == "chainsaw man") {
		linkInput.setAttribute("href", enlace[0])
		linkInput.click()

	} else if (inputResponsive.value.toLowerCase() == "death note") {
		linkInput.setAttribute("href", enlace[1])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "shingeki no kyojin" || inputResponsive.value.toLowerCase() == "attack on titan") {
		linkInput.setAttribute("href", enlace[2])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "spy family" || inputResponsive.value.toLowerCase() == "spy x family") {
		linkInput.setAttribute("href", enlace[3])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "naruto") {
		linkInput.setAttribute("href", enlace[4])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "jujutsu kaisen") {
		linkInput.setAttribute("href", enlace[5])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "kimetsu no yaiba" || inputResponsive.value.toLowerCase() == "demon slayer") {
		linkInput.setAttribute("href", enlace[6])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "one punch man") {
		linkInput.setAttribute("href", enlace[7])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "tokyo ghoul") {
		linkInput.setAttribute("href", enlace[8])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "my hero academia" || inputResponsive.value.toLowerCase() == "boku no hero") {
		linkInput.setAttribute("href", enlace[9])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "mob psycho 100") {
		linkInput.setAttribute("href", enlace[10])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "fullmetal alchemist" || inputResponsive.value.toLowerCase() == "fullmetal alchemist: brotherhood") {
		linkInput.setAttribute("href", enlace[11])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "fire force" || inputResponsive.value.toLowerCase() == "enen no shouboutai") {
		linkInput.setAttribute("href", enlace[12])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "tokyo revengers") {
		linkInput.setAttribute("href", enlace[13])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "highschool of the dead") {
		linkInput.setAttribute("href", enlace[14])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "dragon ball z") {
		linkInput.setAttribute("href", enlace[15])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "dragon ball super") {
		linkInput.setAttribute("href", enlace[16])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "one piece") {
		linkInput.setAttribute("href", enlace[17])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "record of ragnarok" || inputResponsive.value.toLowerCase() == "shumatsu no valkyrie") {
		linkInput.setAttribute("href", enlace[18])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "vinland saga") {
		linkInput.setAttribute("href", enlace[19])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "nanatsu no tazai" || inputResponsive.value.toLowerCase() == "the seven capital sins") {
		linkInput.setAttribute("href", enlace[20])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "inuyasha") {
		linkInput.setAttribute("href", enlace[21])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "goblin slayer") {
		linkInput.setAttribute("href", enlace[22])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "caballeros del zodiaco" || inputResponsive.value.toLowerCase() == "saint seiya") {
		linkInput.setAttribute("href", enlace[23])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "cowboy bebop") {
		linkInput.setAttribute("href", enlace[24])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "hunter x hunter 1999") {
		linkInput.setAttribute("href", enlace[25])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "full metal panic" || inputResponsive.value.toLowerCase() == "fullmetal panic") {
		linkInput.setAttribute("href", enlace[26])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "cyberpunk" || inputResponsive.value.toLowerCase() == "cyberpunk: edgerunners") {
		linkInput.setAttribute("href", enlace[27])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "kaguya-sama" || inputResponsive.value.toLowerCase() == "kaguya-sama: love is war") {
		linkInput.setAttribute("href", enlace[28])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "dr stone") {
		linkInput.setAttribute("href", enlace[29])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "food wars!" || inputResponsive.value.toLowerCase() == "Shokugeki no soma") {
		linkInput.setAttribute("href", enlace[30])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "steins, gate") {
		linkInput.setAttribute("href", enlace[31])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "mirai nikki") {
		linkInput.setAttribute("href", enlace[32])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "trigun stampede") {
		linkInput.setAttribute("href", enlace[33])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "mashle: magic and muscles" || inputResponsive.value.toLowerCase() == "mashle") {
		linkInput.setAttribute("href", enlace[34])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "oshi no ko") {
		linkInput.setAttribute("href", enlace[35])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "hells paradise" || inputResponsive.value.toLowerCase() == "hell's paradise" || inputResponsive.value.toLowerCase() == "jigokuraku") {
		linkInput.setAttribute("href", enlace[36])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "heavenly delusion" || inputResponsive.value.toLowerCase() == "tengoku daimakyo") {
		linkInput.setAttribute("href", enlace[37])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "sono bisque doll wa koi wo suru" || inputResponsive.value.toLowerCase() == "my dress-up darling") {
		linkInput.setAttribute("href", enlace[38])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "jojos bizarre adventure" || inputResponsive.value.toLowerCase() == "jojos: bizarre adventure") {
		linkInput.setAttribute("href", enlace[39])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "solo leveling") {
		linkInput.setAttribute("href", enlace[40])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "arcane: league of legends" || inputResponsive.value.toLowerCase() == "arcane") {
		linkInput.setAttribute("href", enlace[41])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "blue lock") {
		linkInput.setAttribute("href", enlace[42])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "parasyte" || inputResponsive.value.toLowerCase() == "parasyte: the maxim") {
		linkInput.setAttribute("href", enlace[43])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "edens zero" || inputResponsive.value.toLowerCase() == "eden's zero") {
		linkInput.setAttribute("href", enlace[44])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "black clover") {
		linkInput.setAttribute("href", enlace[45])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "hellsing") {
		linkInput.setAttribute("href", enlace[46])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "naruto shippuben") {
		linkInput.setAttribute("href", enlace[47])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "zom 100" || inputResponsive.value.toLowerCase() == "zom 100: the bucket list of the dead") {
		linkInput.setAttribute("href", enlace[48])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "fairy tail") {
		linkInput.setAttribute("href", enlace[49])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "skip and loafer" || inputResponsive.value.toLowerCase() == "skip to loafer") {
		linkInput.setAttribute("href", enlace[50])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "mushoku tensei" || inputResponsive.value.toLowerCase() == "mushoku tensei: isekai ittara honki dasu") {
		linkInput.setAttribute("href", enlace[51])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "boruto" || inputResponsive.value.toLowerCase() == "boruto: naruto the next generation") {
		linkInput.setAttribute("href", enlace[52])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "sousou no fierren" || inputResponsive.value.toLowerCase() == "soso no fierren") {
		linkInput.setAttribute("href", enlace[53])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "dragon ball") {
		linkInput.setAttribute("href", enlace[54])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "dragon ball gt") {
		linkInput.setAttribute("href", enlace[55])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "sailor moon") {
		linkInput.setAttribute("href", enlace[56])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "bleach") {
		linkInput.setAttribute("href", enlace[57])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "bleach: thousand-year blood war") {
		linkInput.setAttribute("href", enlace[58])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "hunter x hunter 2011") {
		linkInput.setAttribute("href", enlace[59])
		linkInput.click()
	}

	else if (inputResponsive.value.toLowerCase() == "neon genesis evangelion" || input.value.toLowerCase() == "evangelion") {
		linkInput.setAttribute("href", enlace[60])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "tengenn toppa gurren lagann") {
		linkInput.setAttribute("href", enlace[61])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "code geass") {
		linkInput.setAttribute("href", enlace[62])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "fullmetal alchemist") {
		linkInput.setAttribute("href", enlace[63])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "capitan tsubasa") {
		linkInput.setAttribute("href", enlace[64])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "classroom of the elite") {
		linkInput.setAttribute("href", enlace[65])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "tower of god" || input.value.toLowerCase() == "la torre de dios") {
		linkInput.setAttribute("href", enlace[66])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "overlord") {
		linkInput.setAttribute("href", enlace[67])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "baki") {
		linkInput.setAttribute("href", enlace[68])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "sword art online") {
		linkInput.setAttribute("href", enlace[69])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "no game no life") {
		linkInput.setAttribute("href", enlace[70])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "uzaki chan" || input.value.toLowerCase() == "uzaki-chan" || input.value.toLowerCase() == "uzaki-chan wa asobitai!") {
		linkInput.setAttribute("href", enlace[71])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "kanojo mo kanojo" || input.value.toLowerCase() == "girlfriend, girlfriend") {
		linkInput.setAttribute("href", enlace[72])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "pluto") {
		linkInput.setAttribute("href", enlace[73])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "buddy daddies") {
		linkInput.setAttribute("href", enlace[74])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "dragon ball z: peliculas") {
		linkInput.setAttribute("href", enlace[75])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "dragon ball super: broly") {
		linkInput.setAttribute("href", enlace[76])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "dragon ball super: super hero") {
		linkInput.setAttribute("href", enlace[77])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "one piece film: red" || input.value.toLowerCase() == "one piece film red") {
		linkInput.setAttribute("href", enlace[78])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "one piece film: gold" || input.value.toLowerCase() == "one piece film gold") {
		linkInput.setAttribute("href", enlace[79])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "one piece film z" || input.value.toLowerCase() == "one piece film z") {
		linkInput.setAttribute("href", enlace[80])
		linkInput.click()
	}

	else if (inputResponsive.value.toLowerCase() == "one piece: stampede") {
		linkInput.setAttribute("href", enlace[81])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "demon slayer: mugen train" || input.value.toLowerCase() == "demon slayer mugen train") {
		linkInput.setAttribute("href", enlace[82])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "el viaje de chihiro") {
		linkInput.setAttribute("href", enlace[83])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "your name" || input.value.toLowerCase() == "kimi no na wa") {
		linkInput.setAttribute("href", enlace[84])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "suzume" || input.value.toLowerCase() == "suzume no tojimari") {
		linkInput.setAttribute("href", enlace[85])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "the first slam dunk") {
		linkInput.setAttribute("href", enlace[86])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "howl no ugoku shiro") {
		linkInput.setAttribute("href", enlace[87])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "jujutsu kaisen 0") {
		linkInput.setAttribute("href", enlace[88])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "el tiempo contigo" || input.value.toLowerCase() == "tenki no ko") {
		linkInput.setAttribute("href", enlace[89])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "la princesa mononoke") {
		linkInput.setAttribute("href", enlace[90])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "pokemon: peliculas") {
		linkInput.setAttribute("href", enlace[91])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "rebuilds of evangelion") {
		linkInput.setAttribute("href", enlace[92])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "the end of evangelion") {
		linkInput.setAttribute("href", enlace[93])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "my hero academia: peliculas") {
		linkInput.setAttribute("href", enlace[94])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "black clover: la espada del rey mago") {
		linkInput.setAttribute("href", enlace[95])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "nanatsu no tazai: peliculas") {
		linkInput.setAttribute("href", enlace[96])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "no game, no life zero") {
		linkInput.setAttribute("href", enlace[97])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "spy x family movie: code: white") {
		linkInput.setAttribute("href", enlace[98])
		linkInput.click()
	}
	
	else if (inputResponsive.value.toLowerCase() == "kaguya-sama: pelicula") {
		linkInput.setAttribute("href", enlace[99])
		linkInput.click()
	}
	
	
	
	else{
		document.querySelector(".href-error").click()
	}
}




const seleccion1 = document.querySelector(".selector-one")
const seleccion2 = document.querySelector(".selector-two")
const options1 = document.querySelector(".ventana-1")
const options2 = document.querySelector(".ventana-2")


seleccion1.addEventListener("mouseover", opciones1)
options1.addEventListener("mouseover", opciones1)
seleccion1.addEventListener("mouseleave", opciones21)
options1.addEventListener("mouseleave", opciones21)

seleccion2.addEventListener("mouseover", opciones2)
options2.addEventListener("mouseover", opciones2)
seleccion2.addEventListener("mouseleave", opciones22)
options2.addEventListener("mouseleave", opciones22)




function opciones1(){
	options1.classList.add("aumentar-1")
}

function opciones21(){
	options1.classList.remove("aumentar-1")
}

function opciones2(){
	options2.classList.add("aumentar-2")
}

function opciones22(){
	options2.classList.remove("aumentar-2")
}





const botonPopulares2020 = document.getElementById("populares-2020")
const botonPopulares2010 = document.getElementById("populares-2010")
const botonPopulares2000 = document.getElementById("populares-2000")
const botonPopulares1990 = document.getElementById("populares-1990")
const botonPopulares2020Responsive = document.getElementById("populares-2020-responsive")
const botonPopulares2010Responsive = document.getElementById("populares-2010-responsive")
const botonPopulares2000Responsive = document.getElementById("populares-2000-responsive")
const botonPopulares1990Responsive = document.getElementById("populares-1990-responsive")

botonPopulares2020.addEventListener("click", (e)=>{
	document.querySelector(".href-2020").click()
})

botonPopulares2010.addEventListener("click", (e)=>{
	document.querySelector(".href-2010").click()
})

botonPopulares2000.addEventListener("click", (e)=>{
	document.querySelector(".href-2000").click()
})

botonPopulares1990.addEventListener("click", (e)=>{
	document.querySelector(".href-1990").click()
})
botonPopulares2020Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2020").click()
})

botonPopulares2010Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2010").click()
})

botonPopulares2000Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-2000").click()
})

botonPopulares1990Responsive.addEventListener("click", (e)=>{
	document.querySelector(".href-1990").click()
})


const accion = document.getElementById("accion")
const comedia = document.getElementById("comedia")
const cienciaFiccion = document.getElementById("ciencia-ficcion")
const romance = document.getElementById("romance")
const suspenso = document.getElementById("suspenso")
const mecha = document.getElementById("mecha")
const ecchi = document.getElementById("ecchi")
const spokon = document.getElementById("spokon")

const accionResponsive = document.getElementById("accion-responsive")
const comediaResponsive = document.getElementById("comedia-responsive")
const cienciaFiccionResponsive = document.getElementById("ciencia-ficcion-responsive")
const romanceResponsive = document.getElementById("romance-responsive")
const suspensoResponsive = document.getElementById("suspenso-responsive")
const mechaResponsive = document.getElementById("mecha-responsive")
const ecchiResponsive = document.getElementById("ecchi-responsive")
const spokonResponsive = document.getElementById("spokon-responsive")

accion.addEventListener("click", (e)=>{
	document.querySelector(".href-accion").click()
})
comedia.addEventListener("click", (e)=>{
	document.querySelector(".href-comedia").click()
})
cienciaFiccion.addEventListener("click", (e)=>{
	document.querySelector(".href-ciencia-ficcion").click()
})
romance.addEventListener("click", (e)=>{
	document.querySelector(".href-romance").click()
})
suspenso.addEventListener("click", (e)=>{
	document.querySelector(".href-suspenso").click()
})
mecha.addEventListener("click", (e)=>{
	document.querySelector(".href-mecha").click()
})
ecchi.addEventListener("click", (e)=>{
	document.querySelector(".href-ecchi").click()
})
spokon.addEventListener("click", (e)=>{
	document.querySelector(".href-spokon").click()
})


accionResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-accion").click()
})
comediaResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-comedia").click()
})
cienciaFiccionResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-ciencia-ficcion").click()
})
romanceResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-romance").click()
})
suspensoResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-suspenso").click()
})
mechaResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-mecha").click()
})
ecchiResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-ecchi").click()
})
spokonResponsive.addEventListener("click", (e)=>{
	document.querySelector(".href-spokon").click()
})

const listadoDeAnimes = document.getElementById("listado-de-animes")
listadoDeAnimes.addEventListener("click", (e)=>{
	document.querySelector(".href-listado-de-animes").click()
})



const contenedorItemAside1 = document.querySelector(".item-aside-1")

const contenedorItemAside2 = document.querySelector(".item-aside-2")
const contenedorItemAside3 = document.querySelector(".item-aside-3")
const contenedorItemAside4 = document.querySelector(".item-aside-4")
const contenedorItemAside5 = document.querySelector(".item-aside-5")
const contenedorItemAside6 = document.querySelector(".item-aside-6")
const contenedorItemAside7 = document.querySelector(".item-aside-7")
const contenedorItemAside8 = document.querySelector(".item-aside-8")
const contenedorItemAside9 = document.querySelector(".item-aside-9")




contenedorItemAside1.addEventListener("mouseover",() =>{
	contenedorItemAside1.classList.add("sub-item-aside")
	
}) 
contenedorItemAside1.addEventListener("mouseleave",() =>{
	contenedorItemAside1.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside2.addEventListener("mouseover",() =>{
	contenedorItemAside2.classList.add("sub-item-aside")
	
}) 
contenedorItemAside2.addEventListener("mouseleave",() =>{
	contenedorItemAside2.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside3.addEventListener("mouseover",() =>{
	contenedorItemAside3.classList.add("sub-item-aside")
	
}) 
contenedorItemAside3.addEventListener("mouseleave",() =>{
	contenedorItemAside3.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside4.addEventListener("mouseover",() =>{
	contenedorItemAside4.classList.add("sub-item-aside")
	
}) 
contenedorItemAside4.addEventListener("mouseleave",() =>{
	contenedorItemAside4.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside5.addEventListener("mouseover",() =>{
	contenedorItemAside5.classList.add("sub-item-aside")
	
}) 
contenedorItemAside5.addEventListener("mouseleave",() =>{
	contenedorItemAside5.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside6.addEventListener("mouseover",() =>{
	contenedorItemAside6.classList.add("sub-item-aside")
	
}) 
contenedorItemAside6.addEventListener("mouseleave",() =>{
	contenedorItemAside6.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside7.addEventListener("mouseover",() =>{
	contenedorItemAside7.classList.add("sub-item-aside")
	
}) 
contenedorItemAside7.addEventListener("mouseleave",() =>{
	contenedorItemAside7.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside8.addEventListener("mouseover",() =>{
	contenedorItemAside8.classList.add("sub-item-aside")
	
}) 
contenedorItemAside8.addEventListener("mouseleave",() =>{
	contenedorItemAside8.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside9.addEventListener("mouseover",() =>{
	contenedorItemAside9.classList.add("sub-item-aside")
	
}) 
contenedorItemAside9.addEventListener("mouseleave",() =>{
	contenedorItemAside9.classList.remove("sub-item-aside")
	
}) 



contenedorItemAside1.addEventListener("click",() =>{
	document.querySelector(".href-aside-1").click()
	
}) 

contenedorItemAside2.addEventListener("click",() =>{
	document.querySelector(".href-aside-2").click()
	
}) 
contenedorItemAside3.addEventListener("click",() =>{
	document.querySelector(".href-aside-3").click()
	
}) 
contenedorItemAside4.addEventListener("click",() =>{
	document.querySelector(".href-aside-4").click()
	
}) 
contenedorItemAside5.addEventListener("click",() =>{
	document.querySelector(".href-aside-5").click()
	
}) 
contenedorItemAside6.addEventListener("click",() =>{
	document.querySelector(".href-aside-6").click()
	
}) 
contenedorItemAside7.addEventListener("click",() =>{
	document.querySelector(".href-aside-7").click()
	
}) 
contenedorItemAside8.addEventListener("click",() =>{
	document.querySelector(".href-aside-8").click()
	
}) 
contenedorItemAside9.addEventListener("click",() =>{
	document.querySelector(".href-aside-9").click()
	
}) 








const contenedorAsideResponsive1 = document.querySelector(".serie-aside-responsive-1")
const contenedorAsideResponsive2 = document.querySelector(".serie-aside-responsive-2")
const contenedorAsideResponsive3 = document.querySelector(".serie-aside-responsive-3")
const contenedorAsideResponsive4 = document.querySelector(".serie-aside-responsive-4")
const contenedorAsideResponsive5 = document.querySelector(".serie-aside-responsive-5")
const contenedorAsideResponsive6 = document.querySelector(".serie-aside-responsive-6")
const contenedorAsideResponsive7 = document.querySelector(".serie-aside-responsive-7")
const contenedorAsideResponsive8 = document.querySelector(".serie-aside-responsive-8")
const contenedorAsideResponsive9 = document.querySelector(".serie-aside-responsive-9")



contenedorAsideResponsive1.addEventListener("click", ()=>{
	document.querySelector(".href-aside-1").click()
	contenedorAsideResponsive1.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive2.addEventListener("click", ()=>{
	document.querySelector(".href-aside-2").click()
	contenedorAsideResponsive2.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive3.addEventListener("click", ()=>{
	document.querySelector(".href-aside-3").click()
	contenedorAsideResponsive3.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive4.addEventListener("click", ()=>{
	document.querySelector(".href-aside-4").click()
	contenedorAsideResponsive4.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive5.addEventListener("click", ()=>{
	document.querySelector(".href-aside-5").click()
	contenedorAsideResponsive5.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive6.addEventListener("click", ()=>{
	document.querySelector(".href-aside-6").click()
	contenedorAsideResponsive6.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive7.addEventListener("click", ()=>{
	document.querySelector(".href-aside-7").click()
	contenedorAsideResponsive7.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive8.addEventListener("click", ()=>{
	document.querySelector(".href-aside-8").click()
	contenedorAsideResponsive8.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive9.addEventListener("click", ()=>{
	document.querySelector(".href-aside-9").click()
	contenedorAsideResponsive9.classList.add("agrandar-aside-responsive")
})
