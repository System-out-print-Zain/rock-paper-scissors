console.log("Hello Safari!");
main();

function main()
{
    let user_in;
    /*Keep playing until the player decides to stop*/
    console.log("Welcome to Rock Paper Scissors!")
    do{

        play_game();

        /*Keep prompting until valid input is given*/
        do{
            user_in = prompt("Do you want to play again (y/n)?");
        }
        while (user_in != "y" && user_in != "n")

    }
    while (user_in == "y");
}

function play_game(){
    ;
}