const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
let str = "";
for(let button of buttons){
    button.addEventListener('click',(e)=>{
        // console.log('Clicked');
        let button_text = e.target.innerText;
        // console.log(button_text); 
        if(button_text === 'C'){
            screen.value = '';
        }
        else if(button_text === 'x'){
            screen.value += '*';
        }
        else if(button_text === '='){
            try{screen.value = eval(screen.value);}
            catch{
                screen.value = "Invalid Operation";
            }
        }
        else{
        screen.value += button_text;
        }
    })
}