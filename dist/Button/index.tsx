import React from "react";
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
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  children,
  disable,
  rounded,
  ghost,
  styles,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const componentStyles = {
    backgroundColor: disable
      ? !ghost
        ? backgroundColor
        : "transparent"
      : "#8f9ea36b",
    border: ghost ? `2px solid ${backgroundColor}` : null,
    borderRadius: !rounded && "7px",
  };

  const allS: any = { ...styles, ...componentStyles };

  return (
    <React.Fragment>
      {!disable ? (
        <button
          type="button"
          onClick={onClick}
          className={[
            `${ghost ? "button-ghost" : "storybook-button"}`,
            `storybook-button--${size}`,
            mode,
          ].join(" ")}
          style={allS}
          {...props}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {}}
          className={["button-disable", `storybook-button--${size}`, mode].join(
            " "
          )}
          style={allS}
          {...props}
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};
