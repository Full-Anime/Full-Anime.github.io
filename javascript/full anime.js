"use strict"


//funcion para que la barra de navegacion se haga fixed:
const body = document.querySelector(".body")
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

//funciones para modales de los poster del grid:
//items del grid container:
const container1 = document.querySelector(".new-1")
const container2 = document.querySelector(".new-2")
const container3 = document.querySelector(".new-3")
const container4 = document.querySelector(".new-4")
const container5 = document.querySelector(".new-5")
const container6 = document.querySelector(".new-6")
const container7 = document.querySelector(".new-7")
const container8 = document.querySelector(".new-8")
const container9 = document.querySelector(".new-9")
const container10 = document.querySelector(".new-10")
const container11 = document.querySelector(".new-11")
const container12 = document.querySelector(".new-12")
const container13 = document.querySelector(".new-13")
const container14 = document.querySelector(".new-14")
const container15 = document.querySelector(".new-15")

container1.addEventListener("mouseover", presionar1)
container1.addEventListener("mouseleave", ocultarVentana1)
container2.addEventListener("mouseover", presionar2)
container2.addEventListener("mouseleave", ocultarVentana2)
container3.addEventListener("mouseover", presionar3)
container3.addEventListener("mouseleave", ocultarVentana3)
container4.addEventListener("mouseover", presionar4)
container4.addEventListener("mouseleave", ocultarVentana4)
container5.addEventListener("mouseover", presionar5)
container5.addEventListener("mouseleave", ocultarVentana5)
container6.addEventListener("mouseover", presionar6)
container6.addEventListener("mouseleave", ocultarVentana6)
container7.addEventListener("mouseover", presionar7)
container7.addEventListener("mouseleave", ocultarVentana7)
container8.addEventListener("mouseover", presionar8)
container8.addEventListener("mouseleave", ocultarVentana8)
container9.addEventListener("mouseover", presionar9)
container9.addEventListener("mouseleave", ocultarVentana9)
container10.addEventListener("mouseover", presionar10)
container10.addEventListener("mouseleave", ocultarVentana10)
container11.addEventListener("mouseover", presionar11)
container11.addEventListener("mouseleave", ocultarVentana11)
container12.addEventListener("mouseover", presionar12)
container12.addEventListener("mouseleave", ocultarVentana12)
container13.addEventListener("mouseover", presionar13)
container13.addEventListener("mouseleave", ocultarVentana13)
container14.addEventListener("mouseover", presionar14)
container14.addEventListener("mouseleave", ocultarVentana14)
container15.addEventListener("mouseover", presionar15)
container15.addEventListener("mouseleave", ocultarVentana15)

container1.addEventListener("click", () =>{
	href1.click()
})
container2.addEventListener("click", () =>{
	href2.click()
})
container3.addEventListener("click", () =>{
	href3.click()
})
container4.addEventListener("click", () =>{
	href4.click()
})
container5.addEventListener("click", () =>{
	href5.click()
})
container6.addEventListener("click", () =>{
	href6.click()
})
container7.addEventListener("click", () =>{
	href7.click()
})
container8.addEventListener("click", () =>{
	href8.click()
})
container9.addEventListener("click", () =>{
	href9.click()
})
container10.addEventListener("click", () =>{
	href10.click()
})
container11.addEventListener("click", () =>{
	href11.click()
})
container12.addEventListener("click", () =>{
	href12.click()
})
container13.addEventListener("click", () =>{
	href13.click()
})
container14.addEventListener("click", () =>{
	href14.click()
})
container15.addEventListener("click", () =>{
	href15.click()
})


//contenedores de informacion de las ventanas ocultas de los poster: 
const item = document.querySelector(".item")
const item2 = document.querySelector(".item-2")
const item3 = document.querySelector(".item-3")
const item4 = document.querySelector(".item-4")
const item5 = document.querySelector(".item-5")
const item6 = document.querySelector(".item-6")
const item7 = document.querySelector(".item-7")
const item8 = document.querySelector(".item-8")
const item9 = document.querySelector(".item-9")
const item10 = document.querySelector(".item-10")
const item11 = document.querySelector(".item-11")
const item12 = document.querySelector(".item-12")
const item13 = document.querySelector(".item-13")
const item14 = document.querySelector(".item-14")
const item15 = document.querySelector(".item-15")

//variables para cambiar atributo alt:
let alt = ["img Chainsaw Man", 
"img Death Note", 
"img Atack On Titan", 
"img Spy X Family", 
"img Naruto",  
"img Jujutsu Kaisen", 
"img Kimetsu No Yaiba", 
"img One Punche Man", 
"img Tokyo Ghoul", 
"img My Hero Academia", 
"img Mob Psycho 100", 
"img FullMetal Alchemist", 
"img Fire Force", 
"img Tokyo Revengers", 
"img Highschool Of The Dead",
"img Dragon Ball Z", 
"img Dragon Ball Super", 
"img One Piece", 
"img record of ragnarok",
"img Vinland Saga",
"img Nanatsu No Tazai", 
"img Inuyasha", 
"img Goblin Slayer",
"img Caballeros del Zodiaco", 
"img Cowboy Bebop", 
"img Hunter X Hunter 1999", 
"img Full Metal Panic", 
"img Cyberpunk",
"img Kaguya-Sama: Love Is War", 
"img Dr Stone", 
"img food wars",
"img Steins, Gate", 
"img Mirai Nikki", 
"img Trigun Stampede", 
"img Mashle", 
"img Oshi No Ko", 
"img Hells Paradise", 
"img Tengoku Daimakyo", 
"img My Dress-Up Darling", 
"img Jojos Bizarre Adeventure",
"img solo leveling", 
"img Arcane", 
"img Blue Lock", 
"img Parasyte", 
"img Edens Zero"]

let title = ["Poster Chainsaw Man", 
"Poster Death Note", 
"Poster Attack On Titan", 
"Poster Spy X Family", 
"Poster Naruto",  
"Poster Jujutsu Kaisen", 
"Poster Kimetsu No Yaiba", 
"Poster One Punch Man", 
"Poster Tokyo Ghoul", 
"Poster My Hero Academia", 
"Poster Mob Psycho 100", 
"Poster Full Metal Alchemist", 
"Poster Fire Force", 
"Poster Tokyo Revengers", 
"Poster Highschool Of The Dead",
"Poster Dragon Ball Z", 
"Poster Dragon Ball Super", 
"Poster One Piece",  
"Poster record of ragnarok",
"Poster Vinland Saga", 
"Poster Nanatsu No Tazai", 
"Poster Inuyasha", 
"Poster Goblin Slayer",
"Poster Caballeros del Zodiaco", 
"Poster Cowboy Bebop", 
"Poster Hunter X Hunter 1999", 
"Poster Full Metal Panic",
"Poster Cyberpunk: edgerunners",
"Poster Kaguya-Sama: Love Is War", 
"Poster Dr Stone", 
"Poster food wars",
"Poster Steins, Gate", 
"Poster Mirai Nikki", 
"Poster Trigun Stampede", 
"Poster Mashle", 
"Poster Oshi No Ko", 
"Poster Hells Paradise", 
"Poster Tengoku Daimakyo", 
"Poster My Dress-Up Darling", 
"Poster Jojos Bizarre Adeventure",
"Poster solo leveling", 
"Poster Arcane", 
"Poster Blue Lock", 
"Poster Parasyte", 
"Poster Edens Zero"]



//parrafos para cambiar el parrafo de las ventanas ocultas de los grid:

let parrafo = [`<h3>Chainsaw Man</h3><b>Denji</b> es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de <b>Pochita</b>, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Mappa`,

 			`<h3>Death Note</h3>La historia se centra en <b>Light Yagami</b>, un estudiante de ecuela secundaria. Un dia encuentra un cuaderno con poderes sobrenaturales llamado <b>"Death Note"</b>, con e cual es capaz de matar personas si se escriben los nombres de estas en el.<br><br><b>Genero:</b> Suspenso, Accion<br><br><b>Estudio:</b> Madhouse`,

			`<h3>Shingeki No kyojin</h3>La historia se desarrolla en un mundo ficticio en el que la humanidad esta al borde de la existincion a causa de unas criaturas humanoides llamadas <b>"titanes"</b>, lo que obliga a los supervivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Wit Studio (Temporadas 1-2-3)/Mappa (Temporada 4)`, 

			`<h3>Spy X Family</h3>Narra las aventuras del agente secreto <b>Twilight</b>, quien bajo su identidad de Loid Forger debe formar una familia para cumplir una mision y mantener la paz entre los paises ficticios de <b>Ostania y Westalis</b>.<br><br><b>Genero:</b> Accion, Comedia<br><br><b>Estudio:</b> Wit Studio`, 

			`<h3>Naruto</h3>La obra narra la historia de un Ninja huerfano adolescente llamado <b>Naruto Uzumaki</b>, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas (Kyubi), y quien aspira a convertirse en <b>hokage</b> (lider de su aldea) con el proposito de ser reconocido como alguien importante en la alda y entre sus compañeros.<br><br><b>Genero:</b> Accion, aventura<br><br><b>Estudio:</b> Pierrot `, 

			`<h3>Jujutsu Kaisen</h3>La historia gira en torno al estudiante <b>Yuji Itadori</b>, quien se une a una organizacion secreta de hechiceros para matar a una poderosa maldicion llamada <b>Ryomen Sukuna</b> tras convertirse en su anfitrion.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Mappa`, 

			`<h3>Demon Slayer: Kimetsu No Yaiba</h3>La obra sigue las aventuras de <b>Tanjiro Kamado</b>, un adolescente cuya familia fue cruelmente asesina por un Demonio el cual convirtio a su hermana <b>Nezuko</b> en una de estas criaturas, obligando a Tanjiro a emprender un viaje para cazar a estos seres  y ayudar a su hermana a recuperar su humanidad. <br><br><b>Genero:</b> Accion, Aventura<br><br><b>Estudio:</b> Ufotable`, 

			`<h3>One Punch Man</h3>La historia gira alrededor de un héroe llamado <b>Saitama</b>, el cual vive en la Ciudad Z de Japón. Todas las ciudades son atacadas por monstruos constantemente, 
				y los héroes deben encargarse de proteger a los habitantes con sus habilidades eliminando a cada uno de los enemigos.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Madhouse`,  

			`<h3>Tokyo Ghoul</h3>Serie con violencia explícita y ambientación sobrenatural que presenta una ciudad de Tokio en la que mueren personas inocentes a manos de <b>Ghouls</b>, seres misteriosos que se alimentan de humanos.<br><br><b>Genero:</b> Accion, Suspenso<br><br><b>Estudio:</b> Pierrot`, 

			`<h3>My Hero Academia</h3>En un mundo donde tener superpoderes es lo más común, nace <b>Izuku Midoriya</b>, un niño sin este don que sueña con ser un superhéroe. La gente con este tipo de habilidades es conocida como <b>'Quirk'</b> y, 
				debido a no pertenecer a esta clase, Izuku sufre bullying en su escuela por ser diferente.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> Bones`, 

			`<h3>Mob Psycho 100</h3><b>Shigeo Kageyama</b>, tambien conocido como <b>"Mob"</b>, es un adolescente con unos impresionantes poderes <b>psiquicos</b> al que trata de controlar sus emociones al maximo para que sus habilidades no se escapen de su control.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> Bones`,

			`<h3>Fullmetal Alchemist: Brotherhood</h3><b>Edward</b> y <b>Alphonse</b> son dos jovenes alquimistas que trabajan para el ejercito central luvhando contra todos los enemigos que perturban paz de la nacion. En este caso el <b>Alquimista de Hielo</b> intenta destruir el pais y acabar con <b>King Bradley</b>. la historia nos lleva 10 años atras en el tiempo.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Bones`, 

			`<h3>Fire Force</h3><b>Shinra Kusakabe</b> es un joven pirocinético de tercera generación que ganó el apodo de <b>"Huellas del Diablo"</b> por su habilidad para encender sus pies a voluntad. Se une al Escuadrón <b>Fire Force 8</b>, que está compuesto por otros usuarios 
				de llamas mientras trabajan para extinguir cualquier Infernal que encuentren.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> David Production`, 

			`<h3>Tokyo Revengers</h3>akemichi, un fracasado que fue miembro de una banda en su juventud, salta 12 años atrás en el tiempo para volver al instituto y salvar a su exnovia, <b>Hina</b>, que en la actualidad haido asesinada por la organización criminal <b>Tokyo Manjikai</b>.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Liden Films`, 

			`<h3>Highschool Of The Dead</h3>Un virus mortal está convirtiendo a las personas en cadáveres ambulantes. Takashi y sus amigos intentan escapar de los muertos vivientes. Toda la escuela se ve arrastrada por el caos y los malos jugadores se unen a la lucha con armas hechas a mano.<br><br><b>Genero:</b> Accion, post-apocaliptico<br><br><b>Estudio:</b> Madhouse`, 

			
			`<h3>Dragon Ball Z</h3>La trama de <b>Dragon Ball Z</b> se centra en la vida adulta de <b>Son Goku</b>, quien tendrá que defender la tierra de los numerosos villanos que amenazan con destruirla. Además, la serie trama de forma paralela la madurez de su hijo <b>Gohan</b>. La producción destaca por tener un tono más 
			serio que su predecesora. <b>Raditz</b>, el hermano de Goku, ha viajado a la Tierra para descburir por qué Goku todavia no ha destruido el planeta como se suponía que debía de hacer.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> Toei Animation`, 

			`<h3>Dragon Ball Super</h3>Se trata de una secuela de la serie de anime <b>Dragon Ball Z</b> que sigue las aventuras de Goku y sus amigos durante el lapso de diez años tras la 
				derrota de Majin Boo. Una adaptación al manga comenzó a serializarse en la revista V Jump de Shueisha el 20 de junio de 2015.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Toei Animation`, 

			`<h3>One Piece</h3>One Piece narra la historia de un joven llamado <b>Monkey D. Luffy</b>, que inspirado por su amigo pirata <b>Shanks</b>, comienza un viaje para alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá encontrar el tesoro One Piece dejado por el anterior rey de los piratas <b>Gol D. Roger</b>.<br><br><b>Genero:</b> Accion, Aventura<br><br><b>Estudio:</b> Toei Animation`, 

			`<h3>Record Of Ragnarok</h3>Antes de erradicar a los humanos de la faz de la Tierra, <b>los dioses</b> les dan una última oportunidad para demostrar su valía. ¡Que empiecen las batallas de Ragnarok! Ve todo lo que quieras.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> Madhouse`, 

			`<h3>Vinland Saga</h3>Thors, un gran guerrero vikingo, es asesinado en batalla por Askeladd, un mercenario. Thorfinn, hijo de Thors, juro vengarse.<br><br><b>Genero:</b> Accion, drama<br><br><b>Estudio:</b> Wit Studio/Mappa`, 

			`<h3>Nanatsu No Tazai</h3>La trama principal se sitúa en una época medieval y sigue las aventuras del escuadrón de caballeros conocidos como los <b>"siete pecados capitales"</b> (que actúan como protectores de Britannia), para defenderla de la opresión, y al mismo tiempo buscan la redención por pecados que les confirieron sus títulos.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> A-i Pictures`, 

			`<h3>InuYasha</h3><b>Kagome Higurashi</b>, una estudiante de 15 años en Tokyo, es transportada al período <b>Sengoku</b> de Japón, donde conoce al mitad perro-demonio. <b>Inuyasha</b>. Un monstruo de esa era intenta coger la joya Shikon y ella parte la joya en muchas pienzas dispersadas, ahora, por todo Japón.<br><br><b>Genero:</b> Accion, fantasia, romance<br><br><b>Estudio:</b> Sunrise`, 

			"<h3>Goblin Slayer</h3>En un mundo de fantasia, los aventureros de todas partes se unen al Gremio, a fin de completar contratos de cualquier disponible que incluya la caza de diversos tipos de mounstruos que vagan por la tierra u otro tipo de mision que sea ofrecida.<br><br><b>Genero:</b> Horror, fantasia oscura<br><br><b>Estudio:</b> White fox/Liden Films",

			`<h3>Caballeros del Zodiaco</h3>La serie se centra en un grupo de jóvenes guerreros denominados <b>"caballeros"</b>, cuyo protagonista principal es <b>Seiya</b>. Estos guerreros luchan del lado de la diosa griega Athena, reencarnada en la humana <b>Saori Kido</b> para proteger a la humanidad de las fuerzas del mal que quieren dominar la Tierra.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> Toei Animation`, 

			`<h3>Cowboy Bebop</h3>Un grupo heterogéneo compuesto por un antiguo matón, un expolicía, una estafadora, una niña hacker y un perro viven al día explorando el espacio en busca de recompensas.<br><br><b>Genero:</b> Accion, Space-western<br><br><b>Estudio:</b> Sunrise`, 

			`<h3>Hunter X Hunter 1999</h3>Para alcanzar su sueño de convertirse en un cazador legendario como su padre, un joven debe pasar un riguroso examen y encontrara su padre, que esta desaparecido.<br><br><b>Genero:</b> Accion, aventura<br><br><b>Estudio:</b> Nippo Animation`, 

			`<h3>Full Metal Panic</h3>Narra la historia de <b>Sousuke Sagara</b>, un militar sin sentido común para vivir como un civil que se mete en un instituto de preparatoria como protector de <b>Chidori Kaname</b> dando situación a muchas escenas divertidas.<br><br><b>Genero:</b> Accion, Comedia<br><br><b>Estudio:</b> Gonzo`,

			`<h3>Cyberpunk: Edgerunner</h3>En una distopia plagada de corrupcion e implantes ciberneticos, un chico prodigioso pero temerario trata de convertirse en un mercenario poscrito: un <b>"edgerunner"</b>.<br><br><b>Genero:</b> Accion, cyberpunk, distopia<br><br><b>Estudio:</b> CD Projekt RED Studio Trigger`, 

			`<h3>Kaguya-Sama: Love Is War</h3><b>Kaguya</b> es la hija de un rico conglomerado familiar, y <b>Miyuki</b> es el mejor alumno de la escuela y es bien conocido en toda la prefectura. Aunque se gustan son muy orgullosos como para confesar su amor,
			 	ya que creen que quien lo haga primero estara por debajo de quien reciba la confesion.<br><br><b>Genero:</b> Accion, comedia, romance<br><br><b>Estudio:</b> A-i Pictures`, 

			`<h3>Dr Stone</h3>La historia cuenta las aventuras de <b>Senku</b> y <b>Taiju</b>, dos adolescentes que se ven atrapados en un mundo <b>post-apocaliptico</b> en el que la raza humana se ha convertido en piedra y ellos buscan la manera de revertir 
				la pretificacion en la mayor cantidad de personas posibles, para asi reconstruir la sociedad tal cmo la conocieron.<br><br><b>Genero:</b> Accion, aventura<br><br><b>Estudio:</b> TMS Entertaiment`, 

			
			`<h3>Food Wars!: Shokugeki No Soma</h3><b>Soma Yukihira</b> es un joven que sueña con ser un mejor chef que su padre. Un dia el padre de Soma decide cerrar <b>Yukihira</b>, el restaurante de su padre y el, e irse a trabajar a europa a los mejores restaurantes del mundo.<br><br><b>Genero:</b> Accion, cocina, comedia<br><br><b>Estudio:</b> J.C.Staff`, 
			`<h3>Steins, Gate</h3>Es un anime que ha cautivado a muchos fans del genero de ciencia ficcion. La trama se centra en un grupo de amigos que descubren un artefacto capaz de enviar mensajes al pasado, lo que les lleva a experimentar con el tiempo y enfrentarse a una serie de problemas que pueden influir en el futuro.<br><br><b>Genero:</b> Accion, Suspenso<br><br><b>Estudio:</b> White Fox`, 

			
			`<h3>Mirai Nikki</h3><b>Yukiteru Amano</b> es un estudiante de segundo año de secundaria solitario e introvertido, quien pasa la mayor parte de su tiempo escribiendo un diario en su celular, en el cual plasma todo lo que le acontece a su alrededor. Su unico amigo es un producto de su imaginacion: <b>Deus Ex Machina</b>, el dios del tiempo y del espacio.<br><br><b>Genero:</b> Accion, psicologico<br><br><b>Estudio:</b> Asread`, 

			`<h3>Trigun Stampede</h3>La historia de <b>"Trigun"</b> gira alrededor de Vash Estampida, un pistolero famoso que se ha ganado el sobrenombre de <b>"El Huracan Humano"</b> porque el caos y la destruccion arrasan alla donde el pasa.<br><br><b>Genero:</b> Accion, space western<br><br><b>Estudio:</b> Orange`, 

			
			`<h3>Mashle: Magic and Muscles</h3>La historia de <b>"Mashle"</b> se ambienta en un mundo de fantasia con dragones y todo tipo de criaturas donde cada hijo de vecino tiene habilidades magicas. Tus poderes determinan tu estatus social, y los que no tienen magia lo tienen muy crudo.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> A-I Pictures`, 

			`<h3>Oshi No Ko</h3><b>Goro</b> es un medico que lleva el parto de su idol favorita, <b>Ai Hoshino</b>, que ha tomado un paron en su carrera de <b>Idol</b> para tener a sus gemelas. Antes de que Ai de a luz, Goro muere en un accdente, y es reencarnado en una de las gemelas 
				de Ai, <b>Aquamarine Hoshino</b>, pero con sus recuerdos intactos.<br><br><b>Genero:</b> comedia<br><br><b>Estudio:</b> Doga Kobo`, 

			`<h3>Hell's Paradise</h3>El protagonista es Gabimaruo, un poderoso ninja que es sentenciado a muerte y la unica forma de se exculpado de sus crimenes es encontrando el elixir de la vida, el cual se encuentra en una misteriosa y siniestra isla<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> Mappa`, 

			`<h3>Tengoku Daimakyo</h3><b>Tokio</b> vive con otros niños rodeado por un hermoso muro, pero un dia recibe un mensaje que le pregunta si quiere salir. Mientras tanto, un niño llamado <b>Maru</b> viaja junto con <b>Kiruko</b>, sobreviviendo a duras penas en un mundo en ruinas mientras buscan el "Paraiso".<br><br><b>Genero:</b> Accion, post-apocaliptico, romance<br><br><b>Estudio:</b> Productionn I.G`, 

			`<h3>My Dress-Up Darling</h3><b>Wakana Gojo</b> es un joven aspirante a heredar el trabajo de su familia, el diseño y la confeccion de muñecas para Hinamatsuri, las cuales ademas con su aficcion y pasion, por lo que no ha tenido tiempo de tener amistades o alguna otra relacion social.<br><br><b>Genero:</b> comedia, romance<br><br><b>Estudio:</b> CloverWorks `, 

			`<h3>Jojos Bizarre Adventure</h3>Varias generaciones de la familia Joestar (todos con el mismo sobrenombre) se enfrentan a vilanos sobrenaturales en diferentes epocas.<br><br><b>Genero:</b> Accion, fantasia<br><br><b>Estudio:</b> David production`, 

			`<h3>solo leveling</h3>En un mundo en el que ciertos humanos poseen habilidades magicas, llamados cazadores deben luchar contra monstruos para proteger a la raza humana de una aniquilacion segura, un cazador muy debil  llamado <b>Sung Jinwoo</b> se encuentra en una lucha en la que solo puede tratar de sobrevivir.<br><br><b>Genero:</b> Accion, fantasia oscura<br><br><b>Estudio:</b> A-1 Pictures`, 

			`<h3>Arcane: League And Loafer</h3>Mientras la discordia separa las ciudades gemelas de Piltover y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologias magicas y convicciones opuestas.<br><br><b>Genero:</b> Accion, cyberpunk, distopia<br><br><b>Estudio:</b>Fortiche Production, Riot Games`, 

			`<h3>Blue Lock</h3>Centrada en el genero deportivo, concretamente Futbol, la serie se ambienta tras los resultados de la seleccion de japon despues el mundial 2018.<br><br><b>Genero:</b> Accion, Deportes<br><br><b>Estudio: 8-Bit</b> `, 

			`<h3>Parasyte</h3>Se trata de <b>gusanos</b> (parasitos) que se introducen en los humanos a traves de su ojo o naris, con el objetivo de dominar su cerebro. <b>Shinichi</b> consigue que no entren en su cuerpo, pero infectaran su mano, aqui comienza su lucha por la supervivencia en un mundo ostil.<br><br><b>Genero:</b> Horror, suspenso, psicologico<br><br><b>Estudio:</b> Madhouse`, 

			`<h3>Edens Zero</h3>A bordo de la nave <b>Eden Zero</b>, un niño solitario capaz de controlar la gravedad emprende una aventura para encontrar la mitica diosa cosmica conocida como <b>Madre</b>.<br><br><b>Genero:</b> Accion<br><br><b>Estudio:</b> J.C.Staff`]













//contenedores de las imagenes y los parrafosn de las ventanas ocultas:
const image = document.querySelector(".img-hidden-1")
const parrafos = document.querySelector(".parrafos-1")
const image2 = document.querySelector(".img-hidden-2")
const parrafos2 = document.querySelector(".parrafos-2")
const image3 = document.querySelector(".img-hidden-3")
const parrafos3 = document.querySelector(".parrafos-3")
const image4 = document.querySelector(".img-hidden-4")
const parrafos4 = document.querySelector(".parrafos-4")
const image5 = document.querySelector(".img-hidden-5")
const parrafos5 = document.querySelector(".parrafos-5")
const image6 = document.querySelector(".img-hidden-6")
const parrafos6 = document.querySelector(".parrafos-6")
const image7 = document.querySelector(".img-hidden-7")
const parrafos7 = document.querySelector(".parrafos-7")
const image8 = document.querySelector(".img-hidden-8")
const parrafos8 = document.querySelector(".parrafos-8")
const image9 = document.querySelector(".img-hidden-9")
const parrafos9 = document.querySelector(".parrafos-9")
const image10 = document.querySelector(".img-hidden-10")
const parrafos10 = document.querySelector(".parrafos-10")
const image11 = document.querySelector(".img-hidden-11")
const parrafos11 = document.querySelector(".parrafos-11")
const image12 = document.querySelector(".img-hidden-12")
const parrafos12 = document.querySelector(".parrafos-12")
const image13 = document.querySelector(".img-hidden-13")
const parrafos13 = document.querySelector(".parrafos-13")
const image14 = document.querySelector(".img-hidden-14")
const parrafos14 = document.querySelector(".parrafos-14")
const image15 = document.querySelector(".img-hidden-15")
const parrafos15 = document.querySelector(".parrafos-15")

function presionar1(){
	item.classList.add("item-animacion")
		for (let i = 0; i < 61; i++) {
			if (srcPoster1.alt == alt[i]) {
			image.setAttribute("src", poster[i])
			parrafos.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana1(){
	item.classList.remove("item-animacion")
}


function presionar2(){
	item2.classList.add("item-animacion-2")
		for (let i = 0; i < 61; i++) {
			if (srcPoster2.alt == alt[i]) {
			image2.setAttribute("src", poster[i])
			parrafos2.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana2(){
		item2.classList.remove("item-animacion-2")
}


function presionar3(){
	item3.classList.add("item-animacion-3")
		for (let i = 0; i < 61; i++) {
			if (srcPoster3.alt == alt[i]) {
			image3.setAttribute("src", poster[i])
			parrafos3.innerHTML = parrafo[i]
		}
	}
}
function ocultarVentana3(){
	item3.classList.remove("item-animacion-3")
		
}

function presionar4(){
	item4.classList.add("item-animacion-4")
		for (let i = 0; i < 61; i++) {
			if (srcPoster4.alt == alt[i]) {
			image4.setAttribute("src", poster[i])
			parrafos4.innerHTML = parrafo[i]
		}
	}
}
function ocultarVentana4(){
	item4.classList.remove("item-animacion-4")
		
}


function presionar5(){
	item5.classList.add("item-animacion-5")
		for (let i = 0; i < 61; i++) {
			if (srcPoster5.alt == alt[i]) {
			image5.setAttribute("src", poster[i])
			parrafos5.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana5(){
		item5.classList.remove("item-animacion-5")
}



function presionar6(){
	item6.classList.add("item-animacion-6")
		for (let i = 0; i < 61; i++) {
			if (srcPoster6.alt == alt[i]) {
			image6.setAttribute("src", poster[i])
			parrafos6.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana6(){
		item6.classList.remove("item-animacion-6")
}

function presionar7(){
	item7.classList.add("item-animacion-7")
		for (let i = 0; i < 61; i++) {
			if (srcPoster7.alt == alt[i]) {
			image7.setAttribute("src", poster[i])
			parrafos7.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana7(){
		item7.classList.remove("item-animacion-7")
}

function presionar8(){
	item8.classList.add("item-animacion-8")
		for (let i = 0; i < 61; i++) {
			if (srcPoster8.alt == alt[i]) {
			image8.setAttribute("src", poster[i])
			parrafos8.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana8(){
		item8.classList.remove("item-animacion-8")
}


function presionar9(){
	item9.classList.add("item-animacion-9")
		for (let i = 0; i < 61; i++) {
			if (srcPoster9.alt == alt[i]) {
			image9.setAttribute("src", poster[i])
			parrafos9.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana9(){
		item9.classList.remove("item-animacion-9")
}


function presionar10(){
	item10.classList.add("item-animacion-10")
		for (let i = 0; i < 61; i++) {
			if (srcPoster10.alt == alt[i]) {
			image10.setAttribute("src", poster[i])
			parrafos10.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana10(){
		item10.classList.remove("item-animacion-10")
}

function presionar11(){
	item11.classList.add("item-animacion-11")
		for (let i = 0; i < 61; i++) {
			if (srcPoster11.alt == alt[i]) {
			image11.setAttribute("src", poster[i])
			parrafos11.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana11(){
		item11.classList.remove("item-animacion-11")
}

function presionar12(){
	item12.classList.add("item-animacion-12")
		for (let i = 0; i < 61; i++) {
			if (srcPoster12.alt == alt[i]) {
			image12.setAttribute("src", poster[i])
			parrafos12.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana12(){
		item12.classList.remove("item-animacion-12")
}

function presionar13(){
	item13.classList.add("item-animacion-13")
		for (let i = 0; i < 61; i++) {
			if (srcPoster13.alt == alt[i]) {
			image13.setAttribute("src", poster[i])
			parrafos13.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana13(){
		item13.classList.remove("item-animacion-13")
}

function presionar14(){
	item14.classList.add("item-animacion-14")
		for (let i = 0; i < 61; i++) {
			if (srcPoster14.alt == alt[i]) {
			image14.setAttribute("src", poster[i])
			parrafos14.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana14(){
		item14.classList.remove("item-animacion-14")
}

function presionar15(){
	item15.classList.add("item-animacion-15")
		for (let i = 0; i < 61; i++) {
			if (srcPoster15.alt == alt[i]) {
			image15.setAttribute("src", poster[i])
			parrafos15.innerHTML = parrafo[i]
		}
	}
}

function ocultarVentana15(){
		item15.classList.remove("item-animacion-15")
}


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

for (let i = 0; i < 45; i++) {
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
	else if (input.value.toLowerCase() == "spy family") {
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
	else if (input.value.toLowerCase() == "fullmetal alchemist" || input.value.toLowerCase() == "fullmetal alchemist: brotherhood") {
		linkInput.setAttribute("href", enlace[11])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "fire force") {
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
	else if (input.value.toLowerCase() == "record of ragnarok") {
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
	else if (input.value.toLowerCase() == "caballeros del zodiaco" || input.value.toLowerCase() == "saint seya") {
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
	else if (input.value.toLowerCase() == "hells paradise" || input.value.toLowerCase() == "hell's paradise") {
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
	else if (input.value.toLowerCase() == "jojos bizarre adventure") {
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
	else if (input.value.toLowerCase() == "parasyte") {
		linkInput.setAttribute("href", enlace[43])
		linkInput.click()
	}
	else if (input.value.toLowerCase() == "edens zero") {
		linkInput.setAttribute("href", enlace[44])
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

for (let i = 0; i < 45; i++) {
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
	else if (inputResponsive.value.toLowerCase() == "fire force") {
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
	else if (inputResponsive.value.toLowerCase() == "record of ragnarok") {
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
	else if (inputResponsive.value.toLowerCase() == "caballeros del zodiaco" || inputResponsive.value.toLowerCase() == "saint seya") {
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
	else if (inputResponsive.value.toLowerCase() == "hells paradise" || inputResponsive.value.toLowerCase() == "hell's paradise") {
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
	else if (inputResponsive.value.toLowerCase() == "jojos bizarre adventure") {
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
	else if (inputResponsive.value.toLowerCase() == "parasyte") {
		linkInput.setAttribute("href", enlace[43])
		linkInput.click()
	}
	else if (inputResponsive.value.toLowerCase() == "edens zero") {
		linkInput.setAttribute("href", enlace[44])
		linkInput.click()
	}
	
	else{
		document.querySelector(".href-error").click()
	}
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

const tituloItem = document.createElement("H2")
const informacionItem = document.createElement("P")
const pieDelTitulo1 = document.createElement("b")
const pieDelTitulo2 = document.createElement("b")
const pieDelTitulo3 = document.createElement("b")

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
	imagen1.src = "imagenes/chainsaw man img 4.jpeg"
	contenedorImg.appendChild(imagen1)
	tituloItem.innerHTML = "Chainsaw Man"
	titulo.appendChild(tituloItem)
	informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
	informacion.appendChild(informacionItem)
	pieDelTitulo1.innerHTML = "8/10"
	pieDelTituloContainer.appendChild(pieDelTitulo1)
	pieDelTitulo2.innerHTML = "12 cap 2022"
	pieDelTituloContainer.appendChild(pieDelTitulo2)
	pieDelTitulo3.innerHTML = "720p"
	pieDelTituloContainer.appendChild(pieDelTitulo3)

	punto1.classList.add("punto-1-a")


}

function avanzar(){

	if (adelanteA == true) {
		imagen2.src = "imagenes/attack on titan img 13.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-1")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Attack On Titan: The Final Chapters"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b><i>Gracias por todo Attack On Titan...</i></b>`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "91 Ep 2013"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		adelanteA = false
		adelanteB = true


		
	}

	else if (adelanteB == true) {
		imagen1.src = "imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("desplazamiento-2")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b>Gojo</b> y sus compañeros <b>Geto</b> y <b>Leiri</b> reciben el encargo de escoltar a una joven que se convertira en la siguiente recipiente de <b>Plasma Estelar</b>, aunque la amenaza del asesino pone en peligro la mision.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		adelanteB = false
		adelanteC = true
		
	}

	else if (adelanteC == true) {
		imagen2.src = "imagenes/kimetsu no yaiba img 19.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("desplazamiento-3")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		
		tituloItem.innerHTML = "Kimetsu no Yaiba: Temporada 3"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Sigue las aventuas de Tanjiro Kamado, un adolescente cuya familia fue cruelmente asesinada por un Demonio el cual convirtio a su hermana Nezuko en una de estas criaturas, obligandolo a emprender un viaje para cazar a estos seres..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "54 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
		adelanteC = false
		adelanteD = true		
	}
	else if (adelanteD == true) {
		imagen1.src = "imagenes/chainsaw man img 4.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.remove("retrocesoa")
		contenedorImg.classList.remove("retrocesob")
		contenedorImg.classList.remove("retrocesoc")
		contenedorImg.classList.remove("retrocesod")
		contenedorImg.classList.remove("posicion-de-imagen")
		contenedorImg.classList.add("desplazamiento-4")
		
		tituloItem.innerHTML = "Chainsaw Man"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "12 cap 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)

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
	intervaloAvanzar = setInterval(avanzar, 9500)
}

tiempoRetardo()


function atrasar(){

	if (adelanteD == true) {
		imagen1.src = "imagenes/jujutsu kaisen.png"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesod")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Jujutsu Kaisen: Temporada 2"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b>Gojo</b> y sus compañeros <b>Geto</b> y <b>Leiri</b> reciben el encargo de escoltar a una joven que se convertira en la siguiente recipiente de <b>Plasma Estelar</b>, aunque la amenaza del asesino pone en peligro la mision.`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "37 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto4.classList.replace("punto-4-a", "punto-4-e")
		punto3.classList.remove("punto-3-e")
		punto3.classList.add("punto-3-a")
		
		adelanteD = false
		adelanteC = true

		
		
	}

	else if (adelanteC == true) {
		imagen2.src = "imagenes/attack on titan img 13.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("retrocesoc")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Attack On Titan: The Final Chapters"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = `<b><i>Gracias por todo Attack On Titan...</i></b>`
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "91 Ep 2013"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto3.classList.replace("punto-3-a", "punto-3-e")
		punto2.classList.remove("punto-2-e")
		punto2.classList.add("punto-2-a")
		adelanteC = false
		adelanteB = true
	}

	else if (adelanteB == true ) {
		imagen1.src = "imagenes/chainsaw man img 4.jpeg"
		contenedorImg.appendChild(imagen1)
		contenedorImg.classList.add("retrocesob")
		contenedorImg.classList.add("posicion-de-imagen")
		
		tituloItem.innerHTML = "Chainsaw Man"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Denji es un joven atrapado en la probreza extrema. que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, su fiel compañero canino, hermano del alma y tambien conocido como el demonio motosierra..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "8/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "12 cap 2022"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		punto2.classList.replace("punto-2-a", "punto-2-e")
		punto1.classList.replace("punto-1-e", "punto-1-a")
		adelanteB = false
		adelanteA = true
	}
	else if (adelanteA == true) {
		
		imagen2.src = "imagenes/kimetsu no yaiba img 19.jpg"
		contenedorImg.appendChild(imagen2)
		contenedorImg.classList.add("posicion-de-imagen")
		contenedorImg.classList.add("retrocesoa")
		tituloItem.innerHTML = "Kimetsu no Yaiba: Temporada 3"
		titulo.appendChild(tituloItem)
		informacionItem.innerHTML = "Sigue las aventuas de Tanjiro Kamado, un adolescente cuya familia fue cruelmente asesinada por un Demonio el cual convirtio a su hermana Nezuko en una de estas criaturas, obligandolo a emprender un viaje para cazar a estos seres..."
		informacion.appendChild(informacionItem)
		pieDelTitulo1.innerHTML = "9/10"
		pieDelTituloContainer.appendChild(pieDelTitulo1)
		pieDelTitulo2.innerHTML = "54 cap 2019"
		pieDelTituloContainer.appendChild(pieDelTitulo2)
		pieDelTitulo3.innerHTML = "720p"
		pieDelTituloContainer.appendChild(pieDelTitulo3)
		adelanteA = false
		adelanteD = true
		punto1.classList.replace("punto-1-a", "punto-1-e")
		punto4.classList.remove("punto-4-e")
		punto4.classList.add("punto-4-a")
	}
	
}



//funcion de evento para ver la serie con el boton ver serie:
const botonVerSerie = document.querySelector(".ver-pelicula")

botonVerSerie.addEventListener("click", verSerie)

function verSerie(){
	if (adelanteA == true) {
		document.querySelector('.chainsaw-link').click()
	}

	else if (adelanteB == true) {
		document.querySelector('.attack-link').click()
	}

	else if (adelanteC == true) {
		document.querySelector('.jujutsu-link').click()
	}

	else if (adelanteD == true) {
		document.querySelector('.kimetsu-link').click()
	}


}


//funcion de ventanas ocultas de la barra de navegacion:
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




//funcion de eventos de botones de las ventanas ocultas de la barra de navegacion:



//funcion para aparecer icono en el poster del grid y para oscurecer el poster con mouseover:
const container7rid = document.querySelector(".grid-container")

container1.addEventListener("mouseover", () =>{
	container1.classList.add("opacar")
})
container2.addEventListener("mouseover", () =>{
	container2.classList.add("opacar")	
})
container3.addEventListener("mouseover", () =>{
	container3.classList.add("opacar")	
})
container4.addEventListener("mouseover", () =>{
	container4.classList.add("opacar")
})
container5.addEventListener("mouseover", () =>{
	container5.classList.add("opacar")
})
container6.addEventListener("mouseover", () =>{
	container6.classList.add("opacar")
})
container7.addEventListener("mouseover", () =>{
	container7.classList.add("opacar")
})
container8.addEventListener("mouseover", () =>{
	container8.classList.add("opacar")
})
container9.addEventListener("mouseover", () =>{
	container9.classList.add("opacar")
})
container10.addEventListener("mouseover", () =>{
	container10.classList.add("opacar")
})
container11.addEventListener("mouseover", () =>{
	container11.classList.add("opacar")
})
container12.addEventListener("mouseover", () =>{
	container12.classList.add("opacar")
})
container13.addEventListener("mouseover", () =>{
	container13.classList.add("opacar")
})
container14.addEventListener("mouseover", () =>{
	container14.classList.add("opacar")
})
container15.addEventListener("mouseover", () =>{
	container15.classList.add("opacar")
})


container1.addEventListener("mouseleave", () =>{
	container1.classList.remove("opacar")
})
container2.addEventListener("mouseleave", () =>{
	container2.classList.remove("opacar")	
})
container3.addEventListener("mouseleave", () =>{
	container3.classList.remove("opacar")	
})
container4.addEventListener("mouseleave", () =>{
	container4.classList.remove("opacar")
})
container5.addEventListener("mouseleave", () =>{
	container5.classList.remove("opacar")
})
container6.addEventListener("mouseleave", () =>{
	container6.classList.remove("opacar")
})
container7.addEventListener("mouseleave", () =>{
	container7.classList.remove("opacar")
})
container8.addEventListener("mouseleave", () =>{
	container8.classList.remove("opacar")
})
container9.addEventListener("mouseleave", () =>{
	container9.classList.remove("opacar")
})
container10.addEventListener("mouseleave", () =>{
	container10.classList.remove("opacar")
})
container11.addEventListener("mouseleave", () =>{
	container11.classList.remove("opacar")
})
container12.addEventListener("mouseleave", () =>{
	container12.classList.remove("opacar")
})
container13.addEventListener("mouseleave", () =>{
	container13.classList.remove("opacar")
})
container14.addEventListener("mouseleave", () =>{
	container14.classList.remove("opacar")
})
container15.addEventListener("mouseleave", () =>{
	container15.classList.remove("opacar")
})






//funciones para cambiar los poster, los href y los nombres:
const botonUltimos = document.querySelector(".ultimos")
const botonTendencias = document.querySelector(".tendencia")
const botonEstrenos = document.querySelector(".estrenos")
const contenedorBotones = document.querySelector(".botones-de-entrada")
const contenedorPoster1 = document.querySelector(".img-poster-1")
const contenedorPoster2 = document.querySelector(".img-poster-2")
const contenedorPoster3 = document.querySelector(".img-poster-3")
const contenedorPoster4 = document.querySelector(".img-poster-4")
const contenedorPoster5 = document.querySelector(".img-poster-5")
const contenedorPoster6 = document.querySelector(".img-poster-6")
const contenedorPoster7 = document.querySelector(".img-poster-7")
const contenedorPoster8 = document.querySelector(".img-poster-8")
const contenedorPoster9 = document.querySelector(".img-poster-9")
const contenedorPoster10 = document.querySelector(".img-poster-10")
const contenedorPoster11 = document.querySelector(".img-poster-11")
const contenedorPoster12 = document.querySelector(".img-poster-12")
const contenedorPoster13 = document.querySelector(".img-poster-13")
const contenedorPoster14 = document.querySelector(".img-poster-14")
const contenedorPoster15 = document.querySelector(".img-poster-15")

//variables para cambiar el href:
const href1 = document.querySelector(".href-1")
const href2 = document.querySelector(".href-2")
const href3 = document.querySelector(".href-3")
const href4 = document.querySelector(".href-4")
const href5 = document.querySelector(".href-5")
const href6 = document.querySelector(".href-6")
const href7 = document.querySelector(".href-7")
const href8 = document.querySelector(".href-8")
const href9 = document.querySelector(".href-9")
const href10 = document.querySelector(".href-10")
const href11 = document.querySelector(".href-11")
const href12 = document.querySelector(".href-12")
const href13 = document.querySelector(".href-13")
const href14 = document.querySelector(".href-14")
const href15 = document.querySelector(".href-15")

//variables para cambiar el src:
const srcPoster1 = document.querySelector(".src-poster-1")
const srcPoster2 = document.querySelector(".src-poster-2")
const srcPoster3 = document.querySelector(".src-poster-3")
const srcPoster4 = document.querySelector(".src-poster-4")
const srcPoster5 = document.querySelector(".src-poster-5")
const srcPoster6 = document.querySelector(".src-poster-6")
const srcPoster7 = document.querySelector(".src-poster-7")
const srcPoster8 = document.querySelector(".src-poster-8")
const srcPoster9 = document.querySelector(".src-poster-9")

const srcPoster10 = document.querySelector(".src-poster-10")
const srcPoster11 = document.querySelector(".src-poster-11")
const srcPoster12 = document.querySelector(".src-poster-12")
const srcPoster13 = document.querySelector(".src-poster-13")
const srcPoster14 = document.querySelector(".src-poster-14")
const srcPoster15 = document.querySelector(".src-poster-15")

//src de todos los poster:
let poster = ["poster/chainsaw man poster.jpg", 
"poster/death note 2.jpg", 
"poster/atack on titan 8.jpg", 
"poster/spy family 3.jpg",
"poster/naruto.jpg", 
"poster/jujutsu kisen.jpg", 
"poster/kimetsu no yaiba 3.jpeg", 
"poster/one punche man 2.jpg", 
"poster/tokyo ghoul 1.webp", 
"poster/boku no hero 6.jpg", 
"poster/mod psycho 2.jpg", 
"poster/full methal alchemist.jpg", 
"poster/fire force 2.jpg", 
"poster/tokyo revengers 1.jpg", 
"poster/high school of the dead 1.jpg", 
"poster/saga de cell.jpg",
"poster/saga del torneo del poder.jpg", 
"poster/one piece 3.jpe", 
"poster/record of ragnarok 1.webp",
"poster/vinland saga 2.png",  
"poster/nanatsu no tazai 1.webp",
"poster/inuyasha 1.webp", 
"poster/goblin slayer 2.jpg", 
"poster/caballeros del zodiaco 1.jpg", 
"poster/cowboy bebop.jpg", 
"poster/hunter hunter 2011.jpg", 
"poster/full methal panic 1.webp", 
"poster/cyberpunk 1.jpg", 
"poster/kaguya sama 1.jpe", 
"poster/dr stone 3.jpg",
"poster/food wars.png", 
"poster/steins gate 1.jpg", 
"poster/mirai nikki 1.jpg", 
"poster/TrigunStampedeKeyvisual.jpg",
"poster/mashle 2.jpeg",
"poster/oshi no ko 1.png", 
"poster/hells pasradise.jpg", 
"poster/Visual-2.jpg",
"poster/sono bisque 2.jpg", 
"poster/jojos 3.jpg", 
"poster/solo leveling 1.jpg", 
"poster/arcane 1.jpg", 
"poster/blue lock 1.jpg",
"poster/parasyte 1.jpg", 
"poster/edens zero 1.jpg"]


//enlaces de cada uno de los index de cada serie:

let enlace = ["animes/chainsaw man/chainsaw.html",
"animes/Death Note/death note.html",
"animes/Shingeki No Kyojin/shingeki no kyojin.html",
"animes/spy x family/spy x family.html",
"animes/naruto/naruto.html",
"animes/jujutsu kaisen/jujutsu kaisen.html",
"animes/kimetsu no yaiba/kimetsu no yaiba.html",
"animes/one punch man/one punch man.html",
"animes/tokyo ghoul/tokyo ghoul.html",
"animes/my hero academia/my hero academia.html",
"animes/mob psycho 100/mob psycho.html",
"animes/full metal alchemist/full metal alchemist.html",
"animes/fire force/fire force.html",
"animes/tokyo revengers/tokyo revengers.html",
"animes/highschool of the dead/hsotd.html",
"animes/dragon ball z/dragon ball z.html",
"animes/dragon ball super/dragon ball super.html",
"animes/one piece/one piece.html",
"animes/record of ragnarok/record of ragnarok.html",
"animes/vinland saga/vinland saga.html",
"animes/nanatsu no tazai/nanatsu no tazai.html",
"animes/inuyasha/inuyasha.html",
"animes/goblin slayer/goblin slayer.html",
"animes/caballeros del zodiaco/caballeros del zodiaco.html",
"animes/cowboy bebop/cowboy bebop.html",
"animes/hunter hunter 1999/hunter hunter 1999.html",
"animes/full metal panic/full metal panic.html",
"animes/cyberpunk/cyberpunk.html",
"animes/kaguya sama/kaguya sama.html",
"animes/dr stone/dr stone.html",
"animes/food wars/food wars.html",
"animes/steins gate/steins gate.html",
"animes/mirai nikki/mirai nikki.html",
"animes/trigun stampede/trigun stampede.html",
"animes/mashle/mashle.html",
"animes/oshi no ko/oshi no ko.html",
"animes/hells paradise/hells paradise.html",
"animes/tengoku daimakyo/tengoku daimakyo.html",
"animes/sono bisque/sono bisque.html",
"animes/jojos bizarre adventure/jo jos.html",
"animes/solo leveling/solo leveling.html",
"animes/arcane/arcane.html",
"animes/blue lock/blue lock.html",
"animes/parasyte/parasyte.html",
"animes/edens zero/edens zero.html"]



    

//texto de los enlaces de las series:

let textEnlace = ["Chainsaw Man",
"Death Note",
"Attack On Titan",
"Spy X Family",
"Naruto",
"Jujutsu Kaisen",
"Kimetsu No Yaiba",
"One Punch Man",
"Tokyo Ghoul",
"My Hero Academia",
"Mob Psycho 100",
"Fullmetal Alchemist",
"Fire Force",
"Tokyo Revengers",
"Highschool Of The Dead",
"Dragon Ball Z",
"Dragon Ball Super",
"One Piece",
"Record of Ragnarok",
"Vinland Saga",
"Nanatsu No Tazai",
"InuYasha",
"Goblin Slayer",
"Caballeros del Zodiaco",
"Cowboy Bebop",
"Hunter X Hunter 1999",
"Full Metal Panic",
"Cyberpunk: Edgerunners",
"Kaguya-Sama: Love Is War",
"Dr Stone",
"food wars!: Shokugeki No Soma",
"Steins, Gate",
"Mirai Nikki",
"Trigun Stampede",
"Mashle",
"Oshi No Ko",
"Hell's Paradise",
"Tengoku Daimakyo",
"Sono Bisque Doll Wo Koi Wo Suru",
"Jojos Bizarre Adeventure",
"solo leveling",
"Arcane: League Of Legends",
"Blue Lock",
"Parasyte",
"Eden's Zero"]

 




botonUltimos.addEventListener("click", ultimos)
botonTendencias.addEventListener("click", tendencias)
botonEstrenos.addEventListener("click", estrenos)

const hrefSiguiente = document.querySelector(".href-siguiente")
const contenedorSiguiente = document.querySelector(".container-siguiente")

const botonSiguiente2 = document.querySelector(".siguiente-2")
const botonSiguiente3 = document.querySelector(".siguiente-3")



botonSiguiente2.addEventListener("click", next2)
botonSiguiente3.addEventListener("click", next3)


//funciones para el boton flecha:
function next2(){
	hrefSiguiente.setAttribute("href", "secciones/segunda/segunda.html")
	hrefSiguiente.click()
}

function next3(){
	hrefSiguiente.setAttribute("href", "secciones/tercera/tercera.html")
	hrefSiguiente.click()
	
}





//funcion para los ultimos animes, se ejecuta por defecto
function ultimos(){
		srcPoster1.setAttribute("src", poster[0])
		srcPoster1.setAttribute("alt", alt[0])
		srcPoster1.setAttribute("title", title[0])
		href1.setAttribute("href", enlace[0])
		href1.textContent = textEnlace[0]
		srcPoster2.setAttribute("src", poster[40])
		srcPoster2.setAttribute("alt", alt[40])
		srcPoster2.setAttribute("title", title[40])
		href2.setAttribute("href", enlace[40])
		href2.textContent = textEnlace[40]
		srcPoster3.setAttribute("src", poster[2])
		srcPoster3.setAttribute("alt", alt[2])
		srcPoster3.setAttribute("title", title[2])
		href3.setAttribute("href", enlace[2])
		href3.textContent = textEnlace[2]
		srcPoster4.setAttribute("src", poster[3])
		srcPoster4.setAttribute("alt", alt[3])
		srcPoster4.setAttribute("title", title[3])
		href4.setAttribute("href", enlace[3])
		href4.textContent = textEnlace[3]
		srcPoster5.setAttribute("src", poster[4])
		srcPoster5.setAttribute("alt", alt[4])
		srcPoster5.setAttribute("title", title[4])
		href5.setAttribute("href", enlace[4])
		href5.textContent = textEnlace[4]
		srcPoster6.setAttribute("src", poster[5])
		srcPoster6.setAttribute("alt", alt[5])
		srcPoster6.setAttribute("title", title[5])
		href6.setAttribute("href", enlace[5])
		href6.textContent = textEnlace[5]
		srcPoster7.setAttribute("src", poster[6])
		srcPoster7.setAttribute("alt", alt[6])
		srcPoster7.setAttribute("title", title[6])
		href7.setAttribute("href", enlace[6])
		href7.textContent = textEnlace[6]
		srcPoster8.setAttribute("src", poster[7])
		srcPoster8.setAttribute("alt", alt[7])
		srcPoster8.setAttribute("title", title[7])
		href8.setAttribute("href", enlace[7])
		href8.textContent = textEnlace[7]
		srcPoster9.setAttribute("src", poster[8])
		srcPoster9.setAttribute("alt", alt[8])
		srcPoster9.setAttribute("title", title[8])
		href9.setAttribute("href", enlace[8])
		href9.textContent = textEnlace[8]
		srcPoster10.setAttribute("src", poster[9])
		srcPoster10.setAttribute("alt", alt[9])
		srcPoster10.setAttribute("title", title[9])
		href10.setAttribute("href", enlace[9])
		href10.textContent = textEnlace[9]
		srcPoster11.setAttribute("src", poster[10])
		srcPoster11.setAttribute("alt", alt[10])
		srcPoster11.setAttribute("title", title[10])
		href11.setAttribute("href", enlace[10])
		href11.textContent = textEnlace[10]
		srcPoster12.setAttribute("src", poster[11])
		srcPoster12.setAttribute("alt", alt[11])
		srcPoster12.setAttribute("title", title[11])
		href12.setAttribute("href", enlace[11])
		href12.textContent = textEnlace[11]
		srcPoster13.setAttribute("src", poster[1])
		srcPoster13.setAttribute("alt", alt[1])
		srcPoster13.setAttribute("title", title[1])
		href13.setAttribute("href", enlace[1])
		href13.textContent = textEnlace[1]
		srcPoster14.setAttribute("src", poster[13])
		srcPoster14.setAttribute("alt", alt[13])
		srcPoster14.setAttribute("title", title[13])
		href14.setAttribute("href", enlace[13])
		href14.textContent = textEnlace[13]
		srcPoster15.setAttribute("src", poster[14])
		srcPoster15.setAttribute("alt", alt[14])
		srcPoster15.setAttribute("title", title[14])
		href15.setAttribute("href", enlace[14])
		href15.textContent = textEnlace[14]


	}

	

ultimos()



//funcion para las tendencias del anime(cambia los poster):
function tendencias(){
	hrefSiguiente.setAttribute("href", "secciones/destacados/destacados.html")
	hrefSiguiente.click()
}

//funcion para los estrenos del anime(cambia los poster):
function estrenos(){
	hrefSiguiente.setAttribute("href", "secciones/estrenos/estrenos.html")
	hrefSiguiente.click()
}

	



const contenedorItemAside1 = document.querySelector(".item-aside-1")

const contenedorItemAside2 = document.querySelector(".item-aside-2")
const contenedorItemAside3 = document.querySelector(".item-aside-3")
const contenedorItemAside4 = document.querySelector(".item-aside-4")
const contenedorItemAside5 = document.querySelector(".item-aside-5")
const contenedorItemAside6 = document.querySelector(".item-aside-6")
const contenedorItemAside7 = document.querySelector(".item-aside-7")
const contenedorItemAside8 = document.querySelector(".item-aside-8")
const contenedorItemAside9 = document.querySelector(".item-aside-9")
const contenedorItemAside10 = document.querySelector(".item-aside-10")
const contenedorItemAside11 = document.querySelector(".item-aside-11")
const contenedorItemAside12 = document.querySelector(".item-aside-12")
const contenedorItemAside13 = document.querySelector(".item-aside-13")




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

contenedorItemAside10.addEventListener("mouseover",() =>{
	contenedorItemAside10.classList.add("sub-item-aside")
	
}) 
contenedorItemAside10.addEventListener("mouseleave",() =>{
	contenedorItemAside10.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside11.addEventListener("mouseover",() =>{
	contenedorItemAside11.classList.add("sub-item-aside")
	
}) 
contenedorItemAside11.addEventListener("mouseleave",() =>{
	contenedorItemAside11.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside12.addEventListener("mouseover",() =>{
	contenedorItemAside12.classList.add("sub-item-aside")
	
}) 
contenedorItemAside12.addEventListener("mouseleave",() =>{
	contenedorItemAside12.classList.remove("sub-item-aside")
	
}) 

contenedorItemAside13.addEventListener("mouseover",() =>{
	contenedorItemAside13.classList.add("sub-item-aside")
	
}) 
contenedorItemAside13.addEventListener("mouseleave",() =>{
	contenedorItemAside13.classList.remove("sub-item-aside")
	
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
contenedorItemAside10.addEventListener("click",() =>{
	document.querySelector(".href-aside-10").click()
	
}) 
contenedorItemAside11.addEventListener("click",() =>{
	document.querySelector(".href-aside-11").click()
	
}) 
contenedorItemAside12.addEventListener("click",() =>{
	document.querySelector(".href-aside-12").click()
	
}) 
contenedorItemAside13.addEventListener("click",() =>{
	document.querySelector(".href-aside-13").click()
	
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
const contenedorAsideResponsive10 = document.querySelector(".serie-aside-responsive-10")
const contenedorAsideResponsive11 = document.querySelector(".serie-aside-responsive-11")
const contenedorAsideResponsive12 = document.querySelector(".serie-aside-responsive-12")
const contenedorAsideResponsive13 = document.querySelector(".serie-aside-responsive-13")


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

contenedorAsideResponsive10.addEventListener("click", ()=>{
	document.querySelector(".href-aside-10").click()
	contenedorAsideResponsive10.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive11.addEventListener("click", ()=>{
	document.querySelector(".href-aside-11").click()
	contenedorAsideResponsive11.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive12.addEventListener("click", ()=>{
	document.querySelector(".href-aside-12").click()
	contenedorAsideResponsive12.classList.add("agrandar-aside-responsive")
})

contenedorAsideResponsive13.addEventListener("click", ()=>{
	document.querySelector(".href-aside-13").click()
	contenedorAsideResponsive13.classList.add("agrandar-aside-responsive")
})























