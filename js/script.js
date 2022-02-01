function insertNum(num){

    var value = $('#operation-val').text();
    cadena = value + num;

    if(cadena.includes("=")){
        
        $('#operation-val').text(num);

    }else{

        $('#operation-val').text(cadena);

    }
    
}

function insertOper(op){

    var value = $('#operation-val').text();
    cadena = value + op;

    if(cadena.includes("=")){

        // $('#operation-val').text(cadena.replace("= ",""));
        $('#operation-val').text("");
        $('#operation-val').text(op);


    }else{

        $('#operation-val').text(cadena);

    }

}

function insertFun(op){

    var value = $('#operation-val').text();
    
    if(!op.includes('!')){
        op = op + '(';
    }
    
    cadena = value + op;
    // console.log(cadena);


    if(cadena.includes("=")){

        $('#operation-val').text("");
        $('#operation-val').text(op);
        // console.log(cadena);
        
        
    }else{
        
        $('#operation-val').text(cadena);
        // console.log(cadena);

    }

}


function btnAC(){

    $('#answer-val').text("0");
    $('#operation-val').text("= 0");

}


function getAns(){

    var value = $('#operation-val').text();

    var newValue = value.replace("pi","Math.PI");
    var newValue2 = newValue.replace("e","Math.exp(1)");
    var newValue2 = newValue2.replace("sin(","Math.sin(");
    var newValue2 = newValue2.replace("cos(","Math.cos(");
    var newValue2 = newValue2.replace("tan(","Math.tan(");
    var newValue2 = newValue2.replace("^","**");
    var newValue2 = newValue2.replace("sqrt","Math.sqrt");


    if(newValue2.includes("!")){

        newValue2 = newValue2.replace(/(\d+)!/g, (m, n) => factorial(+n));
        
    }
    
    if(newValue2.includes("%")){
        
        newValue2 = newValue2.replace(/(\d+)%/g, (m, n) => percentage(+n));
        
    }
    
    try{
        
        // console.log(newValue2);
        ans = eval(newValue2);
        
    }catch(e){
        
        console.log(e);
        ans = "syntax error";

    }
    $('#answer-val').text(value);
    $('#operation-val').text( " = " + ans);
}

function btnDel(){

    var value = $('#operation-val').text();
    if(!value.includes("=")){

        var newVal =  value.slice(0,-1);

        if(newVal == ""){

            $('#operation-val').text("= 0");
        
        }else{

            $('#operation-val').text(newVal);
        
        }
    }
}


function factorial(num) {
    if (num <= 1) 
      return 1;
  
    return num * factorial(num - 1);
}

function percentage(num) {
    return num/100;
}

function  getTrivia() {

    const value = $('#operation-val').text();
    const size  = $('#operation-val').css('fontSize',20); 

    const valoresAceptados = /^[0-9]+$/;

    if (value.match(valoresAceptados)){
        $.ajax({
        
            type:"GET",
            url: `http://numbersapi.com/${value}`,
            success: function (data) {
                    
                  $('#operation-val').text(data);
                 
            }
            ,
            error: function (e) {
                throw e;
            }
    
        });
    } else {
        $('#operation-val').text("No se ha encontrado información");
   }




}

$( document ).ready(function() {

    $(".function").on("click",function(){
        insertFun($(this).attr('id'));
        // alert($(this).attr('id'));
    });
    
    $(".operator").on("click",function(){
        insertOper($(this).attr('id'));
    });
    
    $(".operatorAC").on("click",function(){
        btnAC();
    });
    
    $(".operatorDel").on("click",function(){
        btnDel();
    });
    $(".operatorEq").on("click",function(){
        getAns();
    });
    
    $(".number").on("click",function(){
        insertNum($(this).attr('id'));
    });
    
    $(".const").on("click",function(){
        insertNum($(this).attr('id'));
    });
    $(".request").on("click",function(){
        getTrivia()
    });
  });

// TODO: Hacer petición usando JQuery y AJAX 