////////////////////////////////////////
// NORMAL MODE
///////////////////////////////////////


var addButton1 = $('#addButton1');
    subtractButton1 = $('#subtractButton1');
    multiplyButton1 = $('#multiplyButton1');
    divideButton1 = $('#divideButton1');
    answer1 = $('#answer1');

addButton1.click(function(){
  var num1 = Number($('#numOne').val());
  var num2 = Number($('#numTwo').val());
  var calc = num1 + num2;
  answer1.html(calc);
});

subtractButton1.click(function(){
  var num1 = Number($('#numOne').val());
  var num2 = Number($('#numTwo').val());
  var calc = num1 - num2;
  answer1.html(calc);
});

multiplyButton1.click(function(){
  var num1 = Number($('#numOne').val());
  var num2 = Number($('#numTwo').val());
  var calc = num1 * num2;
  answer1.html(calc);
});

divideButton1.click(function(){
  var num1 = Number($('#numOne').val());
  var num2 = Number($('#numTwo').val());
  var calc = num1 / num2;
  answer1.html(calc);
});

////////////////////////////////////////
// HARD MODE
///////////////////////////////////////

var numButton = $('.numButton');
    calcClear = $('#calcClear');
    operButton = $('.operButton');
    calcButton = $('.calcButton');
    calcDivide = $('#calcDivide');
    calcMultiply = $('#calcMultiply');
    calcAdd = $('#calcAdd');
    calcSubtract = $('#calcSubtract');
    calcScreenText = $('#calcScreenText');

numButton.click(function(){
  if ($(this).val() === ".") {
    calcScreenText.append($(this).val());
  } else {
    calcScreenText.append(Number($(this).val()));
  }
});

calcClear.click(function(){
  calcScreenText.text("");
})

operButton.click(function(){
  calcScreenText.append(" " + $(this).val() + " ");
});

$('#calcEquals').click(function(){
  var answer = eval($('#calcScreenText').text());
  calcScreenText.text(answer);
});
