import { CITIES_JSON } from '../../constants/general/cities';

export const filterCitiesById = (id) => {
  return CITIES_JSON.find((city) => city.id === id);
};
