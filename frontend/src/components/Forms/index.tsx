import React from 'react';
import { Input } from './Components';

type TProps = {
  onSubmit: (values: any) => void;
}

export default function SubmitForm({ onSubmit } : TProps) {
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} style={{ margin: '20px' }}>
        <Input.Text label="Название заведения" name="name" placeholder="Укажите название" />
        <Input.TextArea label="Описание" name="description" placeholder="Оставьте свой отзыв. Нам это важно" />
        <Input.ProgressBar label="Оценка" name="rating" />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
