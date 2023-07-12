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
export const fetchJobs = () => {
  axios
    .get(`${baseUrl}/api/worker/${userId}/matches`)
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};
// accept job
export const acceptJobProfile = (jobId: string) => {
  axios
    .post(`${baseUrl}/api/worker/${userId}/job${jobId}/accept`)
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};
// reject job
export const rejectJobProfile = (jobId: string) => {
  axios
    .post(`${baseUrl}/api/worker/${userId}/job${jobId}/reject`)
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};
