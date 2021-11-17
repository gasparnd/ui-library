/// <reference types="react" />
import "./button.css";
interface ButtonProps {
    primary?: boolean;
    disable?: boolean;
    rounded?: boolean;
    styles?: {};
    backgroundColor?: string;
    ghost?: boolean;
    size?: "small" | "medium" | "large";
    label?: string;
    children: any;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, backgroundColor, label, onClick, children, disable, rounded, ghost, styles, ...props }: ButtonProps) => JSX.Element;
export {};
