"use client";

import JobList from "@/components/JobList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setLoading } from "@/redux/jobSlice";
import { RootState } from "@/redux/store";
import SearchBar from "@/components/SearchBar";

const JobsPage = () => {

    const dispatch = useDispatch();

    const { jobs, filteredJobs, loading } = useSelector((state: RootState) => state.jobs);


    useEffect(() => {
        const fetchJobs = async () => {
            dispatch(setLoading(true));
                    try {
                const response = await fetch("https://jsonfakery.com/jobs");
                const data = await response.json();
                dispatch(setJobs(Array.isArray(data) ? data : data.jobs || []));
            } catch (error) {
                console.error(`Error fetching jobs: ${error}`);
            } finally {
                dispatch(setLoading(false));
            }
        };
        fetchJobs();
    }, [dispatch]);
    
  return (
    <div className="grid grid-cols-1 gap-6 min-h-screen px-8 py-20">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <SearchBar />
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        <JobList jobs={filteredJobs} />
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}

export default JobsPage