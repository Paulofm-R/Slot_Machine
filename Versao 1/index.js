let playerCredits = 20;
let playerBet = 0;

let quantNum = 3;
let moreCredits = 0;

let isPlay = true;

const playerInfo = document.querySelector('#playerInfo')
playerInfo.innerHTML = `Credits: ${playerCredits}€`;


document.querySelector("#play").addEventListener("click", () => {
    if (playerCredits == 0)
        newWarning("Do you need credits");
    else {
        if (isPlay) {
            isPlay = false;

            const radioButtons = document.querySelectorAll('input[name="bet"]');
            radioButtons.forEach((radioButton) => {
                if (radioButton.checked) {
                    playerBet = radioButton.value;
                }
            })

            let numbers = [];

            let num1 = document.querySelector("#num1");
            let num2 = document.querySelector("#num2");
            let num3 = document.querySelector("#num3");

            for (let i = 0; i < quantNum; i++) {
                const num = Math.floor(Math.random() * 10);
                numbers.push(num)
            }

            num1.innerHTML = '<div class="loader"></div>';
            num2.innerHTML = '<div class="loader"></div>';
            num3.innerHTML = '<div class="loader"></div>';

            setTimeout(() => {
                num1.innerHTML = numbers[0];
            }, 2000);

            setTimeout(() => {
                num2.innerHTML = numbers[1];
            }, 4000);

            setTimeout(() => {
                num3.innerHTML = numbers[2];
            }, 6000);

            setTimeout(() => {
                const countSevens = numbers.filter(num => num === 7).length;

                switch (countSevens) {
                    case 0:
                        playerCredits -= playerBet;
                        newWarning(`It lost ${playerBet}`);
                        break;
                    case 1:
                        playerCredits += (playerBet * 2);
                        newWarning(`It won ${playerBet * 2}`);
                        break;
                    case 2:
                        playerCredits += (playerBet * 3);
                        newWarning(`It won ${playerBet * 3}`);
                        break;
                    case 3:
                        playerCredits += (playerBet * 10);
                        newWarning(`It won ${playerBet * 10}`);
                        break;
                }

                playerInfo.innerHTML = `Credits: ${playerCredits}€`;
                isPlay = true;
            }, 7000);
        }
    }
});

document.querySelector("#insertCredis").addEventListener("click", () => {
    document.querySelector('#insertCredits').style.display = 'block';
    document.querySelector('#gameArea').style.display = 'none';
})

document.querySelector('#insertCreditsCancel').addEventListener("click", () => {
    document.querySelector('#insertCredits').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';

    moreCredits = 0;
    document.querySelector('#display').innerHTML = moreCredits;
})

const insertCreditsButtons = document.querySelectorAll('.panelButtons')

insertCreditsButtons.forEach((button) => {
    button.addEventListener('click', function () {
        var text = this.textContent.trim();

        switch (text) {
            case '+ 1':
                moreCredits++;
                break;
            case '+ 2':
                moreCredits += 2;
                break;
            case '+ 5':
                moreCredits += 5;
                break;
            case '+ 10':
                moreCredits += 10;
                break;
            case '- 1':
                moreCredits--;
                break;
            case '- 2':
                moreCredits -= 2;
                break;
            case '- 5':
                moreCredits -= 5;
                break;
            case '- 10':
                moreCredits -= 10;
                break;
        }

        document.querySelector('#display').innerHTML = moreCredits;
    });
});

document.querySelector('#addCredits').addEventListener('click', () => {
    playerCredits += moreCredits;
    moreCredits = 0;
    document.querySelector('#display').innerHTML = moreCredits;

    document.querySelector('#insertCredits').style.display = 'none';
    document.querySelector('#gameArea').style.display = 'block';

    playerInfo.innerHTML = `Credits: ${playerCredits}€`;
})

document.querySelector('#infoButton').addEventListener('click', () => {
    document.querySelector('#infoText').style.display = document.querySelector('#infoText').style.display == 'block' ? 'none' : 'block';
});

document.querySelector('#giveUp').addEventListener('click', () => {
    newWarning(`Congratulations, you're going home with ${playerCredits}`);

    playerCredits = 0;
    playerInfo.innerHTML = `Credits: ${playerCredits}€`;
})


const newWarning = (msg) => {
    let warnings = document.querySelector("#warnings");

    warnings.innerHTML = msg;
}

