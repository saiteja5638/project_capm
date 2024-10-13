namespace my.job;

entity JobFeed {
  ID : UUID;
  jobTitle : String;
  description : String;
}

entity CreateJobFeed {
  ID : UUID;
  status : String;
  message : String;
}

entity ReadJobFeed {
  ID : UUID;
  data : String;
}
