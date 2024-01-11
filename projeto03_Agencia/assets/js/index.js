window.addEventListener('load',function(){

    const banner = document.querySelector('.banner');
    const title = banner.querySelector('.box-banner-title')
    const p = document.createElement('p');
    p.innerHTML = "Adicionado depois de carregado";
    p.setAttribute('class','outra')//onde muda de cor
    //p.style.color='red'; //mudando a cor com java
    title.appendChild(p)
    console.log(title);
    
});

