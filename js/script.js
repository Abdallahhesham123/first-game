let themeToggler =document.querySelector('.theme-toggler');
themeToggler.addEventListener('click',()=>{

    themeToggler.classList.toggle('active');
    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active')

    }else{
        document.body.classList.remove('active')
    }
})

document.querySelectorAll('.theme-colors .color').forEach((item)=>{

    item.addEventListener('click',()=>{
        let background = item.style.background;
        document.querySelector(':root').style.setProperty('--main-color',background);

    })

})

let theme =document.querySelector('.themes-container');
document.querySelector('#theme-open').addEventListener('click',()=>{

    theme.classList.add('active');
    document.body.style.paddingRight='350px';

})


document.querySelector('#theme-close').addEventListener('click', () => {

    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';

});

