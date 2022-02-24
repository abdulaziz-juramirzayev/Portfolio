let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun')
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active')
    }else{
        document.body.classList.remove('active')
    }
}



document.querySelector('.button').addEventListener('click', function(){
    a = document.querySelector('.ekran')
    a.value = parseInt(a.value)+1
    console.log(a.value);
})

document.querySelector('.delete').addEventListener('click', function(){
    a = document.querySelector('.ekran')
    och = 0
    a.value = och 
    console.log(och);
})
