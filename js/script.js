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

        $('#operation-val').text(op);

    }else{

        $('#operation-val').text(cadena);

    }

}


function btnAC(){

    $('#answer-val').text("0");
    $('#operation-val').text("= 0");

}


function getAns(){
    var value = $('#operation-val').text();
    
    try{

        ans = eval(value);
        
    }catch(e){
        
        ans = "syntax error";

    }

    $('#answer-val').text(value);
    $('#operation-val').text( " = " + ans);
}

