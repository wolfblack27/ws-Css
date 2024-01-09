window.onload = function () {
  const form = document.querySelector("form");
  const btnCadastrar = document.querySelector(".btn-submit");
  btnCadastrar.addEventListener("click", function () {
    const titulo = form.querySelector('[name="title"]');
    const preco = form.querySelector('#price');
    const data = form.querySelector('#purchase_date');
    const cambio = form.querySelector('[name="gear"]');
    const unicoDono = form.querySelector('[name="unique_owner"]');
    const textaera = form.querySelector('[name="description"]');
    console.log(titulo.value); 
    console.log(preco.value);
    console.log(textaera.value);
    console.log(data.value);
    console.log(unicoDono.value);
    console.log(cambio.value);
    
    textaera.addEventListener('mouseover',function(){
        //alert("certo");
        textaera.setAttribute('rows',30);
    });

    /*obtendo e pegando os valores do check*/
    const opcionais = form.querySelectorAll('[name="optional[]"]');
    for (let checkbox of opcionais) {
      if (checkbox.checked) console.log(checkbox.value);
    }
    

});

  /*alert('aqui');
    console.log('aqui');*/
};
