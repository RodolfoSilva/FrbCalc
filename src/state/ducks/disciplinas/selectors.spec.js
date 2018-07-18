import selectors from './selectors';

describe('Selectors', () => {
  describe('getAll', () => {
    it('should return an empty array', () => {
      const mockState = {
        disciplinas: {
          byId: {},
          allIds: []
        }
      };

      expect(selectors.getAll(mockState)).toEqual([]);
    });
    it('should return an array composed by allIds and byId', () => {
      const mockState = {
        disciplinas: {
          byId: {
            '99999999-9999-9999-9999-999999999999': {
              id: '99999999-9999-9999-9999-999999999999',
              name: 'Next name',
              ap1: null,
              ap2: null,
              ap3: null,
              updatedAt: expect.any(Date)
            }
          },
          allIds: ['99999999-9999-9999-9999-999999999999']
        }
      };

      const expected = [
        {
          id: '99999999-9999-9999-9999-999999999999',
          name: 'Next name',
          ap1: null,
          ap2: null,
          ap3: null,
          updatedAt: expect.any(Date)
        }
      ];

      expect(selectors.getAll(mockState)).toEqual(expected);
    });
  });

  describe('getById', () => {
    it('should return undefined', () => {
      const mockState = {
        disciplinas: {
          byId: {},
          allIds: []
        }
      };

      expect(
        selectors.getById(mockState)('99999999-9999-9999-9999-999999999999')
      ).toBeUndefined();
    });
    it('should return an array composed by allIds and byId', () => {
      const mockState = {
        disciplinas: {
          byId: {
            '99999999-9999-9999-9999-999999999999': {
              id: '99999999-9999-9999-9999-999999999999',
              name: 'Next name',
              ap1: null,
              ap2: null,
              ap3: null,
              updatedAt: expect.any(Date)
            }
          },
          allIds: ['99999999-9999-9999-9999-999999999999']
        }
      };

      const expected = {
        id: '99999999-9999-9999-9999-999999999999',
        name: 'Next name',
        ap1: null,
        ap2: null,
        ap3: null,
        updatedAt: expect.any(Date)
      };

      expect(
        selectors.getById(mockState)('99999999-9999-9999-9999-999999999999')
      ).toEqual(expected);
    });
  });
});
