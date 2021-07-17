var n= +prompt("Введите номер числа из ряда Фибоначчи: ", "");
alert("Число Фибоначчи в позиции "+n+" это "+fib(n));

function fib(n) {
	if((n>2)&&((n-2)>0)) {
		return fib(n-1)+fib(n-2);
	}
	else {
		return 1;
	}
}