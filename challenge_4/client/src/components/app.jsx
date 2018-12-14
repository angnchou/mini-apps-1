import React from "react";
import $ from "jquery";

const numRows = 6;
const numCols = 7;

const empty = 0;
const player1 = 1;
const player2 = -1;
/*components: 
board - show all plays for both players
gameEnded - false -> true when winner
track plays for each player - playerOneMoves, playerTwoMoves
hasWinner - false -> true -> message

//prop - square - alternate between 3 colors

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
      playerOneMoves: true,
      board: board,
      hasWinner: false //when true, alert "congratulations!"
    };
    this.renderBoard = this.renderBoard.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.renderCols = this.renderCols.bind(this);
    this.putInCol = this.putInCol.bind(this);
  }
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

  //set state to show board displaying moves from each player
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

  renderBoard() {
    return (
      <table>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

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

  //clicking on each td means game is happening

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
