var num1 = parseInt(prompt("Number1:"));
var operator = prompt("operator(+, -, *, /)");
var num2 = parseInt(prompt("Number2:"));

let result;

if (operator == "+")
{
    result = num1 + num2;
}
else if(operator == "-")
{
    result = num1 - num2;
}
else if(operator == "*")
{
    result = num1 * num2;
}
else if(operator == "/")
{
    result = num1 / num2;
}
alert(num1 + operator + num2 + " = " + result);
