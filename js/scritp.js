
var inicio = confirm("Inciamos ?")

if(inicio!==true){
    console.log("Muchas gracias ")
    document.getElementById('titulo2')
    titulo2.innerText = "Gracias! Que tengas un buen dia"
}
else{
    var eleccion = prompt("Ingrese el numero de Ejercicio que quiere ver:\n a) Crear una variable con un valor numerico \n b) Crear 2 variables con valores numéricos libres \n c) Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente"  )
    control = typeof(eleccion)
    
    if(control === 'string' && eleccion == 'a' || eleccion == 'b' || eleccion =='c'){
        switch (eleccion) {
            case "a":
                console.log('Elegiste la opcion:' + eleccion)
                cantidadDeGatos = prompt("ingrese la cantidad de Gatos del 1 al 10")
                /*😺 😸 😹 🐈 🐾 ⬛ */
                if (cantidadDeGatos >=1 && cantidadDeGatos <=10 ){
                    g = ['😺','😸','😹','😺','😸','😹','😺','😸','😹','😺']
                    for (i =1 ; i <= cantidadDeGatos  ; i++ ){
                        gi = 'g'+i
                        console.log('Gato #',i , g[i-1])
                    }
                } else{
                    console.error(['Debe ingresar Valores del 1 al 10']) 
                }
            break;
            case "b":
                console.log('Elegiste la opcion:' + eleccion)
                cantidadDeGatos = parseInt(prompt('Ingrese la cantidad de Gatos'))
                cantidadDePasos = parseInt(prompt('Ingrese la Cantidad de Pasos'))
                if(cantidadDeGatos>=1 && cantidadDePasos>=1 ){
                    g=['🐈','🐾']
                    xc = ''
                    for( i =1 ; i <=cantidadDePasos ; i++){
                        xc = xc + g[1]
                    }
                    for(p =1; p<=cantidadDeGatos; p++ ){
                        console.log('Gato #',p , g[0] ,xc ) 
                    }    
                 }else{
                    console.error('Tiene que ingresar un Numero mayor a 1')
                }
                break;
            case "c":
                console.log('Elegiste la opcion:' + eleccion)
                cantidadDeGatos = parseInt(prompt('Ingrese la cantidad de Gatos'))
                cantidadDePasos = parseInt(prompt('Ingrese la Cantidad de Pasos'))
                if(cantidadDeGatos>=1 && cantidadDePasos>=1 ){
                    g=['🐈','🐾','⬛']
                    xc = ''
                    for( i =1 ; i <=cantidadDePasos ; i++){
                            xc = xc +g[1]
                    }
                    for(p =1; p<=cantidadDeGatos; p++ ){
                        if(p%2 == 0){
                            console.log('Gato #',p , g[0] , g[2],xc ) 
                        }else{
                           /*  xc = xc + g[1] */
                           console.log('Gato #',p , g[0] ,xc ) 
                        }
                    }    
                    } else{
                    console.error('Tiene que ingresar un Numero mayor a 1')
                    }

                break;
        }
    }
    else{
        console.console.error("tiene que ingresar A, B o C")
        titulo2.innerHTML = "Tiene que Elegir las opciones informadas <br><br> Opciones A, B o C"  
    }

}