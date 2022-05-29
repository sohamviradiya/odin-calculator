const screen = document.querySelector('.screen');
const operations_container = document.querySelector('.operations-container');
const digits_container = document.querySelector('.digits-container');

addtoscreen = (string) => {screen.textContent=screen.textContent+string};
pasteonscreen = (string) => screen.textContent=string;
clearscreen = () => screen.textContent="";

key_dict={}
let current_number = 0;
let first_operand = 0;
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

check_validity= (number) => (number<10**16);

start=key_dict['C'];

start.onclick = () => {
        
};


