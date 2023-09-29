var buttonhuman = document.getElementById("first");
        var buttoncomputer = document.getElementById("second");
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");
        var button3 = document.getElementById("button3");
        var button4 = document.getElementById("button4");
        var button5 = document.getElementById("button5");
        var button6 = document.getElementById("button6");
        var button7 = document.getElementById("button7");
        var button8 = document.getElementById("button8");
        var button9 = document.getElementById("button9");
        var checkboxDifficult = document.getElementById("mediumDiff");

        var humanFirst = null;
        var mediumDiff = false;

        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var computerLastTurn = null;

        checkboxDifficult.addEventListener("change", () => {
            if (checkboxDifficult.checked) {
                mediumDiff = true;
                console.log(mediumDiff);
            } else {
                mediumDiff = false;
                console.log(mediumDiff);
            }
        })

        buttonhuman.addEventListener("click", () => {
            humanFirst = true;
            console.log(humanFirst);
            buttonhuman.remove();
            buttoncomputer.remove();
        });

        buttoncomputer.addEventListener("click", () => {
            humanFirst = false;
            console.log(humanFirst);
            buttonhuman.remove();
            buttoncomputer.remove();
            computerTurn();
        });

        button1.addEventListener("click", () => {
            if (array[0] != 0) {
                var square = document.getElementById(1);
                square.style.background = "green";
                array[0] = 0;
                computerTurn();
            }
        })

        button2.addEventListener("click", () => {
            if (array[1] != 0) {
                var square = document.getElementById(2);
                square.style.background = "green";
                array[1] = 0;
                computerTurn();
            }
        })

        button3.addEventListener("click", () => {
            if (array[2] != 0) {
                var square = document.getElementById(3);
                square.style.background = "green";
                array[2] = 0;
                computerTurn();
            }

        })

        button4.addEventListener("click", () => {
            if (array[3] != 0) {
                var square = document.getElementById(4);
                square.style.background = "green";
                array[3] = 0;
                computerTurn();
            }

        })

        button5.addEventListener("click", () => {
            if (array[4] != 0) {
                var square = document.getElementById(5);
                square.style.background = "green";
                array[4] = 0;
                computerTurn();
            }

        })

        button6.addEventListener("click", () => {
            if (array[5] != 0) {
                var square = document.getElementById(6);
                square.style.background = "green";
                array[5] = 0;
                computerTurn();
            }

        })

        button7.addEventListener("click", () => {
            if (array[6] != 0) {
                var square = document.getElementById(7);
                square.style.background = "green";
                array[6] = 0;
                computerTurn();
            }

        })

        button8.addEventListener("click", () => {
            if (array[7] != 0) {
                var square = document.getElementById(8);
                square.style.background = "green";
                array[7] = 0;
                computerTurn();
            }

        })

        button9.addEventListener("click", () => {
            if (array[8] != 0) {
                var square = document.getElementById(9);
                square.style.background = "green";
                array[8] = 0;
                computerTurn();
            }
        })

        function computerTurn() {
            if (!mediumDiff) {
                computerEasyTurn();
            } else {
                computerMediumTurn();
            }
        };

        function computerEasyTurn() {
            var randomNumber = Math.floor(Math.random() * 9) + 1;
            while (array[randomNumber - 1] == 0) {
                randomNumber = Math.floor(Math.random() * 9) + 1;
            }
            array[randomNumber - 1] = 0;
            console.log(randomNumber);
            console.log(array);

            var square = document.getElementById(randomNumber);
            square.style.background = "red";

            return randomNumber;
        }

        function computerMediumTurn() {
            if (computerLastTurn == null) {
                computerLastTurn = computerEasyTurn();
            } else {
                var adjacencyMap = {
                    1: [2, 4, 5],
                    2: [1, 3, 4, 5, 6],
                    3: [2, 5, 6],
                    4: [1, 2, 5, 7, 8],
                    5: [1, 2, 3, 4, 6, 7, 8, 9],
                    6: [2, 3, 5, 8, 9],
                    7: [4, 5, 8],
                    8: [4, 5, 6, 7, 9],
                    9: [5, 6, 8]
                };

                var possibleMoves = adjacencyMap[computerLastTurn];
                var validMoves = possibleMoves.filter(move => array[move - 1] !== 0);

                if (validMoves.length === 0) {
                    // No valid moves adjacent to the last move, choose any remaining available move.
                    computerLastTurn = null;
                    computerMediumTurn();
                    return;
                }

                var randomIndex = Math.floor(Math.random() * validMoves.length);
                var nextMove = validMoves[randomIndex];

                array[nextMove - 1] = 0;
                console.log(nextMove);
                console.log(array);

                var square = document.getElementById(nextMove);
                square.style.background = "red";
                computerLastTurn = nextMove;
            }
        }