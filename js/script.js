

/*
PROCEDIMENTO---------------
NOME: verificar_se_eh_data
PARÂMETRO: int, int int
RETORNO: void
*/ 
function verificar_se_eh_data(d,m,a)
{
    //converter  parametros para numero

    d = parseInt(d);
    m = parseInt(m);
    a = parseInt(a);

    //verificar se o dia, mes e ano são números
    if( isNaN(d) || isNaN(m) || isNaN(a))
    {
        alert("Digite apenas números.")
    }
    else //caso não eles não forem números
    {
        switch(m)
        {
            //verificar os meses com 31 dias
            case 1:; case 3:; case 5:; case 7:; case 8:; case 10:;
            case 12:
                if(!(d >=1 && d<=31))
                {
                    alert("Digite um dia válido");
                }
                break;
                //verificar os meses com 30 dias
            case 4:; case 6:; case 9:;
            case 11:
                if(!(d>=1 && d<=30))
                {
                    alert("Digite um dia válido");
                }
                break;
                //verificar se o ano é bissexto
            case 2:
                if(a%4==0 && (a%100!=0 || a%400==0))
                {
                    //se for, verificar se é um dia válido
                    if(!(d>=1 && d<=29))
                    {
                        alert("Digite um dia válido")
                    }
                }
        }
    }
}

/*PROCEDIMENTO
NOME: verificar_salario
PARAMETRO: float
RETORNO: void*/ 
function verificar_salario(salario)
{
    //se o input do salário não estiver vazio
    if(salario!="")
    {
        //converter o salario para float(real)
        salario = parseFloat(salario)

        //se o salario não for número
            if(isNaN(salario))
            {
               alert("Digite apenas números.")
            }  
    }

}


/*
FUNÇÃO ---------------
NOME: calcular_inss
PARAMETRO: float
RETORNO: float*/
function calcular_inss(salario)
    {   
        var inss;
        //converter inss para float(real)
        inss = parseFloat(inss);

        if(salario > 6101.06)
        {
            inss = 0;
        }
        else
        {
            // se o salário está entre 6101.06 e 3134.41
             if(salario <= 6101.06 && salario >= 3134.41)
             {
                inss = salario * 0.14;
              }
             else
             {   //se o salário estiver entre 3134.40 e 2089.61
                 if(salario <= 3134.40 && salario>= 2089.61)
                 {
                     inss = salario * 0.12;
                 }
                 else
                 {   //se o salário estiver entre 2089.60 e 1045.01
                    if(salario <= 2089.60 && salario >= 1045.01)
                     {
                         inss = salario * 0.09;
                     }
                    else
                     {   //se o salário estiver entre 0  e 1045
                        if(salario <= 1045)
                        {
                             inss = salario * 0.075;
                         }
                     }
               }
            }
        }
        
        //fazer com que a variavel inss suporte apeans duas casas decimais
        inss = inss.toFixed(2)

        return(inss)
    }

/*
FUNÇÃO ---------------
NOME: calcular_imposto_renda
PARAMETRO: float
RETORNO: float*/
function calcular_imposto_renda(salario)
{   
    var ir;
    //converter inss para float(real)
    ir = parseFloat(ir);

    if(salario > 4664.68)
    {
        ir = (salario * 0.275) - 869.36;
    }
    else
    {
        if(salario <= 4664.68 && salario >= 3751.06)
        {
            ir = (salario * 0.225) - 636.13;
        }
        else
        {
            if(salario <= 3751.05 && salario >= 2826.66)
            {
                ir = (salario * 0.15) - 354.80;
            }
            else
            {
                if(salario <= 2826.65 && salario >= 1903.99)
                {
                    ir = (salario * 0.075) - 142.80;
                }
                else
                {
                    if(salario <= 1903.98)
                    {
                        ir = 0;
                    }
                }
            }
        }
    }

    //fazer a variavel 'ir' comportar apeans duas casas decimais
    ir = ir.toFixed(2);

    return(ir)
}

/*
FUNÇÃO -------------
NOME: calcular_bonus
PARAMETRO: int
RETORNO: int
*/
function calcular_bonus(filhos)
{
    var bonus;
    bonus = parseInt(bonus);

    //converter para inteiro
    filhos = parseInt(filhos);


    if(filhos >= 1)
    {
        bonus = 1000;
    }
    else
    {
        bonus = 0;
    }

    return(bonus)
}

/*
FUNÇÃO ---------------
NOME: calcular_desconto
PARÂMETRO: float, float
RETORNO: float
*/
function calcular_desconto(inss,ir)
{
    inss = parseFloat(inss);
    ir = parseFloat(ir);

    desconto = inss + ir;

    //fazer com que a variável 'desconto' comporte apenas duas casas decimais
    desconto = desconto.toFixed(2);

    return(desconto)
}

/*
FUNÇÃO ---------------
NOME: calcular_salario_liquido
PARâMETRO: float, float, float
RETORNO: float
*/
function calcular_salario_liquido(salario,descontos,bonus)
{

    var salario_liq;
    salario_liq = parseFloat(salario_liq);

    salario = parseFloat(salario);
    descontos = parseFloat(descontos);
    bonus = parseFloat(bonus);

    salario_liq = salario - descontos + bonus;

    salario_liq = salario_liq.toFixed(2);

    return(salario_liq)
}

/* 
FUNÇÃO ---------------
NOME: limpar_campos
PARâMETRO: float e string
RETORNO: string
*/
//função que limpará todos os campos
function limpar_campos(limpar)
{
    limpar = ""

    return(limpar)
}