window.addEventListener('load',function(){

    const banner = document.querySelector('.banner');
    const title = banner.querySelector('.box-banner-title')
    const pai = document.querySelector('.services-container')
    const p = document.createElement('p');
    p.innerHTML = "Adicionado depois de carregado";
    p.setAttribute('class','outra')//onde muda de cor
    //p.style.color='red'; //mudando a cor com java
    title.appendChild(p)
    console.log(pai);
    creator(pai);
    

});


creator = function boxCreator(pai){
    const serviceBox = document.createElement('div');
    serviceBox.setAttribute('class','service-box');
    
    const serviceTitle = document.createElement('div');
    serviceTitle.setAttribute('class','service-title');
    serviceTitle.setAttribute('id','design-box');

    const servicesDescription = document.createElement('div')
    servicesDescription.setAttribute('class','services-description');

    const paragrafoTitle = document.createElement('p');
    const paragrafoDes = document.createElement('p');
    const hTitulo = document.createElement('h3');
    hTitulo.setAttribute('id','gerenciamento-title')

    paragrafoTitle.innerHTML='Marisa';
    hTitulo.innerHTML='Veia';
    paragrafoDes.innerHTML = "Lorem ipsum dolor sit amet consectetur"; 
    

    serviceTitle.appendChild(paragrafoTitle);
    servicesDescription.appendChild(hTitulo);
    servicesDescription.appendChild(paragrafoDes);

    serviceBox.appendChild(serviceTitle);
    serviceBox.appendChild(servicesDescription);
    
    
    pai.appendChild(serviceBox);
}

/*




*/