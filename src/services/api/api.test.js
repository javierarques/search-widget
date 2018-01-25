import fetchMock from 'fetch-mock';
import mockResponse from './mockResponse';
import api from './api';
import { API_LOCATIONS_ENPOINT } from './constants';

describe('api', () => {
  describe('getLocations', () => {
    fetchMock.get('*', mockResponse);
    const term = 'Valencia';
    const items = 3;

    it('makes a request with the proper URL and params', () => {
      api.getLocations(term, items);

      expect(fetchMock.lastUrl()).toEqual(
        `${API_LOCATIONS_ENPOINT}&solrRows=${items}&solrTerm=${term}`
      );
    });

    it('returns an array with locations', async () => {
      const result = await api.getLocations(term, items);

      expect(Array.isArray(result)).toEqual(true);
    });
  });
});
