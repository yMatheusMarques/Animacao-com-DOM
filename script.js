let span = document.querySelector('.conteudo span')

span.addEventListener('click', function(){
  let conteudo = document.querySelector('.conteudo p')

  if(conteudo.classList.contains('mostrar')){
    span.innerHTML = 'Ver mais!'
    conteudo.classList.remove('mostrar')
  
  }else{
    span.innerHTML = 'Ocultar'
    conteudo.classList.add('mostrar')
  }
})