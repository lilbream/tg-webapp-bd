import React from "react";

export function Button({ children, onClick, variant = "default", className }) {
  const baseStyles = "px-4 py-2 rounded text-white font-bold";
  const styles = {
    default: "bg-blue-500 hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
