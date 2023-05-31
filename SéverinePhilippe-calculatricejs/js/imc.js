



function calculimc(){

    
    const nom = document.getElementById("nom");
    const poid = document.getElementById("poid");
    const taille = document.getElementById("taille");
    
    nom.style.border ="none";
    poid.style.border ="none";
    taille.style.border ="none";    
    
    if (!nom.value || !poid.value || !taille.value)
    {
        if (!nom.value && !poid.vale && !taille.value) {
            nom.style.border = "5px solid red";
            poid.style.border = "5px solid red";
            taille.style.border = "5px solid red";
            alert("Veuillez indiquer toutes les informations nécessaire pour le calcul");

        }
        else if (!nom.value) {
            nom.style.border = "5px solid red";
            alert("Veuillez indiquer votre  nom");
        }

        else if (!poid.value) {
            poid.style.border = "5px solid red";
            alert("Veuillez indiquer votre poid");
        }

        else  {
            taille.style.border = "5px solid red";
           alert("Veuillez entrer votre taille en nombre decimal avec un point")
        
        }
    }
    else 
   
    {

        let imc = poid.value / (taille.value*taille.value);
       
        const resul = document.getElementById("final");
        
        if ( imc <= 18.4) {

            resul.innerHTML= (nom.value +" " +'<br>'+"Votre poid est de"+ " "+poid.value+ "kg"+ "<br>"+"Votre taille est de" +" "+taille.value+ "cm"+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+ "Vous êtes maigre");
            resul.style.color="blue";
        } 
        else if (imc > 18.5 && imc <= 24.9) {

            resul.innerHTML= (nom.value+" " +'<br>'+"Votre poid est de"+ " "+poid.value+ "kg"+ "<br>"+"Votre taille est de" +" "+taille+ "cm" +"<br>" +"Votre imc est de "+" "+ imc+ "<br>"+ "Vous êtes de corpulence normale");
            resul.style.color="green";
        } 
        else if (imc >= 25 && imc <= 29.9) {

            resul.innerHTML= (nom.value +" " +'<br>'+"Votre poid est de"+ " "+poid.value+ "kg"+ "<br>"+"Votre taille est de" +" "+taille.value+"cm"+"<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en surpoids");
            resul.style.color="yellow";

        } else if (imc >= 30 && imc <= 34.9) {

            resul.innerHTML= (nom.value +" " +'<br>'+"Votre poid est de"+ " "+poid.value+"kg"+"<br>"+"Votre taille est de" +" "+taille.value+"cm "+"<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité modéré ");
            resul.style.color="orange";

        } else if (imc >= 35 && imc <= 39.9) {

            resul.innerHTML= (nom.value +" " +'<br>'+"Votre poid est de"+ " "+poid.value+"kg"+"<br>"+"Votre taille est de" +" "+taille.value+"cm"+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité sévère ");
            resul.style.color="brown";

        } else {
            resul.innerHTML= (nom.value +" " +'<br>'+"Votre poid est de"+ " "+poid.value+"kg"+ "<br>"+"Votre taille est de" +" "+taille.value+"cm"+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité morbide ");
            resul.style.color="red";

        }
    }
     
}




    
    