export default (placemark: any) => ({
  hintContent: placemark.hintContent,
  balloonContentHeader: placemark.hintContent,
  balloonContentBody: `
    <b>Описание</b>
    <br/>
    ${placemark.description}
    <br/>
    <br/>
    <b>Цена</b>
    <br/>
    ${placemark.price} BYN
    <br/>`,
  balloonContentFooter: `Средняя оценка: ${placemark.rating}`,
});
