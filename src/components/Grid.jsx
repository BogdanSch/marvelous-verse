import React from "react";

export default function Grid({ className, children }) {
  return <div className={`grid ${className}`}>{children}</div>;
}
