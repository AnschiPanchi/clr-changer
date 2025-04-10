const buttons= document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',function(e){
        if(e.target.className==='yellow'){
            document.querySelector('body').style.backgroundColor='yellow';
        }
        if(e.target.className==='green'){
            document.querySelector('body').style.backgroundColor='green';
        }
        if(e.target.className==='red'){
            document.querySelector('body').style.backgroundColor='red';
        }
        if(e.target.className==='blue'){
            document.querySelector('body').style.backgroundColor='blue';
        }

    })
    button.addEventListener('dblclick',function(e){
        if(e.target.className==='yellow'){
            document.querySelector('body').removeAttribute('style');
        }
        if(e.target.className==='blue'){
            document.querySelector('body').removeAttribute('style');
        }
        if(e.target.className==='red'){
            document.querySelector('body').removeAttribute('style');
        }
        if(e.target.className==='green'){
            document.querySelector('body').removeAttribute('style');
        }
    })
    
});