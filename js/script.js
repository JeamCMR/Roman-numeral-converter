/**VARIABLES */

const inputNumber = document.getElementById("number");
const buttonCovert = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};



//funciones y eventos


//Convertir numero romano a decimal
const romanNumberConvert = (input) => {
  let roman = '';
  for (let key in romanToNum) {
    // debugger
      while (input >= romanToNum[key]) {
        roman += key;
        input -= romanToNum[key];
      }
  }
  return roman;
}




//Cambiar estilos de css
const changeSylesError = () =>{
  result.style.border = "3px solid RGB(133,0,0)";
  result.style.backgroundColor = "#FFADAD";
  result.classList.remove("hidden");
}


//Cambiar estilos de css
const changeSylesDone = () =>{
  result.style.border = "3px solid white";
  result.style.backgroundColor = "#3e695e96";
  result.style.fontSize="2rem";
  result.classList.remove("hidden");
}



//Validar entrada
const checkUserInput = () => {
  const numInput = parseInt(inputNumber.value);

  
  if ((!inputNumber.value) || isNaN(numInput) ) {
    result.innerHTML = `<p class="result-error">Introduzca un número válido</p>`;
    changeSylesError();
    return;
  }
  
  if (numInput <= 0){
    result.innerHTML = `<p class="result-error">Por favor, introduzca un número mayor o igual a 1</p>`;
    changeSylesError();
    return;
  }

  if(numInput > 3999){
    result.innerHTML = `<p class="result-error">Por favor, introduzca un número menor o igual a 3999.</p>`;
    changeSylesError();
    return
  }
  
  let numberRomano= romanNumberConvert(numInput)
  result.innerHTML = `<p>${numberRomano}</p>`
  changeSylesDone();
  }


buttonCovert.addEventListener("click", () => {
  checkUserInput();
});

inputNumber.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      checkUserInput();
    }
  });
