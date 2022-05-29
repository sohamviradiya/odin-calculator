const screen = document.querySelector('.screen');
const operations_container = document.querySelector('.operations-container');
const digits_container = document.querySelector('.digits-container');

addtoscreen = (string) => {screen.textContent=screen.textContent+string};
pasteonscreen = (string) => screen.textContent=string;
clearscreen = () => screen.textContent="";

key_dict={}
let current_number = 0;
let first_operand = 0;
let operator='=';
let second_operand = 0;

digits_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
}); 

operations_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
}); 

function operation(a,b,operator)
{
    if(operator === '+')
        return a+b;
    else if(operator === '-')
        return a-b;
    else if(operator === '*')
        return a*b;
    else if(operator === '/')
    {  
        if(b==0)
            return 'error';
        return a/b;
    }
    else if(operator === '%')
    {
        if(b==0)
            return 'error';
        return a%b;
    }
}

function freezescreen(){
    // TO DO add content
}

//set key actions
for(let i=0;i<10;i++)
    key_dict[`${i}`].onclick= () => {check_validity(Number(screen.textContent))?addtoscreen(i):freezescreen()};

key_dict['+'].onclick = () => { operator = '+'};
key_dict['-'].onclick = () => { operator = '-'};
key_dict['*'].onclick = () => { operator = '*'};
key_dict['/'].onclick = () => { operator = '/'};
key_dict['%'].onclick = () => { operator = '%'};
//TO DO add '='
key_dict['+/-'].onclick = () => { screen.textContent = '-' +screen.textContent };
key_dict['.'].onclick = () => {addtoscreen('.')};
key_dict.['E'].onclick = () => { screen.textContent = screen.textContent.substring(0,screen.textContent.length-1)}

check_validity= (number) => (number<10**16);

start=key_dict['C'];

function calculate(){
    //TO DO add content

    first_operand = scan_num();
}

start.onclick = () => {
        calculate();
};


