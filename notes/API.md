A simple API has been provided at https://test.swipejobs.com for use by workers to view their profile, review
their matched jobs and to accept and reject jobs.
A worker with an ID of 7f90df6e-b832-44e2-b624-3143d428001f has been created in the system for test
purposes.

- There are a number of (currently unauthenticated) GET URLs which can be used for this worker.
  https://test.swipejobs.com/api/worker/{workerId}/profile
- Retrieves the user profile for display
  https://test.swipejobs.com/api/worker/{workerId}/matches
- Shows all the jobs which match this worker
  https://test.swipejobs.com/api/worker/{workerId}/job/{jobid}/accept
- Accept a job with the given id for worker
  https://test.swipejobs.com/api/worker/{workerId}/job/{jobid}/reject
- Reject a job with a given id for a worker

### Actions directory

This will contain all required actions that interact with the test API. By maintaining and exporting from a single source we can reduce duplication and make testing simpler.

Axios will be installed and utilised for calls to the BE.
