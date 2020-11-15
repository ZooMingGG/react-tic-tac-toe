import React from 'react';
import './App.css';
import Square from './Components/Square/Square';
import Score from './Components/Score/Score';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      firstPlayerScore: 0,
      secondPlayerScore: 0
    };
  }

  clickHandler = index => {
    const squares = this.state.squares;

    if (squares[index] === null) {
      squares[index] = (this.state.count % 2 === 0) ? 'X' : 'O';

      this.setState({count: this.state.count + 1})
      this.setState({squares});

      this.checkEndGame();
    }
  }

  checkEndGame = () => {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const currentPlayer = (this.state.count % 2 === 0) ? 'X' : 'O';

    const isDraw = this.state.squares.every(square => square !== null);

    const isWin = WINNING_COMBINATIONS.some(array => {
      return array.every(item => {
        return this.state.squares[item] === currentPlayer;
      });
    });

    if (isWin || isDraw) {
      this.endGame(isWin, isDraw, currentPlayer);
    }
  }

  endGame = (isWin, isDraw, currentPlayer) => {
    if (isWin) {
      alert((currentPlayer === 'X') ? 'First Player Won' : 'Second Player Won');

      (currentPlayer === 'X') 
      ? this.setState({firstPlayerScore: this.state.firstPlayerScore + 1}) 
      : this.setState({secondPlayerScore: this.state.secondPlayerScore + 1});
    } else if (isDraw) {
      alert('Draw');
    }

    this.setState({squares: Array(9).fill(null)});
    this.setState({count: 0})
  }

  render() {
    return (
      <div className="App">
        <Score 
          firstPlayerScore={this.state.firstPlayerScore}
          secondPlayerScore={this.state.secondPlayerScore}
        />
        <div className="tic-tac-toe">
          { this.state.squares.map((square, index) => {
            return (
              <Square 
                key={index}
                clickHandler={this.clickHandler.bind(this, index)}
                value={square} 
              />
            );
          }) }
        </div>
      </div>
    );
  }
}

export default App;
