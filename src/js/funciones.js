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
     // alert("Usuario guardado")

     let nombres = document.querySelector("#txtNombres").value;
     let apellidos = document.querySelector("#txtApellidos").value;
     let correo = document.querySelector("#txtCorreo").value;
     let celular = document.querySelector("#txtCelular").value;

     let url=`127.0.0.1:3000/usuarios`;
     let datos={
         nombres : nombres,
         apellidos : apellidos,
         correo : correo,
         celular : celular
     };
     fetch(url, {
         method: 'POST',
         body : datos,
         headers:{
             'Content-Type':'application/json'
         }
     }).then(res => res.json())
     .then(mensaje => {
         console.log(mensaje)
     })
  }