import React from 'react';
import { Input } from './Components';

export default function SubmitForm() {
  return (
    <div>
      <form style={{ margin: '20px' }} action="http://localhost:3000/api" method="POST">
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
