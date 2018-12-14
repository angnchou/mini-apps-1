import React from "react";
import $ from "jquery";

const numRows = 6;
const numCols = 7;

const empty = 0;
const player1 = 1;
const player2 = -1;
/*state: 
board - show all plays for both players
playerOneMoves - then alternate true/false for each player
hasWinner - initially false -> true when winner is found -> message

//create board using array of arrays of 0, player one is 1, player 2 is -1 

//find winner: check after each play, see if surrounding squares have the same value as the last played td
    //if there is, check that td's surrounding squares
    //if not, no winner yet

*/

class App extends React.Component {
  constructor(props) {
    console.log($("#app").length);
    super(props);
    const board = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(empty);
      }
      board.push(row);
    }
    this.state = {
      board: board,
      playerOneMoves: true,
      hasWinner: false //when true, alert "congratulations!"
    };
    this.renderBoard = this.renderBoard.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.renderCols = this.renderCols.bind(this);
    this.putInCol = this.putInCol.bind(this);
  }
  //replace 0 with 1 or -1 for each move
  //   [
  //     [0 0 0],
  //     [0 0 0]
  //     [0 0 0]
  //     [0 0 0]
  //
  //     0  1  2
  //
  //     [0 0 0],  0
  //     [0 0 0]   1
  //     [0 0 -1]  2
  //     [0 0 1]   3
  // ]

  //copy board then set state to show board displaying moves from each player
  //each play has a col number but should change the value on the board from the bottom up if it is currently 0
  putInCol(col) {
    const newBoard = [...this.state.board];
    for (let i = numRows - 1; i >= 0; i--) {
      if (newBoard[i][col] === 0) {
        const user = this.state.playerOneMoves ? player1 : player2;
        newBoard[i][col] = user;
        this.setState({
          board: newBoard,
          playerOneMoves: !this.state.playerOneMoves
        });
        break;
      }
    }
  }

  renderRows() {
    return this.state.board.map((row, index) => {
      return <tr key={index}>{this.renderCols(row)}</tr>;
    });
  }

  //add className to each td for css for each player
  renderCols(cols) {
    return cols.map((col, index) => {
      let className = "";
      switch (col) {
        case player1:
          className = "player1";
          break;
        case player2:
          className = "player2";
          break;
      }
      return (
        <td
          onClick={() => {
            this.putInCol(index);
          }}
          className={className}
          key={index}
        />
      );
    });
  }

  renderBoard() {
    return (
      <table>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        {this.renderBoard()}
      </div>
    );
  }
}

export default App;
