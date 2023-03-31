function tempload(){
    let temp= document.getElementById('temp');
}
document.getElementById('temperatura-entrada').addEventListener('input',function(e){
    let temperatura_entrada = parseFloat(e.target.value);
    if(temperatura_entrada){

    document.getElementById('saida').style.display = "inline";
    
    document.getElementById('saida-kelvin').innerHTML = ((temperatura_entrada+273.15)).toFixed(2)+" K";

    document.getElementById('saida-firen').innerHTML = ((9/5*temperatura_entrada + 32)).toFixed(2)+" F";

    document.getElementById('saida-rakine').innerHTML = ((temperatura_entrada + 273.15)*(9/5)).toFixed(2)+" R";

    }else{
       document.getElementById('saida').style.display= "none";
    }
})

document.getElementById('tempf').addEventListener('input',function(e){
    let tempf = parseFloat(e.target.value);
    if(tempf){

    document.getElementById('saidaf').style.display = "inline";
    
    document.getElementById('saidaf-kelvin').innerHTML = ((tempf-32)*(5/9)+273.15).toFixed(2)+" K";

    document.getElementById('saidaf-cel').innerHTML = ((tempf-32)*(5/9)).toFixed(2)+" C";

    document.getElementById('saidaf-rakine').innerHTML = ((tempf -32)+(+491.67)).toFixed(2)+" R";

    }else{
       document.getElementById('saidaf').style.display= "none";
    }
})

document.getElementById('tempk').addEventListener('input',function(e){
    let tempk = parseFloat(e.target.value);
    if(tempk){

    document.getElementById('saidak').style.display = "inline";
    
    document.getElementById('saidak-kelvin').innerHTML = ((tempk-273.15)*(9/5)+32).toFixed(2)+" F";

    document.getElementById('saidak-cel').innerHTML = ((tempk-273.15)).toFixed(2)+" C";

    document.getElementById('saidak-rakine').innerHTML = ((tempk*1.8)).toFixed(2)+" R";

    }else{
       document.getElementById('saidak').style.display= "none";
    }
})

document.getElementById('tempr').addEventListener('input',function(e){
    let tempr = parseFloat(e.target.value);
    if(tempr){

    document.getElementById('saidar').style.display = "inline";
    
    document.getElementById('saidar-kelvin').innerHTML = ((tempr-459.67)).toFixed(2)+" F";

    document.getElementById('saidar-cel').innerHTML = ((tempr-491.67)*(5/9)).toFixed(2)+" C";

    document.getElementById('saidar-rakine').innerHTML = ((tempr*5/9)).toFixed(2)+" K";

    }else{
       document.getElementById('saidar').style.display= "none";
    }
})