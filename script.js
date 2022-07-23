const screen = document.querySelector('.screen');
const operations_container = document.querySelector('.operations-container');
const digits_container = document.querySelector('.digits-container');

addtoscreen = (string) => { screen.textContent=screen.textContent+string};
pasteonscreen = (string) => screen.textContent=string;
clearscreen = () => screen.textContent="";
check_validity= (string) =>  (string.length<20);
    
key_dict={}
let current_number = 0;
let first_operand = 0;
let operator='';
let second_operand = 0;

function scan_num(){
    first_operand = Number(screen.textContent);
    console.log(first_operand);
    clearscreen();
}

digits_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
}); 

operations_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
}); 

function operation()
{
    if(operator === '+')
        return first_operand+second_operand;
    else if(operator === '-')
        return first_operand-second_operand;
    else if(operator === '*')
        return first_operand*second_operand;
    else if(operator === '/')
    {  
        if( second_operand ==0)
            return 'error';
        return first_operand/second_operand;
    }
    else if(operator === '%')
    {
        if(second_operand == 0)
            return 'error';
        return first_operand%second_operand;
    }
    else
        return first_operand;
}

for(let i=0;i<10;i++)
    key_dict[`${i}`].onclick= () => {check_validity(screen.textContent) ? addtoscreen(i) : addtoscreen('')};

key_dict['+'].onclick = () => { operator = '+';
    scan_num()};

key_dict['-'].onclick = () => { operator = '-';
    scan_num()};

key_dict['*'].onclick = () => { operator = '*';
    scan_num()};

key_dict['/'].onclick = () => { operator = '/';
    scan_num()};

key_dict['%'].onclick = () => { operator = '%';
    scan_num()};

key_dict['='].onclick = () => { 
    second_operand = Number(screen.textContent);
    console.log(second_operand);
    screen.textContent = operation();
}

key_dict['+/-'].onclick = () => { screen.textContent = '-' +screen.textContent };
key_dict['.'].onclick = () => {screen.textContent.includes('.') ? addtoscreen('') : addtoscreen('.')};
key_dict['E'].onclick = () => { screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);}

start=key_dict['C'];
start.onclick = () => {
    clearscreen();
    first_operand=0;
    second_operand=0;
    operator='=';
};


