var score_1=0;
var score_2=0;

var user_1=localStorage.getItem("player1_name");
var user_2=localStorage.getItem("player2_name");

document.getElementById("player_1_label").innerHTML=user_1+": ";
document.getElementById("player_2_label").innerHTML=user_2+": ";
document.getElementById("player_1_score").innerHTML=score_1;
document.getElementById("player_2_score").innerHTML=score_2;
document.getElementById("question_turn").innerHTML="Question turn-"+user_1;
document.getElementById("answer_turn").innerHTML="Answer turn-"+user_2;

var answer=0;

div_input=document.getElementById("input");

function send()
{
    num_1=document.getElementById("number_1_input").value;
    num_2=document.getElementById("number_2_input").value;

    answer=num_1*num_2;
    console.log(answer)

    number_show="<h2>"+num_1+"X"+num_2+"</h2>";
    input_answer="<br>Answer: <input type='text' id='answer_input' placeholder='input answer here' class='form-control'>";
    button_check="<br><button onclick='check()' class='btn btn-success'>Check</button><br><br>"

    div_output=number_show+input_answer+button_check;
    document.getElementById("output").innerHTML=div_output;  

    document.getElementById("input").innerHTML="";
}

player_question_turn="player_1";
player_answer_turn="player_2";

function check()
{
    get_answer=document.getElementById("answer_input").value;
    if (answer == get_answer)
    {
        if (player_answer_turn == "player_1")
        {
            score_1=score_1+1;
            document.getElementById("player_1_score").innerHTML=score_1;
        }
        else
        {
            score_2=score_2+1;
            document.getElementById("player_2_score").innerHTML=score_2;
        }
    }
    if (player_question_turn=="player_1")
    {
        player_question_turn="player_2";
        document.getElementById("question_turn").innerHTML="Question turn-"+user_2;
    }
    else
    {
        player_question_turn="player_1";
        document.getElementById("question_turn").innerHTML="Question turn-"+user_1;  
    }
    if (player_answer_turn=="player_1")
    {
        player_answer_turn="player_2";
        document.getElementById("answer_turn").innerHTML="Answer turn-"+user_2;
    }
    else
    {
        player_answer_turn="player_1";
        document.getElementById("answer_turn").innerHTML="Answer turn-"+user_1;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("input").innerHTML=div_input;
}