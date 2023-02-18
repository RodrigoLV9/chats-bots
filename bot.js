const input=document.getElementById("input");
const contenedor=document.getElementById("container-text");


function mensaje(e){
    const div=document.createElement("div")
    div.classList.add("comment")
    let miComentario=e.target.value
    div.textContent=miComentario
    input.value=null;
    contenedor.appendChild(div)
    let texto=div.textContent.toLowerCase();
    let opciones={
        "hola":"Hola un gusto conocerte",
        "chau":"nos vemos ha sido un gusto haberte conocido",
        "quien eres?":"Yo soy el bot numero 1 :)",
        "como estas?":"En excelente estado",
        "de donde eres?":"Del pais Keteimporta",
        "ah sos re troll":"Si weon",
        "q edad tienes":"Mas q tu seguro",
        "F":"en el chat",
        "contame algo de ti?":"Soy el bot numero 1 es decir el primer bot creado por Rodrigo",
        "que opinas del bot-2?":"Es una copia mia sin mas. Se dice que debe de tener mejoras pero para mi es pura payasada, es solo un segundon XD",
        "estas ahi?":"Si por supuesto, siempre estare aqui...",
        "que":"so",
        "jijijija":"de ponerla ni hablar no?",
        "imbecil":"filho da puta",
        "aguante el bot-2":"Comeme los huevos"
    }
    let opciones2={
        1:"Sabias que la montaña mas grande de la Tierra es el monte Everest",
        2:"Dato: El tercer planeta del sistema solar es el planeta Tierra",
        3:"Dato: Los tripulantes del Apolo 11 marcaron un hito en la historia de la humanidad al pisar la Luna por primera vez el 16 de julio de 1969.",
        4:"Un lustro son 5 años",
        5:"Un bebe al nacer tiene alrededor de 300 huesos al crecer algunas huesos se fusionan y finalmente terminan siendo 206 los huesos de un adulto",
        6:"El femur es el hueso mas largo.",
        7:"Cristobal Colon llego en 1492 a America",
        8:"Dato: el rio mas largo del mundo es el rio Amazonas",
        9:"Sabias que la estrella mas cercana a nuestro sistema Solar es la estrella: Proxima Centauri y para llegar hasta esa estrella tardarias 4.2 años yendo a la velocidad de la luz"
    }
    setTimeout(()=>{
        const div1=document.createElement("div")
        contenedor.appendChild(div1)
        div1.classList.add("comment-bot")
        div1.textContent=opciones[texto]
        if(opciones[texto]==undefined){
            let random=Math.round(Math.random()*10)
            div1.textContent=opciones2[random]
        }
    },2500)
        
}

input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter" && input.value!=""){
        mensaje(e)
    }
    
    
})

