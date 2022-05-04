import React from 'react';
import styled from 'styled-components';
import './index.css';

const Item = styled.div`
  margin-bottom: ${({ style }) => style?.marginBottom || 20}px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label.attrs((props) => ({
  ...props,
}))`
  display: flex;
  align-self: center;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.2em;
  color: #505050;
`;

export const CustomInput = styled.input.attrs((props) => ({
  ...props,
}))`
  width: 100%;
  height: 35px;
  border-radius: 20px;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 10px;
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
  max-width: 250px;
  min-width: 100%;
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
  label?: string;
  name: string;
  placeholder?: string;
  list?: Array<{id: number, value: string}>;
}

export class Input {
  static Text({ label, name, placeholder }: TProps) {
    return (
      <Item>
        <Label htmlFor={name}>{label}</Label>
        <CustomInput type="text" name={name} placeholder={placeholder} />
      </Item>
    );
  }

  static Select({
    label, name, placeholder, list,
  }: TProps) {
    return (
      <Item>
        <Label htmlFor={name}>{label}</Label>
          <CustomInput type="text" name={name} placeholder={placeholder} list={`${name}List`} />
          <datalist id={`${name}List`}>
            {list?.map((item: any) => (
              <option key={item.id} value={item.value}>{item.value}</option>
            ))}
          </datalist>
      </Item>
    );
  }

  static TextArea({ label, name, placeholder }: TProps) {
    return (
      <Item style={{ marginBottom: 0 }}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <CustomTextArea name={name} placeholder={placeholder} />
      </Item>
    );
  }

  static Rating({ label, name }: TProps) {
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
