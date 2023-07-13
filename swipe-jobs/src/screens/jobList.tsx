import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../actions/api';
import { JobDetailObject } from '../interface';

const JobList = () => {
  const [jobListData, setJobsListData] = useState<JobDetailObject[]>([]);

  useEffect(() => {
    const runAsync = async () => {
      const result = await fetchJobs();
      console.log('TESTY result', JSON.stringify(result));

      setJobsListData(result);
    };
    runAsync();
  }, []);

  return (
    <div>
      {jobListData.map((job: JobDetailObject) => {
        return <p key={job.jobId}>{job.jobId}</p>;
      })}
    </div>
  );
};

export default JobList;
