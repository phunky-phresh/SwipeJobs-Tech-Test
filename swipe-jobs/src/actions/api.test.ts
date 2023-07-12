import axios from 'axios';
import { fetchWorkerProfile } from './api';
const baseUrl = 'https://test.swipejobs.com';
const userId = process.env.REACT_APP_USER_ID;

// Mock axios.get to return a successful response
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('fetchWorkerProfile', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should handle successful profile fetch', async () => {
    const mockResponse = { data: 'profile data' };
    mockAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchWorkerProfile();

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${baseUrl}/api/worker/${userId}/profile`
    );
    expect(result).toEqual(mockResponse);
  });

  it('should handle profile fetch failure', async () => {
    const mockError = new Error('Profile fetch failed');
    mockAxios.get.mockRejectedValueOnce(mockError);

    try {
      await fetchWorkerProfile();
    } catch (error) {
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        `${baseUrl}/api/worker/${userId}/profile`
      );
      expect(error).toEqual(mockError);
    }
  });
});
