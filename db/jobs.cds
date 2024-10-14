namespace my.job;

entity JobFeed {
 key  ID : UUID;
  jobTitle : String;
  description : String;
}

entity CreateJobFeed {
 key ID : UUID;
  status : String;
  message : String;
}

entity ReadJobFeed {
  ID : UUID;
  data : String;
}
