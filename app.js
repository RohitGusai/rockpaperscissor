let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll('.choice');
const comquery = document.querySelector('#comp-score');
const userquery = document.querySelector('#user-score');

function comselected()
{
    const option = ['rock','paper','scissor']
    const seletedbycom = Math.floor(Math.random()*3);
    return option[seletedbycom];

}
function showwinner(userwin,userseleted,computerselected)
{
    if(userwin)
    {
        const userwins = document.querySelector('#msg');
        userwins.innerText = `You Win!. Your ${userseleted} beats ${computerselected}`;
        userwins.style.backgroundColor = 'green';
        
        userScore++;
        if(userScore >= 3)
        {
            userwins.innerText = `You Win! The Game`;
            userScore = 0;
            comScore = 0;
            userquery.innerText = userScore;
            comquery.innerText = comScore;
        }
        else
        {
            userquery.innerText = userScore;
        }
        
    }
    else
    {
        const computerwins = document.querySelector('#msg');
        computerwins.innerText = `Computer Win!. ${computerselected } beats Your ${userseleted}`;
        computerwins.style.backgroundColor = 'red';
        
        comScore++;
        if(comScore >= 3)
            {
                computerwins.innerText = `Computer Win! The Game`;
                comScore = 0;
                userScore = 0;
                comquery.innerText = comScore;
                userquery.innerText = userScore;
            }
            else
        comquery.innerText = comScore;
    }
}
const draw = ()=>
{
    const bothWins = document.querySelector('#msg');
    bothWins.innerText = 'The Game is Draw';
    bothWins.style.backgroundColor = 'rgb(3, 2, 65)'
}

function useroption(userseleted){
    
    
    const computerselected = comselected();
    
    
    if(userseleted === computerselected)
    {
        draw();
    }
    
    else 
    {
        let userwin = true;
        if(userseleted === 'rock')
            // Scissor,papper
        {
            userwin = computerselected === 'scissor' ? true : false;
        }
        else if(userseleted === 'paper')
        {
            userwin = computerselected === 'rock' ? true : false;
        }
        else
        {
            userwin = computerselected === 'paper' ? true : false;
        }
        showwinner(userwin,userseleted,computerselected);
    }
    
    
}




choices.forEach((e)=>
{
    
    e.addEventListener('click',()=>{
        const userseleted = e.getAttribute('id');
        useroption(userseleted);
    });
});