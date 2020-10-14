const game = () =>{
    let pScore = 0
    let cScore = 0

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click',() =>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const ComputerHand = document.querySelector('.computer-hand')


        const computerOptions = ['rock', 'paper', 'scissors']

        options.forEach( option=>{
            option.addEventListener('click', function(){
                console.log(playerHand)
                const computerNumber = Math.floor(Math.random() *3)
                const computerChoise = computerOptions[computerNumber]

                compareHands(this.textContent, computerChoise)
               

                playerHand.src = `./assets/${this.textContent}.png`
                ComputerHand.src = `./assets/${computerChoise}.png`
            })
        })

      
       
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoise) => {
        const winner = document.querySelector('.winner')
        if( playerChoice === computerChoise){
            winner.textContent = 'it is a tie'
            return
        }

        if(playerChoice === 'rock'){
            if( computerChoise === 'scissors'){
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }
          
        }

        if(playerChoice === 'paper'){
            if( computerChoise === 'scissors'){
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }
          
        }

        if(playerChoice === 'scissors'){
            if( computerChoise === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }
         
        }
    }

    startGame()
    playMatch()
}




game()
