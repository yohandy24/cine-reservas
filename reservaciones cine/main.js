;
let carrusel = document.querySelector(".carrusel")
let peliculas_box = document.querySelector(".peliculas_box")


let peliculas = [
  {
    nombre: "Deriva",
    imagen: "./src/peliculas/deriva.PNG",
    precio: 450,
    emisiones: {
      1: ["Lunes","20:00 PM","sala 3",[0,1,0,0,0,0,1,0,1,1,0]],
      2: ["Miércoles","20:00 PM","sala 3",[1,1,0,0,1,1,1,0,1,1,1,1]]
    }

  },


  {
    nombre: "John Wick 4",
    imagen: "./src/peliculas/john3.PNG",
    precio: 600,
    emisiones: {
      1: ["Sábado","22:30 PM","sala 3",[0,1,1,0,0,0,1,1,1,1,1,1]]
    }
  },
  {
    nombre: "Mortal Kombat",
    imagen: "./src/peliculas/mortal combat.PNG",
    precio: 300,
    emisiones: {
      1: ["Martes","21:15 PM","sala 2",[0,1,1,0,0,1,1,1,1,1,1,0]],
      2: ["Jueves","21:15 PM","sala 2",[1,1,1,1,0,1,1,1,1,1,1,]]
    }
  },
  {
    nombre: "Uncharted",
    imagen: "./src/peliculas/uncharted.webp",
    precio: 520,
    emisiones: {
      1: ["Viernes","19:00 PM","sala 1",[1,0,1,0,0,1,0,1,1,1,0,0]],
      2: ["Domingo","19:00 PM","sala 1", [1,0,1,0,0,1,0,1,1,1,0,0]]
    }
  }
];






console.log(Object.keys(peliculas[0].emisiones))



peliculas


let caratulas = []

function asientosVacios (asientos){
  let asientosLibres =[]
  asientos.forEach((asiento,index) =>{
    
    if(asiento == 0){
      asientosLibres.push(index + 1)
     }
     
  })
  alert(asientosLibres)

}

function createOption(datalist,asientos){
  console.log(asientos)
    asientos.forEach((asiento,index) =>{
    let dato = document.createElement("option")
    dato.value = `${index}`
    dato.innerHTML = `asiento ${index +1 }`
    datalist.appendChild(dato)
     


        })


}



function printPelicula(){
    peliculas.forEach(pelicula => {
        if(!caratulas.includes(pelicula.imagen)){
                caratulas.push(pelicula.imagen)
            }
    })

 caratulas.forEach(car =>{
     let div = document.createElement("div")
      div.classList.add("selectorDeCaratulas")
      div.innerHTML =`<img src="${car}" class="caratula" alt="">`
      let caratula = div.querySelector(".caratula")
      peliculas_box.appendChild(div)
      let funcion
      
      let tanda= peliculas.filter(pelicula => car == pelicula.imagen)   
      tanda.forEach(pelicula =>{
        funcion = pelicula
      })
     

       
   
        div.classList.add("caratula_open")
        div.innerHTML +=`<div id="compra" class="compra">
        <span><strong>${funcion.nombre}</strong></span
        <label for="brows" >tandas disponibles</label>
        <select  id="brows"></select>
        <br>
        <laber for="asientos">Asientos</label>
        <select  id="asientos"></select>
        
        
        <span>Precio:${funcion.precio}</span>

        <button class="comprar">comprar</button></div>`
         let datalist = div.querySelector("#brows")
         let datalist_2 = div.querySelector("#asientos")
         let comprarbutton = div.querySelector(".comprar")
         let value
         let value2
         Object.entries(funcion.emisiones).forEach(emision=>{
          /*informacion sobre la pelicula*/
         let dato = document.createElement("option")
         dato.value =`${emision[0]}`
         console.log(funcion.emisiones[1])
         dato.innerHTML= `${emision[1][0]},${emision[1][1]},${emision[1][2]}`
         datalist.appendChild(dato)
         value = datalist.value   
         
        
         value
         


         /*info sobre los asientos*/
          

         })

          let asientos = funcion.emisiones[value][3]

          
          createOption(datalist_2,asientos)
          value2 = datalist_2.value
           value2


          datalist.addEventListener("change",()=>{
          value = datalist.value
          asientos = funcion.emisiones[value][3]
          datalist_2.innerHTML = ``
          createOption(datalist_2,asientos)
          })  
          
          

          
          datalist_2.addEventListener("change",()=>{
              value2 = datalist_2.value
          })
          

        comprarbutton.addEventListener("click",()=>{
          value = datalist.value
          value2 = datalist_2.value
          let asiento = funcion.emisiones[value][3][value2]
          if (asiento == 1){
            alert("ya este asiento esta ocupado te mostrare los asientos libres")
            asientosVacios(asientos)
            
            
            
            
          }
          else{
            let prom = prompt("esta asiento esta disponible quieres comprarlo")
            if(prom == "si"){
              
              
              funcion.emisiones[value][3][value2]= 1
              alert("felicidades compraste el asiento")
              
            }
          }
          
          
          

        })
         
      
         
       

         
           

      

  
        
         
       

      
 })


}
let ifo = peliculas[0].emisiones[1][3][10]
ifo

printPelicula()
