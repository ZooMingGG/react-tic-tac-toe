import './Score.css';

const Score = props => {
  return (
    <div className="score">
      <p>X: {props.firstPlayerScore}</p>
      <p>O: {props.secondPlayerScore}</p>
    </div>
  );
}

export default Score;
