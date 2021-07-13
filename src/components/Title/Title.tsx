import React, { FC } from "react";
import "./Title.css";

export const Title: FC<any> = ({ children, ...props }) => (
  <h1 className='title' {...props}>{children}</h1>
);
