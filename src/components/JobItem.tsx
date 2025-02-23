"use client";

import { Job } from "../app/interfaces/Job";
import Link from "next/link";

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({job}) => {  
  return (
    <div className="p-4 border rounded-lg shadow-md bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <Link href={`/jobs/${job.id}`} className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText hover:text-red-400 dark:hover:text-red-400 mt-2 block underline">
        View Details
      </Link>
    </div>
  );
}

export default JobItem