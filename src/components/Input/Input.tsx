import React, { FC } from "react";
import "./Input.css";

export const Input: FC<any> = (props) => (
  <div className='Input'>
    {props.label && (
      <label className='Input__label' htmlFor={props.name}>
        {props.label}
      </label>
    )}
    <input
      className='Input__input'
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
    />
    <div className='Input__errors'>
      {Array.isArray(props.errors) && props.errors.join(", ")}
    </div>
  </div>
);
