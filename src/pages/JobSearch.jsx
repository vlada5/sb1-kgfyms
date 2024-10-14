import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock job data
const mockJobs = [
  { id: 1, title: 'Software Engineer', company: 'Tech Co', city: 'New York' },
  { id: 2, title: 'Data Analyst', company: 'Data Corp', city: 'San Francisco' },
  { id: 3, title: 'Product Manager', company: 'Product Inc', city: 'Chicago' },
  { id: 4, title: 'UX Designer', company: 'Design Studio', city: 'New York' },
];

function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    job.city.toLowerCase().includes(cityFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Job Search</h2>
      <div>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by city..."
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              {job.title} at {job.company} - {job.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSearch;