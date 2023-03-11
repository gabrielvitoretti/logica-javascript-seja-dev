//Exercicio 3

let faturamentoMensal = 0; 

let faturamentoDiario = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

let indice = 0;

let mediaFaturamentoMensal = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
    if(faturamentoDiario[i].valor > 0){
        faturamentoMensal += faturamentoDiario[i].valor;
        indice++;
    } else{
        console.log("Não há faturamento nesse dia.")
    }
    mediaFaturamentoMensal = faturamentoMensal / indice;
};

console.log(Math.round(faturamentoMensal));
console.log(Math.round(mediaFaturamentoMensal));

let diasAcimaDaMedia = 0;

for(let i = 0; i < faturamentoDiario.length; i++){
    if(faturamentoDiario[i].valor > mediaFaturamentoMensal){
        diasAcimaDaMedia++;
    } else {
        console.log("Esses dias ficaram abaixo da media mensal."); 
    }
};

console.log("A quantidade de dias que obteve o faturamento acima da media mensal foi de:", diasAcimaDaMedia, "dias.");

let valorMaximo = 0;

for (let i = 0; i < faturamentoDiario.length; i++){
    if(faturamentoDiario[i].valor < valorMaximo){
        console.log(valorMaximo);
    } else {
        console.log(faturamentoDiario[i].valor);
    }
}

let valorMinimo = 0;

for (let i = 0; i < faturamentoDiario.length; i++){
    if(valorMinimo < faturamentoDiario[i].valor){
        console.log(valorMinimo);
    } else {
        console.log(faturamentoDiario[i].valor);
    }
}

//Exercicio 4

let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutrosEstados = 19849.53;
let faturamentoSP = 67836.43;
let faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutrosEstados;

function faturamentoSaoPaulo(){
    let representacao = (faturamentoSP / faturamentoTotal) * 100;
    console.log('O percentual de representacao do estado de São paulo no faturamento total é de aproximadamente:', Math.round(representacao), '%');
}

function faturamentoRioDeJaneiro(){
    let representacao = (faturamentoRJ / faturamentoTotal) * 100;
    console.log('O percentual de representacao do estado do Rio de Janeiro no faturamento total é de aproximadamente:', Math.round(representacao), '%');
}

function faturamentoMinasGerais(){
    let representacao = (faturamentoMG / faturamentoTotal) * 100;
    console.log('O percentual de representacao do estado de Minas Gerais no faturamento total é de aproximadamente:', Math.round(representacao), '%');
}

function faturamentoEspiritoSanto(){
    let representacao = (faturamentoES / faturamentoTotal) * 100;
    console.log('O percentual de representacao do estado do Espírito Santo no faturamento total é de aproximadamente:', Math.round(representacao), '%');
}

function fatOutrosEstados(){
    let representacao = (faturamentoOutrosEstados / faturamentoTotal) * 100;
    console.log('O percentual de representacao do estado do Espírito Santo no faturamento total é de aproximadamente:', Math.round(representacao), '%');
}

faturamentoSaoPaulo();
faturamentoRioDeJaneiro();
faturamentoMinasGerais();
faturamentoEspiritoSanto();
fatOutrosEstados();




//Exercicio 5