import "./Button.css"

interface Props {
    children: React.ReactNode;
    styleButton: "primary" | "secondary";
    onClick: () => void;
}

const Button: React.FC<Props> = ({ children, styleButton, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styleButton}
        >
            {children}
        </button>
    );
}

export default Button;
