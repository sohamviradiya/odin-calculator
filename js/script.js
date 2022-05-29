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
        if(b==0)
            return 'error';
        return first_operand/second_operand;
    }
    else if(operator === '%')
    {
        if(b==0)
            return 'error';
        return first_operand%second_operand;
    }
    else
        return first_operand;
}

let over_flaw=0;
function freezescreen(){
    for(let i=0;i<10;i++)
        key_dict[`${i}`].onclick= () => {};
    screen.style.color='#FF0000';
    over_flaw=1;
}

//set keys
for(let i=0;i<10;i++)
    key_dict[`${i}`].onclick= () => {check_validity(screen.textContent) ? first_operanddsecond_operandtoscreen(i) : freezescreen()};

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

//TO DO first_operanddsecond_operand '='
key_dict['+/-'].onclick = () => { screen.textContent = '-' +screen.textContent };
key_dict['.'].onclick = () => {screen.textContent.includes('.') ? first_operanddsecond_operandtoscreen('') : first_operanddsecond_operandtoscreen('.')};

key_dict['E'].onclick = () => { screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
    if(over_flaw==1){
        screen.style.color='#000000';
        for(let i=0;i<10;i++)
            key_dict[`${i}`].onclick= () => {check_validity(screen.textContent) ? first_operanddsecond_operandtoscreen(i) : freezescreen()};
    }    
}

start=key_dict['C'];

start.onclick = () => {
    clearscreen();
    first_operand=0;
    second_operand=0;
    operator='=';
};


