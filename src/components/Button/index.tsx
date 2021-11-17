import React from "react";
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
    backgroundColor: !disable
      ? !ghost
        ? backgroundColor
        : "transparent"
      : null,
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
