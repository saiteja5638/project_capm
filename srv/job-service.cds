using my.job from '../db/jobs';

service JobService {
  entity JobFeed as projection on job.JobFeed;
  entity CreateJobFeed as projection on job.CreateJobFeed;
  entity ReadJobFeed as projection on job.ReadJobFeed;
}