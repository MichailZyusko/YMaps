import React from 'react';
import { Input } from './Components';

export default function CreationFrom() {
  return (
    <form>
      <Input.Text
        label="Name of the place"
        placeholder="Specify the name"
        name="name"
      />
      <Input.TextArea
        label="Description"
        placeholder="Leave us your feedback. It's important to us"
        name="description"
      />
      <br />
      <Input.Rating
        label="Rating"
        name="rating"
      />
    </form>
  );
}
