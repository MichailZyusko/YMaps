/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import styled from 'styled-components';
import './index.css';

// const Error = styled.div.attrs((props) => ({
//   ...props,
// }))`
//   color: red;
//   font-size: 12px;
//   margin-top: 5px;
// `;

const Item = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label.attrs((props) => ({
  ...props,
}))`
  display: flex;
  align-self: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  color: white;
`;

export const CustomInput = styled.input.attrs((props) => ({
  ...props,
}))`
  width: 200px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid #ccc;
  color: #333;
  padding: 0 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid #000;
  }
`;

export const CustomTextArea = styled.textarea.attrs((props) => ({
  ...props,
}))`
  max-height: 70px;
  min-height: 70px;
  max-width: 200px;
  min-width: 200px;
  border-radius: 20px;
  border: 1px solid #ccc;
  color: #333;
  padding: 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid #000;
  }
`;

type TProps = {
  label: string;
  name: string;
  placeholder?: string;
}

export class Input {
  // TODO Add error message
  static Text({ label, name, placeholder }: TProps) {
    return (
      <Item>
        <Label htmlFor={name}>{label}</Label>
        <CustomInput type="text" name={name} placeholder={placeholder} defaultValue="1111111" />
      </Item>
    );
  }

  static TextArea({ label, name, placeholder }: TProps) {
    return (
      <Item>
        <Label htmlFor={name}>{label}</Label>
        <CustomTextArea name={name} placeholder={placeholder} defaultValue="22222222" />
      </Item>
    );
  }

  static ProgressBar({ label, name }: TProps) {
    return (
      <Item>
        <Label htmlFor={name}>{label}</Label>
        <div className="rating-css">
          <div className="star-icon">
            <input type="radio" name="rating" id="rating1" value="1" />
            <label htmlFor="rating1" className="fa fa-star" />
            <input type="radio" name="rating" id="rating2" value="2" />
            <label htmlFor="rating2" className="fa fa-star" />
            <input type="radio" name="rating" id="rating3" value="3" />
            <label htmlFor="rating3" className="fa fa-star" />
            <input type="radio" name="rating" id="rating4" value="4" />
            <label htmlFor="rating4" className="fa fa-star" />
            <input type="radio" name="rating" id="rating5" value="5" defaultChecked />
            <label htmlFor="rating5" className="fa fa-star" />
          </div>
        </div>
      </Item>
    );
  }
}
