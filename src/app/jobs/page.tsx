"use client";

import JobList from "@/components/JobList";
import { useState, useEffect } from "react";

const JobsPage = () => {

    const[jobs, setJobs] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://jsonfakery.com/jobs");
            const data = await response.json();
            setJobs(Array.isArray(data) ? data : data.jobs || []);
          } catch (error) {
            console.error(`Error fetching jobs: ${error}`);
          } finally {
            setLoading(false);
          }
        };
    
        fetchJobs();
      }, []);
    
      return (
        <div className="grid grid-cols-1 gap-6 min-h-screen px-8 py-20">
          <h1 className="text-2xl font-bold">Job Listings</h1>
          {loading ? (
            <p>Loading...</p>
          ) : jobs.length > 0 ? (
            <JobList jobs={jobs}/>
          ) : (
            <p>No jobs available.</p>
          )}
        </div>
      );
}

export default JobsPage