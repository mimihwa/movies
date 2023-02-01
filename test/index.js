const generate = document.querySelector('.generateNumber form');
const generateInput = document.querySelector('.generateNumber input');
const guess = document.querySelector('.guessNumber form');
const guessInput = document.querySelector('.guessNumber input');
const result = document.querySelector('.result')

function handleGenerate(e){
    e.preventDefault();
    console.log(generateInput.value);
}
generate.addEventListener("submit", handleGenerate);

function handleGuess(e){
    e.preventDefault();
    console.log(guessInput.value);
}
guess.addEventListener("submit", handleGuess);


if(handleGenerate > handleGuess){
    result.innerHTML = 'You Lose'
}else{
    result.innerHTML = 'You Win'
}



// 1. 0이상 값만 입력가능
// 2. input 값 필수입력
// 3. input 값(value) 받아오기
// 4. 내가 입력항 수 내의 랜덤값 받아오기
// 5. 두 수 비교하기
// 6. 비교 후 승패 출력 