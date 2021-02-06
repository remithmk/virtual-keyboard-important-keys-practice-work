var number;
function numbers(number) {
  document.getElementById("first").value += number;
}

var num1,operator
function operations(sym) {
   num1 = document.getElementById("first").value;
  document.getElementById("first").value = "";
  operator = sym
}


var result,num2
function equal(){
 num2=document.getElementById("first").value 
  if(operator == "+")
   {
     result = eval(num1) + eval(num2);    
  }
   else if (operator == "-")
    {
     result = eval(num1) - eval(num2);
    } 
    else if (operator == "*")
     {
     result = eval(num1) * eval(num2);
    }
     else if (operator == "/") 
     {
     result = eval(num1) / eval(num2);
   }
   document.getElementById("first").value=result
}

function tab() {
  var tabval = document.getElementById("first").value;
  document.getElementById("first").value = tabval + "\t";
}

var cap = 0;
function caplock() {
  if (cap == 1) {
    cap = 0;
  } else if (cap == 0) {
    cap = 1;
  }
}

var letter;
function alpha(letter) {
  if (cap == 1) {
    var uppercase = letter.toUpperCase();
    document.getElementById("first").value += uppercase;
  } else if (cap == 0) {
    var lowercase = letter.toLowerCase();
    document.getElementById("first").value += lowercase;
  }
}

var numberlock = 0;
function lock() {
  if (numberlock == 1) {
    numberlock = 0;
  } else if (numberlock == 0) {
    numberlock = 1;
  }
  if (numberlock == 1) {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    document.getElementById("zero").disabled = true;
  } else if (numberlock == 0) {
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.getElementById("zero").disabled = false;
  }
}

function backspce() {
  var values = document.getElementById("first").value;
  var lengths = values.length;
  var space = values.slice(0, length - 1);
  document.getElementById("first").value = space;
}

var shift = 0;
function shft() {
  if (shift == 1) {
    shift = 0;
  } else if (shift == 0) {
    shift = 1;
  }
  if (shift == 1) {
    cap = 1;
    
  } else if (shift == 0) {
    cap = 0;
    
  }
}

function delet(number) {
  document.getElementById("first").value = " ";
}

function space() {
  var spac = document.getElementById("first").value;
  document.getElementById("first").value = spac + " ";
}

function enters()
 {
     document.getElementById("first").value+='\n';
}
