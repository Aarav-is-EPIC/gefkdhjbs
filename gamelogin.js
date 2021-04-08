function adduser(){
    player1login = document.getElementById("player_1_name_input").value;
    player2login = document.getElementById("player_2_name_input").value;
    localStorage.setItem("player1key",player1login);
    localStorage.setItem("player2key",player2login);
    window.location = "game_page.html";
}