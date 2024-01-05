window.onload = function(){

    const form = document.querySelector('form');
    const btnCadastrar = document.querySelector('.btn-submit')
    btnCadastrar.addEventListener('click',function(){
       const titulo = form.querySelector('[name="title"]')
       const unicoDono = form.querySelector('[name="unique_owner"]')
      console.log(titulo.value,unicoDono.value);
       
      /*obtendo e pegando os valores do check*/ 
       const opcionais = form.querySelectorAll('[name="optional[]"]')
       for (let checkbox of opcionais) {
        if (checkbox.checked)
          
          console.log(checkbox.value);
      } 
       

       
    });
    
    /*alert('aqui');
    console.log('aqui');*/
};