import { FC } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface ButtonProps {
  text?: string;
  route?: string;
}

const Button: FC<ButtonProps> = ({ text, route }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={route!}>
      <button className="button">{text}</button>
    </Link>
  );
};

export default Button;
