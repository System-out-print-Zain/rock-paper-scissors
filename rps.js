const ROUNDS = 3;

main();

function main()
{
    let user_in;
    /*Keep playing until the player decides to stop*/
    console.log("Welcome to Rock Paper Scissors!");
    do{

        play_game(ROUNDS);

        /*Keep prompting until valid input is given*/
        do{
            user_in = prompt("Do you want to play again (y/n)?");
        }
        while (user_in != "y" && user_in != "n");

    }
    while (user_in == "y");
}

function play_game(t_rounds){
    let p_score = 0; // Player score
    let c_score = 0; // Comp score
    const win_score = Math.floor(t_rounds/2) + 1; // score needed to win
    let temp; // stores the result of each round

    /*Keep playing until one player wins a majority or all rounds have been played*/
    while (p_score < win_score && c_score < win_score && p_score + c_score < t_rounds)
    {
        console.log("Round " + (p_score + c_score + 1) + "/" + t_rounds);
        temp = play_round();

        if (temp == 1) // Player wins
        {
            p_score ++;
        }
        else if (temp == 0) // Player loses
        {
            c_score ++;
        }
    }

    if (p_score == win_score)
    {
        console.log("You Win!");
    }
    else if (c_score == win_score)
    {
        console.log("You Lose ...");
    }
    else
    {
        console.log("It's a tie!")
    }
}

function play_round()
{
    return 1;
}