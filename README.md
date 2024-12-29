# Chessic
# Chessic - Real-Time Multiplayer Chess Game

Chessic is a dynamic, real-time multiplayer chess game that brings the classic chess experience to the web. It enables players to compete against each other in real-time with a simple, intuitive drag-and-drop interface. Built with modern web technologies, Chessic supports player roles (white/black), spectators, and seamless real-time gameplay.

## Features

- **Real-Time Multiplayer**: Compete with other players in real-time using WebSockets.
- **Drag and Drop Gameplay**: An easy-to-use interface for making moves.
- **Piece Unicode Representation**: Chess pieces are displayed using Unicode characters for a visually clean and distinct appearance.
- **Player Roles**: Choose to play as the white or black player, with role-specific UI adjustments.
- **Spectator Mode**: Watch ongoing games without participating.
- **WebSocket Communication**: Ensures smooth real-time communication between players.
- **Game State Management**: Game state is maintained and synchronized across clients using Forsyth-Edwards Notation (FEN).

## Technologies Used

- **Frontend**: 
  - HTML5, CSS3, JavaScript (ES6+)
  - WebSockets (for real-time communication)
  - Socket.IO (for communication)
  - Chess.js (JavaScript library for chess game logic)
- **Backend**: 
  - Node.js
  - Express.js
  - Socket.IO (for real-time communication)

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **NPM**: Node package manager (comes with Node.js)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/chessic.git
Navigate to the project directory:

bash
Copy code
cd chessic
Install the dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open the game in your browser by navigating to http://localhost:3000.

Game Rules
Objective: The objective of chess is to checkmate the opponent's king, meaning the king is under attack and cannot escape.
Moves: Each piece moves in specific patterns. For example:
Rooks move in straight lines.
Bishops move diagonally.
Knights move in an "L" shape.
Special Moves:
Castling: A move that involves the king and a rook.
En Passant: A special pawn capture.
Pawn Promotion: A pawn reaching the opposite end can be promoted to a queen, rook, bishop, or knight.
Usage
Multiplayer: Join a game or create one through the WebSocket connection.
Gameplay: Use the drag-and-drop functionality to make legal moves.
Spectator Mode: Watch the ongoing game in real-time without interacting.
Player Roles: Players can choose either the white or black pieces, and the UI adjusts based on the selected role.
Screenshots

Future Features
AI Opponent: Adding an AI to play against.
Move History: Track and display the list of past moves.
Chess Timer: Implement a timer for each player's turn.
Contributing
We welcome contributions to improve the project. To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit (git commit -am 'Add feature').
Push to your branch (git push origin feature-name).
Create a pull request to merge your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Chess.js – A JavaScript chess library for handling game logic.
Socket.IO – Real-time communication library for WebSockets.
