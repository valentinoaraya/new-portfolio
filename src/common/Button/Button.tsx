import "./Button.css"
import { ArrowIcon } from "../Icons/Icons";

interface Props {
    children: React.ReactNode;
    styleButton: "primary" | "secondary";
    onClick: () => void;
    color?: string;
    arrow?: boolean;
}

const Button: React.FC<Props> = ({ children, styleButton, onClick, color, arrow }) => {
    return (
        <button
            onClick={onClick}
            className={styleButton}
        >
            {children}
            {
                arrow &&
                <ArrowIcon
                    width="20"
                    height="20"
                    fill={styleButton === "secondary" ? color as string : "black"}
                />
            }
        </button>
    );
}

export default Button;
