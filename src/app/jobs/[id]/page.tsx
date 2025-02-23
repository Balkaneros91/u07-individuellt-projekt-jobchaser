"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Job } from "@/app/interfaces/Job";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundJob = jobs.find((job) => job.id === id);
      if (foundJob) {
        setJob(foundJob);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [id, jobs]);

  if (loading) return <p>Loading job details...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="p-8 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText shadow-lg rounded-lg w-full max-w-3xl">
      <h1 className="text-3xl font-bold bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText mb-4">{job.title}</h1>
      <p className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText mb-4">{job.description}</p>
      <p className="mt-2">
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> ${job.salary_from} - ${job.salary_to}
      </p>
      <p>
        <strong>Category:</strong> {job.job_category}
      </p>
      <p>
        <strong>Employment Type:</strong> {job.employment_type}
      </p>
      <p>
        <strong>Application Deadline:</strong> {job.application_deadline}
      </p>
      <p>
        <strong>Contact:</strong> {job.contact}
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
      >
        Close
      </button>
    </div>
    </div>
  );
};

export default JobDetails;
