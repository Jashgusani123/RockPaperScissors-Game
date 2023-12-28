let score = {
  Win : 0,
  Lost : 0,
  Tie : 0,
};
function massage(user , com , j){
  alert(`You Have Chosen ${user}. Computer Choice ${com} and ${j}
  
  Win: ${score.Win}, Lost: ${score.Lost}, Tie: ${score.Tie}  
  `);
}
function checkComputer() {
  let computer1 = Math.random() * 3;
  if (computer1 > 0 && computer1 <= 1) {
    return 'Rock';

  } else if (computer1 > 1 && computer1 <= 2) {
    return 'Paper';

  } else {
    return 'Scissors';

  }
}
function whoWin(user , Com) {
  if (user === 'Paper') {
    if (Com === 'Paper') {
      score.Tie++;
      return `It's Tie`;
    }
    else if (Com === 'Scissors') {
      score.Lost++;
      return `Computer Won`;
    }
    else if (Com === 'Rock') {
      score .Win++;
      return 'You Won';
    }

  } else if (user === 'Rock') {
    if (Com === 'Paper') {
      score.Lost++;
      return `Computer Won`;
    }
    else if (Com === 'Scissors') {
      score.Win++;
      return `You Won`;
    }
    else if (Com === 'Rock') {
      score.Tie++;
      return `It's A Tie`;
    }

  } else if (user === 'Scissors'){
    if (Com === 'Paper') {
      score.Win++;
      return `You Won`;
    }
    else if (Com === 'Scissors') {
      score.Tie++;
      return `It's A Tie`;
    }
    else if (Com === 'Rock') {
      score.Lost++;
      return 'Computer Won';
    }
  }
}