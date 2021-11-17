/// <reference types="react" />
import "./button.css";
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    disable?: boolean;
    rounded?: boolean;
    styles?: {};
    /**
     * What background color to use
     */
    backgroundColor?: string;
    ghost?: boolean;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label?: string;
    children: any;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, size, backgroundColor, label, onClick, children, disable, rounded, ghost, styles, ...props }: ButtonProps) => JSX.Element;
export {};
