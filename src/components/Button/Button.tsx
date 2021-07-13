import React, { FC } from "react";
import "./Button.css";

export const Button: FC<any> = ({ children, ...props }) => (
  <button className='Button' {...props}>{children}</button>
);
