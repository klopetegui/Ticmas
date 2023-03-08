// hacer una llamada a la API de Random User
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    // obtener la información de usuario aleatoria
    const user = data.results[0];

    // actualizar la imagen de perfil
    const profileImage = document.getElementById('profile-image');
    profileImage.src = user.picture.large;

    // actualizar el nombre
    const name = document.getElementById('name');
    name.textContent = `${user.name.first} ${user.name.last}`;

    // actualizar el correo electrónico
    const email = document.getElementById('email');
    email.textContent = user.email;

    // actualizar el número de teléfono
    const phone = document.getElementById('phone');
    phone.textContent = user.phone;
  })
  .catch(error => console.error(error));


  const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario
  
  // Obtener los valores del formulario
  const nameInput = document.getElementById('nameForm');
  const emailInput = document.getElementById('emailForm');
  
  // Verificar que los elementos existan antes de obtener los valores
  const name = nameInput && nameInput.value.trim();
  const email = emailInput && emailInput.value.trim();
  
  // Validar los campos del formulario
  let errors = [];
  
  if (!name) {
    errors.push('El nombre es obligatorio');
    document.getElementById('name-error').innerHTML = 'El nombre es obligatorio';
  } else {
    document.getElementById('name-error').innerHTML = '';
  }
  
  if (!email) {
    errors.push('El email es obligatorio');
    document.getElementById('email-error').innerHTML = 'El email es obligatorio';
  } else if (!isValidEmail(email)) {
    errors.push('El email no es válido');
    document.getElementById('email-error').innerHTML = 'El email no es válido';
  } else {
    document.getElementById('email-error').innerHTML = '';
  }
  
  // Si hay errores, mostrarlos al usuario
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return false; // No enviar el formulario
  } else {
      // mostrar el mensaje de confirmación
      document.getElementById("confirmationMessage").style.display = "block";
      
      // ocultar el mensaje de confirmación después de 3 segundos
      setTimeout(function(){
        document.getElementById("confirmationMessage").style.display = "none";
      }, 4000);
    }
});

// Función para validar el formato del email
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

