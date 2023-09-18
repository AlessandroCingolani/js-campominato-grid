const container = document.querySelector('.container')

reset();


for(let i = 1; i <= 100;i++) {
  const square = genSquare(i);
  
  square.addEventListener('click',function(){
    console.log(this.id);
    this.classList.toggle('checked')
  });
  
  container.append(square);
}







// square generator 
function genSquare(index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.id = index;
  return newSquare;
}


// reset function
function reset(){
  container.innerHTML ='';
}