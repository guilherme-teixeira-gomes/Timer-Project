    var display = document.getElementById('display')

    var minutos = document.getElementById('horas')
    var minutos = document.getElementById('minutos')
    var segundos = document.getElementById('segundos')

    var iniciar = document.getElementById('iniciar')
    var resetar = document.getElementById('resetar')
    var parar = document.getElementById('parar')
    
    var horaAtual
    var minutoAtual;
    var segundoAtual;

    var interval

    
    for(var h = 0; h<=23; h++){
    horas.innerHTML+='<option value='+h+'>'+h+'</option>';
    }

    for(var m = 0; m<=60; m++){
    minutos.innerHTML+='<option value='+m+'>'+m+'</option>';
    }

    for(var s = 0; s<=60; s++){
    segundos.innerHTML+='<option value='+s+'>'+s+'</option>';
    }


    iniciar.addEventListener('click',function(){

    horaAtual = horas.value
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual
    clearInterval(interval)

    interval = setInterval(function (){
        
    
    if(horaAtual== 0 && minutoAtual == 0 && segundoAtual == 0){
    horaAtual = 0;
    inutoAtual = 0;
    segundoAtual = 0;
                
    alert("Acabou o Tempo!")
    document.getElementById('sound').play();
    clearInterval(interval)

    }else if(segundoAtual != 0){
        segundoAtual --;

    }else if(minutoAtual != 0 && segundoAtual == 0 ) {
        segundoAtual = 59;
        minutoAtual --;

    }else if(horaAtual != 0 && minutoAtual == 0){
        minutoAtual = 60;
        horaAtual --;
               
            return;    
    }

    display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
    },1000)
    })


    resetar.addEventListener('click',function(){
        horaAtual = 0
        minutoAtual = 0
        segundoAtual = 0
        display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual
        clearInterval(interval)
    
    })

    
    parar.addEventListener('click',function(){
       
    clearInterval(interval);
    

    })
           
    
     document.addEventListener('keyup',function(eventP){
    if(eventP.key === "p" ){

   
    clearInterval(interval)
       
    }
    
})

document.addEventListener('keyup',function(eventR){
    if (eventR.key === "r" )
    {
        horaAtual = 0
        minutoAtual = 0
        segundoAtual = 0
        display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual
        clearInterval(interval)
    
    }    
})

document.addEventListener('keyup',function(eventI){
    if (eventI.key === "i" )
    {
        horaAtual = horas.value
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual
    clearInterval(interval)

    interval = setInterval(function (){
        
    
    if(horaAtual== 0 && minutoAtual == 0 && segundoAtual == 0){
    horaAtual = 0;
    inutoAtual = 0;
    segundoAtual = 0;
                
    alert("Acabou o Tempo!")
    document.getElementById('sound').play();
    clearInterval(interval)

    }else if(segundoAtual != 0){
        segundoAtual --;

    }else if(minutoAtual != 0 && segundoAtual == 0 ) {
        segundoAtual = 59;
        minutoAtual --;

    }else if(horaAtual != 0 && minutoAtual == 0){
        minutoAtual = 60;
        horaAtual --;
               
            return;    
    }

    display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
    },1000)
    }    
})

    

