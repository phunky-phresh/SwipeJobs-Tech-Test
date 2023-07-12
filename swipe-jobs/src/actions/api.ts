import axios, { AxiosResponse, AxiosError } from 'axios';
const baseUrl = 'https://test.swipejobs.com';
const userId = process.env.REACT_APP_USER_ID;

// worker profile
export const fetchWorkerProfile = () => {
  axios
    .get(`${baseUrl}/api/worker/${userId}/profile`)
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};
// show all jobs

// accept job

// reject job
