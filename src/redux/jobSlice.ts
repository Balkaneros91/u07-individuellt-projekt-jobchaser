import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/components/Job";

interface JobState {
  jobs: Job[];
  filteredJobs: Job[];
  searchQuery: string;
  selectedCategory: string;
  loading: boolean;
}

const initialState: JobState = {
  jobs: [],
  filteredJobs: [],
  searchQuery: "",
  selectedCategory: "",
  loading: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredJobs = state.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
          (state.selectedCategory === "" ||
            job.job_category === state.selectedCategory)
      );
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.filteredJobs = state.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
          (action.payload === "All" ||
            action.payload === "" ||
            job.job_category === action.payload)
      );
    },
    filterJobs: (state) => {
      state.filteredJobs = state.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
          (state.selectedCategory === "" ||
            job.job_category === state.selectedCategory)
      );
    },
    setFilteredJobs(state, action: PayloadAction<Job[]>) {
      state.filteredJobs = action.payload;
    },
  },
});

export const {
  setJobs,
  setLoading,
  setSearchQuery,
  setSelectedCategory,
  filterJobs,
  setFilteredJobs,
} = jobSlice.actions;

export default jobSlice.reducer;
