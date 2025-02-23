"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Job } from "./Job";
import JobItem from "./JobItem";

interface JobListProps {
  jobs: Job[];
}

const JobList:React.FC<JobListProps> = ({jobs}) => {
    const searchTerm = useSelector((state: RootState) => state.searchTerm); 

    const filteredJobs = jobs.filter((job: Job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if(filteredJobs.length === 0) {
    return <p>No jobs available</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobItem />
      </div>
    </div>
    
  );
};

export default JobList