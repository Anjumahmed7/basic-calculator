(function(){
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let equal = document.querySelector('.btn-eq');
  let clear = document.querySelector('.btn-cl');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  })

  clear.addEventListener('click', () => {
    screen.value = '';
  });

  equal.addEventListener('click', (e) => {
    if(screen.value === ''){
      screen.value = 'No value!';
    }else{
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
})();