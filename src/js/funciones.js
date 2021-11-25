let colores=["blue","white","gray","purple","red","black","green","yellow"]

function CambiarColor(){
    let indice =parseInt(Math.random() * 8)-1;
    let color = colores[indice];
    document.querySelector("body").style.background= color;
}


   
let colores2=["blue","white","gray","purple","red"]

function CambiarFondo(){
    let indice2 = parseInt(Math.random() * 5) -1;
    let color2 = colores2[indice2];
    document.querySelector("body").style.background =color2;

}