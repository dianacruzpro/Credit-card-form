const card = document.querySelector('#tarjeta'),
      btnOpenForm = document.querySelector('#btn__openform'),
      form = document.querySelector('#cardform'),
      datoNumero = document.querySelector('#tarjeta .dato__numero'),
      datoNombre = document.querySelector('#tarjeta .dato__nombre'),
      logoMarca = document.querySelector('#marca'),
      firma = document.querySelector('#tarjeta .dato__firma--p'),
      mesExpiracion = document.querySelector('#tarjeta .dato__expiracion--mes'),
      yearExpiracion = document.querySelector('#tarjeta .dato__expiracion--year'),
      ccv = document.querySelector('#tarjeta .dato__ccv');

//Turning card to the front
const mostrarFrente = ()=>{
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
}

/* ----------Card animation-------- */
card.addEventListener('click', () => card.classList.toggle('active') );

/* ----------btn animation - open form-------- */
btnOpenForm.addEventListener('click', ()=>{
  btnOpenForm.classList.toggle('active');
  form.classList.toggle('active');
})

/*--------Dynamic Select Month---------*/
for(let i=1; i <= 12; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  form.selectMes.appendChild(opcion);
}

/*--------Dynamic Select Year---------*/
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual+ 8; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  form.selectYear.appendChild(opcion);
}

/*-------Dynamic number card-------*/
form.inputNumero.addEventListener('keyup', (e)=>{
  let valorInput = e.target.value;

  form.inputNumero.value = valorInput
  //Removing blank 
  .replace(/\s/g, "")
  //Removing letters
  .replace(/\D/g, "")
  //Placing blank space every 4 digits
  .replace(/([0-9]{4})/g, "$1 ")
  //Removing last blank space
  .trim();

  datoNumero.textContent = valorInput;

  if(valorInput == ''){
    datoNumero.textContent = "#### #### #### ####";
    logoMarca.innerHTML = '';
  }

  switch(valorInput[0]){
    case '4':
        logoMarca.innerHTML = `<img src="img/logos/visa.png" class="marca__img">`
        break
    case '5':
        logoMarca.innerHTML = `<img src="img/logos/mastercard.png" class="marca__img">`
        break
  }

  //Turning card to the front if it's written in the fields
  mostrarFrente();
});


/*-------Dynamic number card-------*/

form.inputNombre.addEventListener('keyup', (e)=>{
  let valorInput = e.target.value;

  form.inputNombre.value = valorInput.replace(/[0-9]/g, '');

  datoNombre.textContent = valorInput;
  firma.textContent = valorInput;

  if(valorInput == ''){
    datoNombre.textContent = "Sara Potter";
  }

  mostrarFrente();
});

/*--------Dynamic select month--------*/
form.selectMes.addEventListener('change', (e)=>{
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});
/*--------Dynamic select year--------*/
form.selectYear.addEventListener('change', (e)=>{
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

form.inputCCV.addEventListener('keyup', (e)=>{
  if(!card.classList.contains('active')){
    card.classList.toggle('active');
  }

  form.inputCCV.value = form.inputCCV.value
  //Removing blank 
  .replace(/\s/g, "")
  //Removing letters
  .replace(/\D/g, "");

  ccv.textContent = form.inputCCV.value;
});
