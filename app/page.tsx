import Link from 'next/link';

export default function Home() {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k"
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "StartupX",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Dream Job
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Browse thousands of job opportunities and find the perfect match for your career.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/jobs/post" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Post a Job
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/jobs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Jobs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.company}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>{job.location}</span>
                <span className="mx-2">•</span>
                <span>{job.type}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{job.salary}</p>
              <Link href={`/jobs/${job.id}`} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}