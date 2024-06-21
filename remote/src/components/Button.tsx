// src/components/Button.tsx
import React, { ReactNode } from "react";

const Button: React.FC<{ onClick: () => void; children: ReactNode }> = ({
  onClick,
  children,
}) => {
  return (
    <button
      style={{
        backgroundColor: "rebeccapurple",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
