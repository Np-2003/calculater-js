const input=document.getElementById('input')
const label=document.getElementById('label')
const buttons=document.querySelectorAll('button')
const ac=document.getElementById('ac')
const clear=document.getElementById('delete')
const answer=document.getElementById('answer')

// add value to input 
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        input.value+=button.value;
        button.classList.add('clicked')

        setTimeout(()=>{
            button.classList.remove('clicked')
        },200);
    })
})

// reset input value 
ac.addEventListener('click',()=>{
    input.value="";
    label.textContent="";
    ac.classList.add('splbtnclicked')

        setTimeout(()=>{
            ac.classList.remove('splbtnclicked')
        },200);
})

// clear last one value 
clear.addEventListener('click',()=>{
    const value=input.value;
    const clearone=value.slice(0,-1);
    input.value=clearone;

    clear.classList.add('splbtnclicked')

    setTimeout(()=>{
        clear.classList.remove('splbtnclicked')
    },200);
})

answer.addEventListener('click',()=>{
    const value=input.value
    document.getElementById('label').innerHTML=value;
    input.value="";
    const calculate=label.textContent;
    const ans=eval(calculate)
    input.value=ans;
})