function login()
{
    var player1_name=document.getElementById("input_player_1").value;
    var player2_name=document.getElementById("input_player_2").value;
    localStorage.setItem("User 1", player1_name);
    localStorage.setItem("User 2", player2_name);

    window.location="quiz_game.html";
}