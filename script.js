var valor=document.getElementById("valor");
//detecto el evento cuando se escribe el número
valor.addEventListener("keyup",convertir);
txtResultado=document.getElementById("resultado");

unidad1=document.getElementById("unidad1");
unidad1.addEventListener("change",convertir);

unidad2=document.getElementById("unidad2");
unidad2.addEventListener("change",convertir);

var resultado;


function convertir(){
    if(valor.value==''){
        return;
    }

    numero=valor.value;
    numero=parseFloat(numero);

    if(unidad1.value=="Psi" && unidad2.value=="Psi"){
        resultado=numero*1;
        txtResultado.innerHTML= numero + " Psi equivalen a " + resultado + " Psi ";
    }
    if(unidad1.value=="Pa" && unidad2.value=="Pa"){
        resultado=numero*1;
        txtResultado.innerHTML= numero + " Pa equivalen a " + resultado + " Pa ";
    }
    if(unidad1.value=="Bar" && unidad2.value=="Bar"){
        resultado=numero*1;
        txtResultado.innerHTML= numero + " Bar equivalen a " + resultado + " Bar ";
    }
    if(unidad1.value=="Atm" && unidad2.value=="Atm"){
        resultado=numero*1;
        txtResultado.innerHTML= numero + " Atm equivalen a " + resultado + " Atm ";
    }
    if(unidad1.value=="Torr" && unidad2.value=="Torr"){
        resultado=numero*1;
        txtResultado.innerHTML= numero + " Torr equivalen a " + resultado + " Torr ";
    }

    //Ahora vamos a hacer el cambio independiente primero con psi

    if(unidad1.value=="Psi" && unidad2.value=="Bar"){
        resultado=numero/14.504;
        txtResultado.innerHTML= numero + " Psi equivalen a " + resultado + " Bar ";
    }
    if(unidad1.value=="Psi" && unidad2.value=="Pa"){
        resultado=numero*6895;
        txtResultado.innerHTML= numero + " Psi equivalen a " + resultado + " Pa ";
    }
    if(unidad1.value=="Psi" && unidad2.value=="Atm"){
        resultado=numero/14.696;
        txtResultado.innerHTML= numero + " Psi equivalen a " + resultado + " Atm ";
    }
    if(unidad1.value=="Psi" && unidad2.value=="Torr"){
        resultado=numero*51.715;
        txtResultado.innerHTML= numero + " Psi equivalen a " + resultado + " Torr ";
    }
    //Ahora vamos a hacer el cambio independiente primero con Pa

    if(unidad1.value=="Pa" && unidad2.value=="Bar"){
        resultado=numero/100000;
        txtResultado.innerHTML= numero + " Pa equivalen a " + resultado + " Bar ";
    }
    if(unidad1.value=="Pa" && unidad2.value=="Psi"){
        resultado=numero/6895;
        txtResultado.innerHTML= numero + " Pa equivalen a " + resultado + " Psi ";
    }
    if(unidad1.value=="Pa" && unidad2.value=="Atm"){
        resultado=numero/101300;
        txtResultado.innerHTML= numero + " Pa equivalen a " + resultado + " Atm ";
    }
    if(unidad1.value=="Pa" && unidad2.value=="Torr"){
        resultado=numero*133.3;
        txtResultado.innerHTML= numero + " Pa equivalen a " + resultado + " Torr ";
    }
//Ahora vamos a hacer el cambio independiente primero con Bar

if(unidad1.value=="Bar" && unidad2.value=="Pa"){
    resultado=numero/100000;
    txtResultado.innerHTML= numero + " Bar equivalen a " + resultado + " Pa ";
}
if(unidad1.value=="Bar" && unidad2.value=="Psi"){
    resultado=numero*14.504;
    txtResultado.innerHTML= numero + " Bar equivalen a " + resultado + " Psi ";
}
if(unidad1.value=="Bar" && unidad2.value=="Atm"){
    resultado=numero/1.013;
    txtResultado.innerHTML= numero + " Bar equivalen a " + resultado + " Atm ";
}
if(unidad1.value=="Bar" && unidad2.value=="Torr"){
    resultado=numero*750.1;
    txtResultado.innerHTML= numero + " Bar equivalen a " + resultado + " Torr ";
}
//Ahora vamos a hacer el cambio independiente primero con Atm

if(unidad1.value=="Atm" && unidad2.value=="Pa"){
    resultado=numero*101300;
    txtResultado.innerHTML= numero + " Atm equivalen a " + resultado + " Pa ";
}
if(unidad1.value=="Atm" && unidad2.value=="Psi"){
    resultado=numero*14.696;
    txtResultado.innerHTML= numero + " Atm equivalen a " + resultado + " Psi ";
}
if(unidad1.value=="Atm" && unidad2.value=="Bar"){
    resultado=numero/14.504;
    txtResultado.innerHTML= numero + " Atm equivalen a " + resultado + " Bar ";
}
if(unidad1.value=="Atm" && unidad2.value=="Torr"){
    resultado=numero*51.715;
    txtResultado.innerHTML= numero + " Atm equivalen a " + resultado + " Torr ";
}
//Ahora vamos a hacer el cambio independiente primero con Torr

if(unidad1.value=="Tor" && unidad2.value=="Pa"){
    resultado=numero*133.3;
    txtResultado.innerHTML= numero + " Torr equivalen a " + resultado + " Pa ";
}
if(unidad1.value=="Torr" && unidad2.value=="Psi"){
    resultado=numero/51.715;
    txtResultado.innerHTML= numero + " Torr equivalen a " + resultado + " Psi ";
}
if(unidad1.value=="Tor" && unidad2.value=="Bar"){
    resultado=numero/750.1;
    txtResultado.innerHTML= numero + " Torr equivalen a " + resultado + " Bar ";
}
if(unidad1.value=="Tor" && unidad2.value=="Atm"){
    resultado=numero/760;
    txtResultado.innerHTML= numero + " Torr equivalen a " + resultado + " Atm ";
}
//Ahora vamos a hacer el cambio con las Unidades de volumen 
if(unidad1.value=="Litros" && unidad2.value=="Litros"){
    resultado=numero*1;
    txtResultado.innerHTML= numero + " Litros equivalen a " + resultado + " Litros ";
}
if(unidad1.value=="Barriles" && unidad2.value=="Barriles"){
    resultado=numero*1;
    txtResultado.innerHTML= numero + " Barriles equivalen a " + resultado + " Barriles ";
}
if(unidad1.value=="ft^3" && unidad2.value=="ft^3"){
    resultado=numero*1;
    txtResultado.innerHTML= numero + " ft^3 equivalen a " + resultado + " ft^3 ";
}
if(unidad1.value=="m^3" && unidad2.value=="m^3"){
    resultado=numero*1;
    txtResultado.innerHTML= numero + " m^3 equivalen a " + resultado + " m^3 ";
}
if(unidad1.value=="Galon" && unidad2.value=="Galon"){
    resultado=numero*1;
    txtResultado.innerHTML= numero + " Gal equivalen a " + resultado + " Gal ";
}
//Ahora vamos a hacer el cambio independiente primero con Litros

if(unidad1.value=="Litros" && unidad2.value=="Barriles"){
    resultado=numero/158.987;
    txtResultado.innerHTML= numero + " Litros equivalen a " + resultado + " Barriles ";
}
if(unidad1.value=="Litros" && unidad2.value=="ft^3"){
    resultado=numero/28.317;
    txtResultado.innerHTML= numero + " Litros equivalen a " + resultado + " Pa ";
}
if(unidad1.value=="Litros" && unidad2.value=="m^3"){
    resultado=numero/1000;
    txtResultado.innerHTML= numero + " Litros equivalen a " + resultado + " m^3 ";
}
if(unidad1.value=="Litros" && unidad2.value=="Galon"){
    resultado=numero/3.785;
    txtResultado.innerHTML= numero + " Litros equivalen a " + resultado + " Gal ";
}
//Ahora vamos a hacer el cambio independiente primero con Barriles (pendiente)

if(unidad1.value=="Barriles" && unidad2.value=="Litros"){
    resultado=numero*158.987;
    txtResultado.innerHTML= numero + " Barriles equivalen a " + resultado + " Litros ";
}
if(unidad1.value=="Barriles" && unidad2.value=="ft^3"){
    resultado=numero*5.6146;
    txtResultado.innerHTML= numero + " Barriles equivalen a " + resultado + " Pa ";
}
if(unidad1.value=="Barriles" && unidad2.value=="m^3"){
    resultado=numero/6.2898;
    txtResultado.innerHTML= numero + " Barriles equivalen a " + resultado + " m^3 ";
}
if(unidad1.value=="Barriles" && unidad2.value=="Galon"){
    resultado=numero/0.02380;
    txtResultado.innerHTML= numero + " Barriles equivalen a " + resultado + " Gal ";
}
//Ahora vamos a hacer el cambio independiente primero con ft^3

if(unidad1.value=="ft^3" && unidad2.value=="Barriles"){
    resultado=numero/5.6146;
    txtResultado.innerHTML= numero + " ft^3 equivalen a " + resultado + " Barriles ";
}
if(unidad1.value=="ft^3" && unidad2.value=="Litros"){
    resultado=numero*28.317;
    txtResultado.innerHTML= numero + " ft^3 equivalen a " + resultado + " Litros ";
}
if(unidad1.value=="ft^3" && unidad2.value=="m^3"){
    resultado=numero/35.315;
    txtResultado.innerHTML= numero + " ft^3 equivalen a " + resultado + " m^3 ";
}
if(unidad1.value=="ft^3" && unidad2.value=="Galon"){
    resultado=numero*7.481;
    txtResultado.innerHTML= numero + " ft^3 equivalen a " + resultado + " Gal ";
}
//Ahora vamos a hacer el cambio independiente primero con m^3

if(unidad1.value=="m^3" && unidad2.value=="Barriles"){
    resultado=numero/5.6146;
    txtResultado.innerHTML= numero + " m^3 equivalen a " + resultado + " Barriles ";
}
if(unidad1.value=="m^3" && unidad2.value=="Litros"){
    resultado=numero*1000;
    txtResultado.innerHTML= numero + " m^3 equivalen a " + resultado + " Litros ";
}
if(unidad1.value=="m^3" && unidad2.value=="ft^3"){
    resultado=numero*35.315;
    txtResultado.innerHTML= numero + " m^3 equivalen a " + resultado + " ft^3 ";
}
if(unidad1.value=="m^3" && unidad2.value=="Galon"){
    resultado=numero*264.2;
    txtResultado.innerHTML= numero + " m^3 equivalen a " + resultado + " Gal ";
}
//Ahora vamos a hacer el cambio independiente primero con galon

if(unidad1.value=="Galon" && unidad2.value=="Barriles"){
    resultado=numero*0.0238;
    txtResultado.innerHTML= numero + " Galon equivalen a " + resultado + " Barriles ";
}
if(unidad1.value=="Galon" && unidad2.value=="Litros"){
    resultado=numero*3.785;
    txtResultado.innerHTML= numero + " Galon equivalen a " + resultado + " Litros ";
}
if(unidad1.value=="Galon" && unidad2.value=="ft^3"){
    resultado=numero/7.48;
    txtResultado.innerHTML= numero + " Galon equivalen a " + resultado + " ft^3 ";
}
if(unidad1.value=="Galon" && unidad2.value=="m^3"){
    resultado=numero/264.2;
    txtResultado.innerHTML= numero + " Galon equivalen a " + resultado + " m^3 ";
}

}