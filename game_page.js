player1_name = localStorage.getItem("player1key");
player2_name = localStorage.getItem("player2key");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1_name + ": ";
document.getElementById("player2name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "question turn - " + player1_name;
document.getElementById("playeranswer").innerHTML = " answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;

    low_word = get_word.toLowerCase();

    console.log("word lowercased is = " + low_word);
}
function check(){
get_answer = document.getElementById("answer_check").value;
answer = get_answer.toLowerCase();
console.log("the lower case word is - " + answer);
if(answer==low_word){
    if(answer_turn=="player1"){
        player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else{
        player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(question_turn=="player1"){
    question_turn = "player2";
    document.getElementById("playerquestion").innerHTML = "question turn = " + player2_name;
}
else{
    question_turn = "player1";
    document.getElementById("playerquestion").innerHTML = "question turn = " + player1_name;
}
if(answer_turn=="player1"){
    answer_turn = "player2";
    document.getElementById("playeranswer").innerHTML = "answer turn = " + player2_name;
}
else{
    answer_turn = "player1";
    document.getElementById("playeranswer").innerHTML = "answer turn = " + player1_name;
}
document.getElementById("output").innerHTML = "";
}
