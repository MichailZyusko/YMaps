import { TPlacemark } from '../../types';

export default (placemarks: TPlacemark[]): TPlacemark[] => placemarks.map((placemark) => ({
  id: placemark.id,
  name: placemark.name,
  coordinates: [placemark.lat, placemark.lon],
}));
