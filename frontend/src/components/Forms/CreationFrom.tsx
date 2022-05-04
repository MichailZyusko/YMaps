import React from 'react';
import { Input } from './Components';
import { foodList } from '../../constants';

export default function CreationFrom() {
  return (
    <form>
      <Input.Text
        label="Name of the place"
        placeholder="Specify the name"
        name="name"
      />
      <Input.Select
        name="type"
        label="Type of the place"
        placeholder={'Select the type'}
        list={foodList}
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
