export function point (x,y){
	return '(' + x + ',' + y + ')';
}

export function add(x,y){
	return x+y;
}

export function isTrue(x){
	if(x)
		return true;
	else
		return false;
	console.log("Aqui no debería de llegar y no cubrirla");
}
