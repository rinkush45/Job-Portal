export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "We are looking for an experienced Frontend Developer..."
    },
    // Add more jobs here
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">All Jobs</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-gray-600 mt-2">{job.company}</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>{job.location}</span>
              <span className="mx-2">•</span>
              <span>{job.type}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{job.salary}</p>
            <p className="mt-4 text-gray-600">{job.description}</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}