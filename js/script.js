/**VARIABLES */

const inputNumber = document.getElementById("number");
const buttonCovert = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumber = [
  {
    "I":1
  },
  {
    "IV":4
  },
  {
    "V":5
  },
  {
    "IX":9
  },
  {
    "X":10
  },
  {
    "XL":40
  },
  {
    "L":50
  },
  {
    "XC":90
  },
  {
    "C":100
  },
  {
    "CD":400
  },
  {
    "D":500
  },
  {
    "CM":900
  },
  {
    "M":1000
  }
]



//funciones y eventos


//Convertir numero romano a decimal
function romanNumberConvert (input) {
  
  

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

  // result.textContent = decimalToBinary(inputInt);
  // numberInput.value = "";
};

buttonCovert.addEventListener("click", () => {
  checkUserInput();
});

inputNumber.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      checkUserInput();
    }
  });
