
var presupuesto = 0;
let gastos = new Array();
let idGastos = 0;
function actualizarPresupuesto(num_int) 
{
    
    if(num_int >= 0 && typeof num_int === 'number'){
        presupuesto = num_int;
        return presupuesto;
    }
    else
    {
        console.log('el número' +num_int + ' no es válido ');
        return -1;
    }    
 
}


function mostrarPresupuesto() 
{
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion,valor_actual,fecha = Date.now(), ...etiquetas) 
{
    this.descripcion = descripcion;
    this.etiquetas = [...etiquetas];

    if(typeof fecha === 'string' && !isNaN(Date.parse(fecha)))
    {
        this.fecha = Date.parse(fecha);
    }
    else
    {
        this.fecha = Date.now();
    }
    if(valor_actual > 0 && typeof valor_actual ==='number')
    {

        this.valor = valor_actual;

    }
    else
    {
        this.valor = 0;
    };
    
    this.mostrarGastoCompleto = function ()
    {
        let dato = new Date(this.fecha); 
        let etq = 'Gasto correspondiente a '+this.descripcion+ ' con valor ' +this.valor +' €.\n' +
        'Fecha: '+ dato.toLocaleString() + '\n'+
        'Etiquetas:\n';

        for(let i = 0; i< etiquetas.length; i++)
        {
             etq = etq + '- ' + etiquetas[i] +'\n';
        }

        return etq;
    };
    
    this.actualizarDescripcion = function(cadena_act)
    {
        this.descripcion = cadena_act;
    };

    this.actualizarValor = function(val_actualizado)
    {
        if(val_actualizado >= 0)
        {
            this.valor = val_actualizado;
        }
        else
        {
            console.log(`El valor introducido es negativo, no se ha podido actualizar`);
        };
    };
}

function listarGastos()
{ 
    return gastos;
}

function anyadirGasto(g1)
{
    g1.id = idGastos;
    idGastos++;
    gastos.push(g1);
}
function borrarGasto(gastos_id)
{
    for(let i = 0; i < gastos.length; i++)
    {
        if(gastos_id === gastos[i].id)
        {
            gastos.splice(i,1);
        }
    }
}
function calcularTotalGastos()
{
    let total = 0;
    for(let i =0; i<gastos.length; i++)
    {
        total=total+gastos[i].valor;
    }
    return total;
}
function calcularBalance()
{
    return presupuesto - calcularTotalGastos();
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

