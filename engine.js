let buttonDark = document.getElementById('button_dark');
let buttonBackspace = document.getElementById('button_backspace');
let buttonCapslock = document.getElementById('button_capslock');
let wapper = document.getElementById('wapper');
let buttonsChar = document.getElementsByClassName('button_char');
let buttonsSymbol = document.getElementsByClassName('button_symbol');

let darkTheme = false;
let isCapslock = false;
let isShift = false;
let isGlow = false;

//FOR INPUT

let isCursor = false;

let displayValue = '';

let display = document.getElementById('display');
let keys = document.getElementById('keys');
let buttonsAll = document.getElementsByClassName('button');

//INPUT

//START MOUSE LISTENER

for(let i = 0; i < buttonsAll.length; i++){

buttonsAll[i].addEventListener('mouseenter', e => {

    if(e.target.type === 'button'){
        e.target.style.transitionDuration = '0.2s';

    }

  });

  buttonsAll[i].addEventListener('mouseleave', e => {
    if(e.target.type === 'button'){
    
       e.target.style.transitionDuration = '2s';  

    }
  });

  buttonsAll[i].style.transitionDuration = '2s'

}

//END MOUSE LISTENER

//START BACKSPACE
buttonBackspace.onclick = (event) =>{

    let virtualDisplay ='';

for( let i = 0; (i + 1) < displayValue.length; i++ ){


virtualDisplay = virtualDisplay + displayValue[i];

}

displayValue = virtualDisplay;
display.value = virtualDisplay;


}
//END BACKSPACE

//DARK THEME START

buttonDark.onclick = (event) => {


if(darkTheme === false){

    wapper.style.backgroundColor ='rgb(50, 50, 70)';
    buttonDark.style.borderStyle = 'solid';
    buttonDark.style.borderColor = 'rgba(230, 209, 200, 0.7)';
    buttonDark.style.borderWidth = '1px';
    

  darkTheme = true;

}

   else if(darkTheme === true){

    wapper.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    buttonDark.style.borderStyle = 'none';
    

    darkTheme = false;

   }

}

//DARK THEME END

//GLOW BUTTONS START
document.getElementById('button_glow').onclick = (event) => {


    switch(isGlow){

case false:
    for(let i = 0; i < buttonsAll.length; i++){
        buttonsAll[i].style.color = '#FFDE40';
        }
        display.style.backgroundColor = 'rgba(255, 222, 64, 0.65)';
        document.getElementById('button_glow').style.borderColor = 'rgba(230, 209, 200, 0.7)';
        document.getElementById('button_glow').style.borderStyle = 'solid';
        document.getElementById('button_glow').style.borderWidth = '1px';
        isGlow = true;
        break;
case true:
    for(let i = 0; i < buttonsAll.length; i++){
        buttonsAll[i].style.color = 'black';
        }
        display.style.backgroundColor = 'rgba(86, 128, 177, 0.7)';
        document.getElementById('button_glow').style.borderStyle = 'none';
        isGlow = false;
        break;

    } 

}
//GLOW BUTTONS END


//DISPLAY INPUT START
keys.onclick = (event) => {

    write();
    shift();
    capslock();


if(event.target.id === 'button_enter'){

    displayValue = displayValue + '\n';
    isCursor = false;

}

    
function write(){

    if(isCapslock == false){

        if(event.target.type === 'button'){
    
            if(event.target.id !== "button_shift_1" && event.target.id !== "button_shift_2" && event.target.id !== "button_enter" && event.target.id !== "button_backspace" && event.target.id !== "button_capslock" && event.target.id !== "button_dark" && event.target.id !== "button_glow"){
    
                console.log(event.target.innerText);
                displayValue = displayValue + event.target.innerText.toLowerCase();
    
            }
        
        }
    
    
    
    }
    
    else if(isCapslock == true){
    
        if(event.target.type === 'button'){
    
            if(event.target.id !== "button_shift_1" && event.target.id !== "button_shift_2" && event.target.id !== "button_enter" && event.target.id !== "button_backspace" && event.target.id !== "button_capslock" && event.target.id !== "button_dark" && event.target.id !== "button_glow"){
    
                console.log(event.target.innerText);
                displayValue = displayValue + event.target.innerText.toUpperCase();
    
            }
        
        }
    }

    
}

function shift(){



    if(event.target.id === 'button_shift_1' || event.target.id === 'button_shift_2'){


        document.getElementById('button_shift_1').style.transitionDuration = '0.2s';
        document.getElementById('button_shift_2').style.transitionDuration = '0.2s';

        for(let i = 0; i < buttonsSymbol.length; i++){

            buttonsSymbol[i].style.transitionDuration = '0.2s';

        }

        function shiftTimeDuration(){


            for(let i = 0; i < buttonsSymbol.length; i++){

                buttonsSymbol[i].style.transitionDuration = '2s';

            }

            document.getElementById('button_shift_1').style.transitionDuration = '2s';
            document.getElementById('button_shift_2').style.transitionDuration = '2s';


        }

        if (isShift === false){

         document.getElementById('keys_1').getElementsByTagName('button')[0].innerText = '~';
         document.getElementById('keys_1').getElementsByTagName('button')[1].innerText = '!';
         document.getElementById('keys_1').getElementsByTagName('button')[2].innerText = '@';
         document.getElementById('keys_1').getElementsByTagName('button')[3].innerText = '#';
         document.getElementById('keys_1').getElementsByTagName('button')[4].innerText = '$';
         document.getElementById('keys_1').getElementsByTagName('button')[5].innerText = '%';
         document.getElementById('keys_1').getElementsByTagName('button')[6].innerText = '^';
         document.getElementById('keys_1').getElementsByTagName('button')[7].innerText = '&';
         document.getElementById('keys_1').getElementsByTagName('button')[8].innerText = '*';
         document.getElementById('keys_1').getElementsByTagName('button')[9].innerText = '(';
         document.getElementById('keys_1').getElementsByTagName('button')[10].innerText = ')';
         document.getElementById('keys_1').getElementsByTagName('button')[11].innerText = '_';
         document.getElementById('keys_1').getElementsByTagName('button')[12].innerText = '+';

         document.getElementById('keys_2').getElementsByTagName('button')[11].innerText = '{';
         document.getElementById('keys_2').getElementsByTagName('button')[12].innerText = '}';

         document.getElementById('keys_3').getElementsByTagName('button')[10].innerText = ':';
         document.getElementById('keys_3').getElementsByTagName('button')[11].innerText = '"';
         document.getElementById('keys_3').getElementsByTagName('button')[12].innerText = '|';

         document.getElementById('keys_4').getElementsByTagName('button')[8].innerText = '<';
         document.getElementById('keys_4').getElementsByTagName('button')[9].innerText = '>';
         document.getElementById('keys_4').getElementsByTagName('button')[10].innerText = '?';


         for(let i = 0; i < buttonsSymbol.length; i++){

            buttonsSymbol[i].style.borderColor = 'rgba(230, 209, 200, 0.3)';
            buttonsSymbol[i].style.borderStyle = 'solid';
            buttonsSymbol[i].style.borderWidth = 'thin';   

        }
    
          document.getElementById('button_shift_1').style.borderColor = 'rgba(230, 209, 200, 0.7)';
          document.getElementById('button_shift_1').style.borderStyle = 'solid';
          document.getElementById('button_shift_1').style.borderWidth = '1px';
          document.getElementById('button_shift_2').style.borderColor = 'rgba(230, 209, 200, 0.7)';
          document.getElementById('button_shift_2').style.borderStyle = 'solid';
          document.getElementById('button_shift_2').style.borderWidth = '1px';
       
           isShift = true;
       }
       
       else if(isShift === true){

        document.getElementById('keys_1').getElementsByTagName('button')[0].innerText = '`';
         document.getElementById('keys_1').getElementsByTagName('button')[1].innerText = '1';
         document.getElementById('keys_1').getElementsByTagName('button')[2].innerText = '2';
         document.getElementById('keys_1').getElementsByTagName('button')[3].innerText = '3';
         document.getElementById('keys_1').getElementsByTagName('button')[4].innerText = '4';
         document.getElementById('keys_1').getElementsByTagName('button')[5].innerText = '5';
         document.getElementById('keys_1').getElementsByTagName('button')[6].innerText = '6';
         document.getElementById('keys_1').getElementsByTagName('button')[7].innerText = '7';
         document.getElementById('keys_1').getElementsByTagName('button')[8].innerText = '8';
         document.getElementById('keys_1').getElementsByTagName('button')[9].innerText = '9';
         document.getElementById('keys_1').getElementsByTagName('button')[10].innerText = '0';
         document.getElementById('keys_1').getElementsByTagName('button')[11].innerText = '-';
         document.getElementById('keys_1').getElementsByTagName('button')[12].innerText = '=';

         document.getElementById('keys_2').getElementsByTagName('button')[11].innerText = '[';
         document.getElementById('keys_2').getElementsByTagName('button')[12].innerText = ']';

         document.getElementById('keys_3').getElementsByTagName('button')[10].innerText = ';';
         document.getElementById('keys_3').getElementsByTagName('button')[11].innerText = "'";
         document.getElementById('keys_3').getElementsByTagName('button')[12].innerText = '\\';

         document.getElementById('keys_4').getElementsByTagName('button')[8].innerText = ',';
         document.getElementById('keys_4').getElementsByTagName('button')[9].innerText = '.';
         document.getElementById('keys_4').getElementsByTagName('button')[10].innerText = '/';


         for(let i = 0; i < buttonsSymbol.length; i++){

            buttonsSymbol[i].style.borderStyle = 'none';       

        }
       
           document.getElementById('button_shift_1').style.borderStyle = 'none';
           document.getElementById('button_shift_2').style.borderStyle = 'none';
           isShift = false;
       
       }

       setTimeout(shiftTimeDuration, 300);
           
  }  

}

function capslock(){

    if(event.target.id === 'button_capslock'){

       
        function charTimeDuration(){

            for(let  i = 0; i < buttonsAll.length; i++){

                buttonsAll[i].style.transitionDuration = '2s';           

             }  

         }

        if (isCapslock === false){
      
             for(let  i = 0; i < buttonsChar.length; i++){

                buttonsChar[i].style.transitionDuration = '0.2s'; 
                buttonsChar[i].style.fontSize = '17px'; 
                buttonsChar[i].style.borderColor = 'rgba(230, 209, 200, 0.3)';
                buttonsChar[i].style.borderStyle = 'solid';
                buttonsChar[i].style.borderWidth = 'thin';   
                
             }  
            
             setTimeout(charTimeDuration, 300);
        
          buttonCapslock.style.borderColor = 'rgba(230, 209, 200, 0.7)';
          buttonCapslock.style.borderStyle = 'solid';
          buttonCapslock.style.borderWidth = '1px';
          isCapslock = true;
       }
       
       else if(isCapslock === true){


        for(let  i = 0; i < buttonsChar.length; i++){

            buttonsChar[i].style.transitionDuration = '0.2s'; 
            buttonsChar[i].style.fontSize = '14px';    
            buttonsChar[i].style.borderStyle = 'none'; 


         }
         
         setTimeout(charTimeDuration, 300);
       
           buttonCapslock.style.borderStyle = 'none';
           isCapslock = false;
       
       }
       
           }


}

display.value = displayValue + '|';

isCursor = false;

}
//DISPLAY INPUT END


//CURSOR FUNCTION START

function cursor(){

    display.value = '';

    switch(isCursor){
  
case true:
    display.value = displayValue;
    break;
case false:
    display.value = displayValue + '|';
    break;

    }
       
     }

//CURSOR FUNCTION END

function setCursor(){

    switch(isCursor){
  
        case true:
            isCursor = false;
            break;
        case false:
            isCursor = true;
            break;
        
        
            }

}
    

setInterval(cursor, 500);
setInterval(setCursor, 500);
    
    
  