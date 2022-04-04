import React from 'react';
import { Input } from './Components';

export default function SubmitForm() {
  return (
    <form>
      <Input.Text label="Название заведения" name="name" placeholder="Укажите название" />
      <Input.TextArea label="Описание" name="description" placeholder="Оставьте свой отзыв. Нам это важно" />
      <Input.Rating label="Оценка" name="rating" />
    </form>
  );
}
