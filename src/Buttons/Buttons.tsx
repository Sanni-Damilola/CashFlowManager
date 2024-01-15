import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text?: string;
  route?: string;
}

const Button: FC<ButtonProps> = ({ text, route }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={route!}>
      <div id="numbers">
        <button>
          <span>{text}</span>
        </button>
      </div>
    </Link>
  );
};

export default Button;
