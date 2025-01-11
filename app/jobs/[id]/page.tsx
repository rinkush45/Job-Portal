import { notFound } from 'next/navigation';

// In a real application, this would come from a database
const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Learn and Build",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We are looking for an experienced Frontend Developer with strong React skills and a passion for building beautiful, responsive web applications. The ideal candidate will have 5+ years of experience with modern JavaScript frameworks and a deep understanding of web technologies.",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of JavaScript/TypeScript",
      "Experience with modern frontend tools and practices",
      "Excellent problem-solving skills",
      "Great communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work",
      "Health insurance",
      "401(k) matching",
      "Flexible hours"
    ]
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Learn and Build",
    location: "Jaipur, RJ",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Looking for a skilled Backend Engineer to join our growing team. You'll be working on scalable systems and microservices architecture.",
    requirements: [
      "3+ years of backend development experience",
      "Strong knowledge of Node.js and TypeScript",
      "Experience with REST APIs and GraphQL",
      "Database design and optimization skills",
      "CI/CD experience"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Flexible work hours",
      "Learning budget",
      "Company equity"
    ]
  }
];

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = parseInt(params.id);
  const job = JOBS.find(j => j.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="font-medium">{job.company}</span>
          <span className="mx-2">•</span>
          <span>{job.location}</span>
          <span className="mx-2">•</span>
          <span>{job.type}</span>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Salary Range</h2>
          <p className="text-gray-600">{job.salary}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <button className="w-full sm:w-auto flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Apply Now
        </button>
      </div>
    </div>
  );
}