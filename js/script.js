const container = document.querySelector('.container')

reset();


for(let i = 0; i < 100;i++) {
  const square = document.createElement('div');
  square.className = 'square';
  container.append(square)
}


function reset(){
  container.innerHTML ='';
}