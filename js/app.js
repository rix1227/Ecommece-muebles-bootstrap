
const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen){


modalImagen.addEventListener('show.bs.modal', function(event){
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    //construir la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt= 'Imagen galeria';

    const contModal = document.querySelector('.modal-body');
    contModal.appendChild(imagen);
});

modalImagen.addEventListener('hidden.bs.modal', function(){
    
    const contModal = document.querySelector('.modal-body');
    contModal.textContent = '';
})

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
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()