//funcion para que la barra de navegacion se haga fixed:
const barraDeNavegacion = document.querySelector(".barra-de-navegacion")
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

const seleccion2 = document.querySelector(".selector-two")
const seleccion3 = document.querySelector(".selector-three")
const options3 = document.querySelector(".ventana-3")

seleccion3.addEventListener("mouseover", opciones3)
options3.addEventListener("mouseover", opciones3)
seleccion3.addEventListener("mouseleave", opciones23)
options3.addEventListener("mouseleave", opciones23)

function opciones3(){
 options3.removeAttribute("hidden")
 options3.classList.add("aumentar")
}

function opciones23(){
options3.setAttribute("hidden","true")

}

const containerImagenes = document.querySelector(".desplazamiento-de-imagen")
const botonAdelante = document.querySelector(".adelante")
const botonAtras = document.querySelector(".atras")
const punto1 = document.querySelector(".punto-1")
const punto2 = document.querySelector(".punto-2")
const punto3 = document.querySelector(".punto-3")
const punto4 = document.querySelector(".punto-4")
botonAdelante.addEventListener("click", adelante)
botonAtras.addEventListener("click", atras)

let posicionA = true
let posicionB = false
let posicionC = false
let posicionD = false
botonAtras.setAttribute("hidden", "true")

if (posicionA == true) {
	punto1.classList.add("punto-1-a")
}
function adelante(){
	if (posicionA == true) {
		containerImagenes.classList.add("adelante-1")
		containerImagenes.classList.remove("atras-3")
		containerImagenes.classList.remove("atras-2")
		containerImagenes.classList.remove("atras-1")
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		posicionA = false
		posicionB = true
		botonAtras.removeAttribute("hidden")

	}
	else if (posicionB == true) {
		containerImagenes.classList.add("adelante-2")
		containerImagenes.classList.remove("atras-1")
		containerImagenes.classList.remove("atras-2")
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		posicionB = false
		posicionC = true
	}

	else if (posicionC == true) {
		containerImagenes.classList.add("adelante-3")
		containerImagenes.classList.remove("atras-1")
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
		posicionC = false
		posicionD = true
		botonAdelante.setAttribute("hidden", "true")

	}
}

function atras(){
	if (posicionD == true) {
		containerImagenes.classList.add("atras-1")
		containerImagenes.classList.remove("adelante-3")
		containerImagenes.classList.remove("adelante-2")
		containerImagenes.classList.remove("adelante-1")
		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto3.classList.replace("punto-3-e", "punto-3-a")
		botonAdelante.removeAttribute("hidden")
		posicionD = false
		posicionC = true
	}

	else if (posicionC == true) {
		containerImagenes.classList.add("atras-2")
		containerImagenes.classList.remove("adelante-2")
		containerImagenes.classList.remove("adelante-1")
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto2.classList.replace("punto-2-e", "punto-2-a")
		posicionC = false
		posicionB = true
	}

	else if (posicionB == true) {
		containerImagenes.classList.add("atras-3")
		containerImagenes.classList.remove("adelante-1")
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto1.classList.replace("punto-1-e", "punto-1-a")
		posicionB = false
		posicionA = true
		botonAtras.setAttribute("hidden", "true")
	}
}


const botonDescargar1 = document.querySelector(".boton-descargar-1")
const botonDescargar2 = document.querySelector(".boton-descargar-2")
const botonDescargar3 = document.querySelector(".boton-descargar-3")
const botonDescargar4 = document.querySelector(".boton-descargar-4")
const botonDescargar5 = document.querySelector(".boton-descargar-5")


botonDescargar1.addEventListener("click", descargar1)
botonDescargar2.addEventListener("click", descargar1)
botonDescargar3.addEventListener("click", descargar1)
botonDescargar4.addEventListener("click", descargar1)
botonDescargar5.addEventListener("click", descargar1)


enlaceMediafire = document.querySelector(".link-1")
let mediafire1 = `https://www.mediafire.com/folder/7e5tvdcu73q8j`


function descargar1(){
	enlaceMediafire.setAttribute("href", mediafire1)
	enlaceMediafire.click()
}



const botonInicio = document.querySelector(".inicio")
botonInicio.addEventListener("click", home)

function home(){
	document.querySelector('.link-inicio').click()
}


		enlace1 = "../chainsaw man/chainsaw.html"
		enlace2 = "../Death Note/death note.html"
		enlace3 = "../Shingeki No Kyojin/shingeki no kyojin.html"
		enlace4 = "../spy x family/spy x family.html"
		enlace5 = "../naruto/naruto.html"
		enlace6= "../evangelion/evangelion.html"
		enlace7 = "../jujutsu kaisen/jujutsu kaisen.html"
		enlace8 = "../kimetsu no yaiba/kimetsu no yaiba.html"
		enlace9 = "../naruto shippuben/naruto shippuben.html"
		enlace10 = "../one punche man/one punche man.html"
		enlace11 = "../tokyo ghoul/tokyo ghoul.html"
		enlace12 = "../my hero academia/my hero academia.html"
		enlace13 = "../mod psycho/mod psycho.html"
		enlace14 = "../full metal alchemist/full metal alchemist"
		enlace15 = "../fire force/fire force.html"
		enlace16 = "../tokyo revengers/tokyo revengers.html"
		enlace17 = "../high school of the dead/hsotd.html"
		enlace18 = "../bleach/bleach.html"
		enlace19 = "../dragon ball z/dragon ball z.html"
		enlace20 = "../dragon ball super/dragon ball super.html"
		enlace21 = "../one piece/one piece.html"
		enlace22 = "../hunter hunter 2011/hunter hunter 2011.html"
		enlace23 = "../record of ragnarok/record of ragnarok.html"
		enlace24 = "../black clover/black clover.html"
		enlace25 = "../boruto/boruto.html"
		enlace26 = "../berserk/berserk.html"
		enlace27 = "../fairy tail/fairy tail.html"
		enlace28 = "../nanatsu no tazai/nanatsu no tazai.html"
		enlace29 = "../inuyasha/inuyasha.html"
		enlace30 = "../pokemon/pokemon.html"
		enlace31 = "../caballeros del zodiaco/caballeros del zodiaco.html"
		enlace32 = "../cowboy bebop/cowboy bebop.html"
		enlace33 = "../hunter hunter 1999/hunter hunter 1999.html"
		enlace34 = "../full metal panic/full metal panic.html"
		enlace35 = "../code geass/code geass.html"


const input = document.querySelector(".input-buscador")
const buscar = document.querySelector(".buscador")
buscar.addEventListener("click", buscador)
linkInput = document.querySelector(".search-link")


function buscador(){
	if (input.value == "chainsaw man" || input.value == "Chainsaw Man" || input.value == "Chainsaw man" || input.value == "CHAINSAW MAN") {
		linkInput.setAttribute("href", enlace1)
		linkInput.click()

	} else if (input.value == "death note" || input.value == "Death Note" || input.value == "Death note" ) {
		linkInput.setAttribute("href", enlace2)
		linkInput.click()
	}
	else if (input.value == "shingeki no kyojin" || input.value == "atack on titan" || input.value == "Shingeki no kyojin" || input.value == "Atack On Titan") {
		linkInput.setAttribute("href", enlace3)
		linkInput.click()
	}
	else if (input.value == "spy family" || input.value == "Spy Family" || input.value == "Spy family" || input.value == "Spy x family" || input.value == "Spy X Family") {
		linkInput.setAttribute("href", enlace4)
		linkInput.click()
	}
	else if (input.value == "naruto" || input.value == "Naruto" || input.value == "NARUTO") {
		linkInput.setAttribute("href", enlace5)
		linkInput.click()
	}
	else if (input.value == "neon genesis evangelion" || input.value == "Neon Genesis Evangelion" || input.value == "Evangelion" || input.value == "evangelion" || input.value == "Neon genesis evangelion" ) {
		linkInput.setAttribute("href", enlace6)
		linkInput.click()
	}
	else if (input.value == "jujutsu kaisen" || input.value == "Jujutsu Kaisen" || input.value == "Jujutsu kaisen" || input.value == "jujutsu kisen" ) {
		linkInput.setAttribute("href", enlace7)
		linkInput.click()
	}
	else if (input.value == "Kimetsu No Yaiba" || input.value == "kimetsu no yaiba" || input.value == "Demon Slayer" || input.value == "demon slayer" || input.value == "Demon slayer" || input.value == "Kimetsu no yaiba") {
		linkInput.setAttribute("href", enlace8)
		linkInput.click()
	}
	
	else if (input.value == "Naruto Shippuben" || input.value == "naruto shippuben" || input.value == "Naruto shippuben") {
		linkInput.setAttribute("href", enlace9)
		linkInput.click()
	}
	else if (input.value == "One Punch man" || input.value == "One Punch Man" || input.value == "one punch man" || input.value == "ONE PUNCH MAN" ) {
		linkInput.setAttribute("href", enlace10)
		linkInput.click()
	}
	else if (input.value == "Tokyo Ghoul" || input.value == "tokyo ghoul" || input.value == "Tokyo ghoul" || input.value == "TOKYO GHOUL" ) {
		linkInput.setAttribute("href", enlace11)
		linkInput.click()
	}
	else if (input.value == "my hero academy" || input.value == "my hero academia" || input.value == "boku no hero" || input.value == "Boku No Hero" || input.value == "My Hero Academia" || input.value == "My hero academy" || input.value == "BOKU NO HERO" || input.value == "MY HERO ACADEMY") {
		linkInput.setAttribute("href", enlace12)
		linkInput.click()
	}
	else if (input.value == "MOD PSYCHO 100" || input.value == "Mod psycho 100" || input.value == "mod psycho 100" || input.value == "Mod Psycho 100" ) {
		linkInput.setAttribute("href", enlace13)
		linkInput.click()
	}
	else if (input.value == "fullmetal alchemist" || input.value == "Fullmetal Alchemist" || input.value == "FULLMETAL ALCHEMIST" || input.value == "Fullmetal alchemist" ) {
		linkInput.setAttribute("href", enlace14)
		linkInput.click()
	}
	else if (input.value == "Fire Force" || input.value == "fire force" || input.value == "Fire force" || input.value == "FIRE FORCE" ) {
		linkInput.setAttribute("href", enlace15)
		linkInput.click()
	}
	else if (input.value == "TOKYO REVENGERS" || input.value == "Tokyo Revengers" || input.value == "tokyo revengers" || input.value == "TOKYO REVENGERS" ) {
		linkInput.setAttribute("href", enlace16)
		linkInput.click()
	}
	else if (input.value == "Highschool Of The Dead" || input.value == "Highschool of the dead" || input.value == "highschool of the dead" || input.value == "HIGHSHOOL OF THE DEAD" ) {
		linkInput.setAttribute("href", enlace17)
		linkInput.click()
	}
	else if (input.value == "bleach" || input.value == "BLEACH" || input.value == "Bleach" || input.value == "blich" ) {
		linkInput.setAttribute("href", enlace18)
		linkInput.click()
	}
	else if (input.value == "Dragon ball z" || input.value == "Dragon Ball Z" || input.value == "DRAGON BALL Z" || input.value == "dragon ball z" ) {
		linkInput.setAttribute("href", enlace19)
		linkInput.click()
	}
	else if (input.value == "Dragon ball super" || input.value == "Dragon Ball Super" || input.value == "DRAGON BALL SUPER" || input.value == "dragon ball super" ) {
		linkInput.setAttribute("href", enlace20)
		linkInput.click()
	}
	else if (input.value == "One Piece" || input.value == "ONE PIECE" || input.value == "One piece" || input.value == "one piece" ) {
		linkInput.setAttribute("href", enlace21)
		linkInput.click()
	}
	else if (input.value == "Hunter X Hunter 2011" || input.value == "Hunter x hunter 2011" || input.value == "Hunter Hunter 2011" || input.value == "hunter hunter 2011" || input.value == "hunter x hunter 2011" || input.value == "HUNTER X HUNTER 2011" ) {
		linkInput.setAttribute("href", enlace22)
		linkInput.click()
	}
	else if (input.value == "Record Of Ragnarok" || input.value == "Record of ragnarok" || input.value == "RECORD OF RAGNAROK" || input.value == "record of ragnarok" ) {
		linkInput.setAttribute("href", enlace23)
		linkInput.click()
	}
	else if (input.value == "Black Clover" || input.value == "Black clover" || input.value == "BLACK CLOVER" || input.value == "black clover" ) {
		linkInput.setAttribute("href", enlace24)
		linkInput.click()
	}
	else if (input.value == "Boruto" || input.value == "BORUTO" || input.value == "boruto the next generation" || input.value == "boruto" ) {
		linkInput.setAttribute("href", enlace25)
		linkInput.click()
	}
	else if (input.value == "Berserk" || input.value == "berserk" || input.value == "BERSERK" || input.value == "beserk" ) {
		linkInput.setAttribute("href", enlace26)
		linkInput.click()
	}
	else if (input.value == "FAIRY TAIL" || input.value == "fairy tail" || input.value == "Fairy tail" || input.value == "Fairy Tail" ) {
		linkInput.setAttribute("href", enlace27)
		linkInput.click()
	}
	else if (input.value == "Nanatsu No Tazai" || input.value == "Nanatsu no tazai" || input.value == "NANATSU NO TAZAI" || input.value == "nanatsu no tazai" ) {
		linkInput.setAttribute("href", enlace28)
		linkInput.click()
	}
	else if (input.value == "Inuyasha" || input.value == "inuyasha" || input.value == "INUYASHA" || input.value == "inuyacha" ) {
		linkInput.setAttribute("href", enlace29)
		linkInput.click()
	}
	else if (input.value == "Pokemon" || input.value == "pokemon" || input.value == "POKEMON") {
		linkInput.setAttribute("href", enlace30)
		linkInput.click()
	}
	else if (input.value == "caballeros del zodiaco" || input.value == "Saint seya" || input.value == "Saint seya" || input.value == "Caballeros del zodiaco" ) {
		linkInput.setAttribute("href", enlace31)
		linkInput.click()
	}
	else if (input.value == "cowboy bebop" || input.value == "Cowboy Bebop" || input.value == "COWBOY BEBOP" || input.value == "Cowboy bebop" ) {
		linkInput.setAttribute("href", enlace32)
		linkInput.click()
	}
	else if (input.value == "Hunter X Hunter" || input.value == "hunter x hunter" || input.value == "hunter hunter" || input.value == "hunter x hunter" ) {
		linkInput.setAttribute("href", enlace33)
		linkInput.click()
	}
	else if (input.value == "Fullmetal Panic" || input.value == "fullmetal panic" || input.value == "Fullmetal panic" || input.value == "FULLMETAL PANIC" ) {
		linkInput.setAttribute("href", enlace34)
		linkInput.click()
	}
	else if (input.value == "CODE GEASS" || input.value == "Code geass" || input.value == "Code Geass" || input.value == "code geass" ) {
		linkInput.setAttribute("href", enlace35)
		linkInput.click()
	}
}


const botonMision = document.querySelector(".boton-mision")
const botonVision = document.querySelector(".boton-vision")
const botonSobreApp = document.querySelector(".boton-sobre-la-app")
const botonCondiciones = document.querySelector(".boton-condiciones")

botonMision.addEventListener("click", mision)
botonVision.addEventListener("click", vision)
botonSobreApp.addEventListener("click", sobreapp)
botonCondiciones.addEventListener("click", condiciones)

function sobreapp(){document.querySelector(".link-sobre-app").click()}

function mision(){document.querySelector(".link-mision").click()}

function vision(){document.querySelector(".link-vision").click()}

function condiciones(){document.querySelector(".link-condiciones").click()}