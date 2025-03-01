const Button = ({ label, onClick, ...rest }) => {
  return <button {...rest} onClick={onClick}>{label}</button>;
};

export default Button;
