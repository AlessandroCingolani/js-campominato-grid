const container = document.querySelector('.container')
const choiseLevel = document.querySelector('.choise-level')

reset();


function init(){
  for(let i = 1; i <= 100;i++) {
    const square = genSquare(i);
    
    square.addEventListener('click',function(){
      console.log(this.id);
      this.classList.toggle('checked')
    });
    
    container.append(square);
  }
}






// generator start btn
function genBtnStart (){
  const btn = document.createElement('button');
  btn.className = 'btn-play'
  btn.innerHTML = 'Start';
  btn.addEventListener('click',function(){
    container.innerHTML = '';
    init()
  })
  return btn;
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
  choiseLevel.innerHTML ='';
  choiseLevel.append(genBtnStart());
}