import './Square.css';

const Square = props => {
  return (
    <div 
      onClick={props.clickHandler}
      className="square"
    >
      <span>{props.value}</span>
    </div>
  );
}

export default Square;
