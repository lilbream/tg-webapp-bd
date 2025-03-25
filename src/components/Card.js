import React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div className={`border rounded-lg p-4 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
