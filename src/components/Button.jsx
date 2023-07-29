import "./Button.css";

const Button = ({ symbol,color,handleclick ,width}) => {
    return (
    <div
      onClick={() => handleclick(symbol)}
      className="button-wrapper"
      style={{ background: color,width:width}}
      >
      {symbol}
    </div>
    
    ); 
};
export default Button;