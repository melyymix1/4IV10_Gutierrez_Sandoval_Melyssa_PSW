function problema3()
{
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];
    //Vamos a obtener la entrada de los datos
    var p3_input= document.querySelector('#p3-input').value;

    //Separar todo por comas
    var p3_palabras= p3_input.split(',');
    //necesitamos una funcion que se encargue de recuperar cada palabra
    //Eliminar espacios
    p3_palabras=p3_palabras.map(function(palabras)
    {
        return palabras.replace(/\s/g, '').toUpperCase();
    });
     //Calcular los caracteres únicos
    var p3_res='';
    //funcion que se encargue de calcular que contienen el arreglo y seprara para 
    //cada caracter contarlo
   p3_palabras.forEach(function(palabra, i)
   {
    var letras_unicas = [];
    var palabra_array= palabra.split('');

    //iterar el alfabeto
    alfabeto.forEach(function (letra, j)
    {
        //itero cada palabra
        palabra_array.forEach(function(letras_palabras, k)
        {
            //comprobar que la letra este dentro del alfabeto
            if(letras_palabras==letra)
            {
                //si la letra no la hemos contado la agregamos a un array para contar la letras unicas
                if(letras_unicas.indexOf(letra)<0)
                {
                    letras_unicas.push(letra);

                }
            }
        });
    });
    //vammos a contar la salida 
    p3_res+= 'Palbras: ' + palabra + '='+ letras_unicas.length +' \n';
   });
   //imprimir salida
   document.querySelector('#p3-output').textContent =p3_res;
}