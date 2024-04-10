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
function romanNumberConvert (input) {
  var roman = '';
  for (let key in romanToNum) {
    debugger
      while (input >= romanToNum[key]) {
        roman += key;
        input -= romanToNum[key];
      }
  }
  return roman;
}




//Cambiar estilos de css
const changeSylesCss = () =>{
  result.style.border = "3px solid RGB(133,0,0)";
  result.style.backgroundColor = "#FFADAD";
  result.classList.remove("hidden");
}

//Validar entrada
const checkUserInput = () => {
  const numInput = parseInt(inputNumber.value);
  console.log(!inputNumber.value, isNaN(inputNumber.value));
  if (!inputNumber.value || isNaN(inputNumber.value)) {
    result.innerHTML = `<p class="result-error">Introduzca un número válido</p>`;
    changeSylesCss();
    return;
  }
  
  if (numInput <= 0){
    result.innerHTML = `<p class="result-error">Por favor, introduzca un número mayor o igual a 1</p>`;
    changeSylesCss();
    return;
  }

  if(numInput >= 3999){
    result.innerHTML = `<p class="result-error">Por favor, introduzca un número menor o igual a 3999.</p>`;
    changeSylesCss();
    return
  }
  
  }



buttonCovert.addEventListener("click", () => {
  checkUserInput();
});

inputNumber.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      checkUserInput();
    }
  });
