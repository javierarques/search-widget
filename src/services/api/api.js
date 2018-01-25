import fetchJson from '../../utils/fetchJson';
import { API_LOCATIONS_ENPOINT } from './constants';

const api = {
  getLocations: (term, items = 6) => {
    const url = `${API_LOCATIONS_ENPOINT}&solrRows=${items}&solrTerm=${term}`;

    return fetchJson(url).then(response => {
      const { results: { numFound, docs } } = response;
      if (numFound === 0) return [];

      return docs;
    });
  }
};

export default api;
