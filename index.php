<?php
session_start();
include 'db.php';

if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Include sound files
$soundFiles = ['1.M4A', '2.M4A', 'start_game.M4A', 'stop_game.M4A'];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>የኛ Bingo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="gameTitleSection">
      
    </div>
    <?php foreach ($soundFiles as $file): ?>
        <audio src="s/<?php echo $file; ?>"></audio>
    <?php endforeach; ?>
   <!--  un comment to type bet amount
    <form action="process.php" method="post">
    <label for="betAmount">Bet Amount:</label>
    <input type="text" id="betAmount" name="betAmount">
    <button type="submit">Submit</button>
--> 

    <!-- to accept selected players use the following code 
              <input type="number" id="betAmount" name="betAmount" placeholder="Enter Bet Amount">
              <div id="winnerAmount"></div>
              <button type="button" onclick="calculateWinnings()">Calculate Winnings</button>
    -->
</form>




    
        
    <table id="bingoCardIds">
        <thead>
            <tr>
                <th>የተጨዋቾች ካርቴላ ቁጥር</th>
            </tr>
        </thead>
        <tbody font-size="45px">
            <!-- Bingo card IDs will be dynamically added here -->
        </tbody>
    </table>
    <div id="betSection">
        <label for="betAmount">Select Bet Amount:</label>
        <select id="betAmount">
            <option value="25">25</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="50">50</option>
        </select>
    </div>
    <button id="btnStartGame" style="display:none;">Start Game</button> &nbsp; <button id="btnClearBoard">Clear Board</button>
    <div id="gameArea" style="display:none;">
        <div align="right">
            <img id="bingoimg" src="img/bingo.JPG" alt="image" width="110" height="500">
            <table id="allNumbers" align="right">
                <tbody>
                    <!-- Numbers will be dynamically added here -->
                </tbody>
            </table>
        </div>
        <div id="check" align="center"></div>
        <div id="board"></div>
        <div id="boardButtons" style="display:none;">
            <button id="btnCloseBoard">Close Board</button>
            <button id="btnLockBoard">Lock Board</button>
        </div>
        <div id="ballsContainer"></div>
        <table id="ballBirr">
            <tr>
                <td>
                    <div id="currentCall"></div>
                </td>
                <td>
                    <label for="cardId">Enter Card ID:</label>
                    <input type="text" id="cardId">
                    <button id="btnCheckWinner">Check</button>
                    <button id="btnDrawBall">Start New Game</button>
                    <button id="btnResetGame">ቀጣይ ዙር</button>
                    <button id="btnNextGame">ቀጣይ ጨዋታ</button>
                    <button id="btnSayBingo">BINGO !</button>
                    <button id="btnshuffle">ሸክሽክ</button>


                </td>
                <td>
                    <div id="winnerAmount"></div>
                </td>
            </tr>
        </table>
        <div id="lastFiveCalled"></div>
    </div>
    <script src="game.js"></script>
    <script>
        let gameCount = 0;

        document.getElementById('startGameBtn').addEventListener('click', function() {
            gameCount++;
            console.log("Game Count: " + gameCount);

            // Here you can add logic to mark the card id and start the game
            // After starting the game, update the game played rows table
            // You can use AJAX to send the game count to a PHP script for updating the database
            // Example AJAX call:
            // fetch('updateGamePlayed.php', {
            //    method: 'POST',
            //    body: JSON.stringify({ gameCount: gameCount }),
            //    headers: {
            //        'Content-Type': 'application/json'
            //    }
            // });
        });
    </script>
</body>
</html>
