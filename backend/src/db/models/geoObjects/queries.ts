import {
  deleteProps, getByIdProps,
  saveProps, updateProps,
} from './types';

export default {
  save: ({ point }: saveProps) => `
    INSERT INTO GeoObjects
    VALUES (${Object.values(point).map((item) => `'${item}'`).join(', ')})
  `,

  findAll: () => `
    SELECT
     id,
     json_extract(data, '$.geometry.coordinates') as coords,
     json_extract(data, '$.props.name') as name,
     json_extract(data, '$.props.type') as type
    FROM GeoObjects
  `,

  findById: ({ id }: getByIdProps) => `
    SELECT
      id,
      json_extract(data, '$.geometry.coordinates') as coords,
      json_extract(data, '$.props') as props
    FROM GeoObjects
    WHERE id = '${id}'
  `,

  findByIdAndUpdate: ({ id, feedback } : updateProps) => `
    UPDATE GeoObjects
    SET data = JSON_ARRAY_APPEND(
      data,
      '$.props.feedbacks',
      CAST('${JSON.stringify(feedback)}' AS JSON)
    )
    WHERE id = '${id}'
  `,

  deleteById: ({ id }: deleteProps) => `
    DELETE FROM GeoObjects
    WHERE id = '${id}'
  `,
};
