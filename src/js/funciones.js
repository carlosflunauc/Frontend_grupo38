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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else{
              RegistrarUsuario();
              event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarUsuario(){
      alert("Usuario guardado")
  }