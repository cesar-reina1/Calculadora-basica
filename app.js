const btn = document.querySelectorAll('button');
const process = document.getElementById('process');
const total = document.getElementById('total');

btn.forEach(item =>{
    item.onclick = ()=>{
        //console.log(item.id);
        switch(item.id){
            case 'clear':
                process.innerText = "";
                total.innerText = "";
                break;
            case 'backspace':
                process.innerText = process.innerText.substring(0,(process.innerText.length) -1);
                break;
            case 'equal':
                if(process.innerText != ""){
                    process.innerText = eval(process.innerText);
                    total.innerText = "";
                    break;
                }
                total.innerText = 'Null';
                setTimeout(() => (total.innerText = ""),2000);
                break;
        }
        if(item.id !=='clear' && item.id !=='backspace' && item.id !=='equal'){
            console.log(item.id)
            process.innerText += item.id;
            total.innerText = eval(process.innerText);
        }
    }
})
