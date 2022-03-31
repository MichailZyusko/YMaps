export default (placemark: any) => ({
  hintContent: placemark.name,
  balloonContentHeader: placemark.name,
  balloonContentBody: `
    <b>Описание</b>
    <br/>
    ${placemark.description}
    <br/>
  `,
  balloonContentFooter: `Средняя оценка: ${placemark.rating}`,
});
