import React from 'react';
import { useParams } from 'react-router-dom';

// Mock job data
const mockJobs = [
  { id: 1, title: 'Software Engineer', company: 'Tech Co', city: 'New York', description: 'Exciting opportunity for a skilled software engineer...' },
  { id: 2, title: 'Data Analyst', company: 'Data Corp', city: 'San Francisco', description: 'Join our data team to analyze complex datasets...' },
  { id: 3, title: 'Product Manager', company: 'Product Inc', city: 'Chicago', description: 'Lead product development in a fast-paced environment...' },
  { id: 4, title: 'UX Designer', company: 'Design Studio', city: 'New York', description: 'Create beautiful and intuitive user experiences...' },
];

function JobDetail() {
  const { id } = useParams();
  const job = mockJobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <h3>{job.company} - {job.city}</h3>
      <p>{job.description}</p>
    </div>
  );
}

export default JobDetail;