import React, { FC } from "react";
import "./Box.css";

export const Box: FC<any> = ({ children, ...props }) => (
  <div className='Box' {...props}>{children}</div>
);
