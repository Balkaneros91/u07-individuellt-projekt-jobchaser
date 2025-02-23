"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Job } from "./Job";
import JobItem from "./JobItem";

interface JobListProps {
  jobs: Job[];
}

const JobList:React.FC<JobListProps> = ({}) => {

    const searchQuery = useSelector((state: RootState) => state.jobs.searchQuery);
    const selectedCategory = useSelector((state: RootState) => state.jobs.selectedCategory);
    const jobs = useSelector((state: RootState) => state.jobs.filteredJobs);

    const filteredJobs = jobs.filter((job: Job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || job.job_category === selectedCategory;

    return matchesSearch && matchesCategory;
});

  if(filteredJobs.length === 0) {
    return <p>No jobs available</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job: Job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </div>
    
  );
};

export default JobList