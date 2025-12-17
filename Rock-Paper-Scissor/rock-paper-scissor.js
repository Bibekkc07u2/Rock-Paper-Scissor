  let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Tied: 0
  };

 let isAutoplaying = false;
 let intervalId;
  function autoplay() {
    
   if(!isAutoplaying)
   {
    intervalId = setInterval(function(){

      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoplaying = true;
  }
  else
  {
    clearInterval(intervalId);
    isAutoplaying = false;
  }
   }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if(result === 'You win.')
        {
          score.Wins+= 1;
        }
        else if(result === 'You lose.')
        {
          score.Loses+= 1;
        }
        else{
          score.Tied+= 1;
        }

        localStorage.setItem('score',JSON.stringify(score));

         
         updateScore();
       
         
document.querySelector('.js-result')
  .innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="all-image">
<img src="images/${computerMove}-emoji.png" class="all-image">
Computer`;
}

      function updateScore ()
      {
 document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins} Loses: ${score.Loses} Tied: ${score.Tied}`;

      }
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }