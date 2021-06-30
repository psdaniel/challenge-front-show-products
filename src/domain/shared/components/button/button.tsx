import { useStyles } from './button.styles';

interface ButtonProps {
    buttonText: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({buttonText, onClick}: ButtonProps) => {
    const classes = useStyles();

    return <button className={classes.buttonStyles} onClick={onClick}>{buttonText}</button>
}