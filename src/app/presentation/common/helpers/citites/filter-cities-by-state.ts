import { CITIES_JSON } from '../../constants/general/cities';

export const filterCitiesByState = (idState) => {
  return CITIES_JSON.filter((city) => city.state_id === idState);
};
