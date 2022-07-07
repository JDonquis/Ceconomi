const d = document;
const boton = d.getElementById("calcular");

/*Mostrar respuesta*/
function respuesta(r,e,i)
{
	const box = d.getElementById("respuesta");
	const raiz = d.getElementById("raiz");
	const error = d.getElementById("error");
	const iteracion = d.getElementById("iteracion");

	raiz.innerHTML = `${r.toFixed(4)}`;
	error.innerHTML = `${e.toFixed(4)}`;
	iteracion.innerHTML = `${i}`;



	box.classList.replace("off","on");

}

/*Funcion para calcular el xr de cada iteracion*/
function calxr(a,b)
{	
	let r;
	return r = (a+b)/2;
} 

/*Funcion x^4+3x^3-2*/
function ecuacion1(xr)
{
	let resp =  Math.pow(xr,4)+(3 * Math.pow(xr,3)) - 2;
	return resp;
}


boton.addEventListener("click",e=>
{
	e.preventDefault();
	
	const inter1 = d.getElementById("intervalo1") ,inter2 = d.getElementById("intervalo2");

	let xa = parseInt(inter1.value);
	let xb = parseInt(inter2.value);
	let xr,fxr,fxa,xra = 0; 
	let error=100;
	let i=0;

	if (isNaN(xa) || isNaN(xb))
	{
		alert("Numero invalido");

	}
	else{

	xr = calxr(xa,xb); 
	fxr = ecuacion1(xr);
	fxa = ecuacion1(xa);
	fxa * fxr>0?xa=xr:xb=xr;

	// if((fxa * fxr) > 0)
	// 	xa = xr;
	// else
	// 	xb = xr;

	while(error>=1)
	{	i++;
		xra = xr;
		xr = calxr(xa,xb); 
		fxr = ecuacion1(xr);
		fxa = ecuacion1(xa);
		error = Math.abs( ( (xr - xra)/ xr)*100);
		fxa * fxr>0?xa=xr:xb=xr;
	}


	respuesta(xr,error,i);

}

})


