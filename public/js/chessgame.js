const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const board = chess.board();
    boardElement.innerHTML = ""; // Clear the board element before rendering
    board.forEach((row, rowIndex) => {
        row.forEach((square, squareIndex) => {
            const squareElement = document.createElement("div");
            squareElement.classList.add(
                "square",
                (rowIndex + squareIndex) % 2 === 0 ? "light" : "dark"
            );
            squareElement.dataset.row = rowIndex;
            squareElement.dataset.col = squareIndex;

            if (square) {
                const pieceElement = document.createElement("div");
                pieceElement.classList.add(
                    "piece",
                    square.color === "w" ? "white" : "black"
                );
                pieceElement.innerText = getPieceUnicode(square); // Placeholder for text or Unicode
                pieceElement.draggable = playerRole === square.color;

                pieceElement.addEventListener("dragstart", (e) => {
                    if (pieceElement.draggable) {
                        draggedPiece = pieceElement;
                        sourceSquare = { row: rowIndex, col: squareIndex };
                        e.dataTransfer.setData("text/plain", ""); // For drag-drop compatibility
                    }
                });

                pieceElement.addEventListener("dragend", (e) => {
                    draggedPiece = null;
                    sourceSquare = null;
                });

                squareElement.appendChild(pieceElement);
            }

            squareElement.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            squareElement.addEventListener("drop", (e) => {
                e.preventDefault();
                if (draggedPiece) {
                    const targetSquare = {
                        row: parseInt(squareElement.dataset.row),
                        col: parseInt(squareElement.dataset.col),
                    };
                    handleMMove(sourceSquare, targetSquare);
                }
            });

            boardElement.appendChild(squareElement); // Add the square to the board
        });
    });
    if(playerRole==='b'){
        boardElement.classList.add("flipped");
    }
    else{
        boardElement.classList.remove("flipped");
    }
};

const handleMMove = (source, target) => {
    const move = {
        from: `${String.fromCharCode(97 + source.col)}${8 - source.row}`, // Use backticks for interpolation
        to: `${String.fromCharCode(97 + target.col)}${8 - target.row}`, // Use backticks for interpolation
        promotion: "q",
    };
    socket.emit("move", move);
};


// Placeholder for piece Unicode logic
const getPieceUnicode = (piece) => {
    const unicodePieces = {
       

        "k": "♚", // Black King
        "q": "♛", // Black Queen
        "r": "♜", // Black Rook
        "b": "♝", // Black Bishop
        "n": "♞", // Black Knight
        "p": "♟", // Black Pawn
        "K": "♔", // White King
        "Q": "♕", // White Queen
        "R": "♖", // White Rook
        "B": "♗", // White Bishop
        "N": "♘", // White Knight
        "P": "♙", // White Pawn
    };
    return unicodePieces[piece.type] || "";
};
socket.on("playerRole", function(role){
   playerRole=role;
   renderBoard();
});
socket.on("spectatorRole", function(){
    playerRole=null;
    renderBoard();
});
socket.on("boardState", function(fen){
    chess.load(fen);
    renderBoard();
});
socket.on("move",function(move){
    chess.move(move);
    renderBoard();
});

renderBoard();
