export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-8">The job posting you're looking for doesn't exist or has been removed.</p>
        <a href="/jobs" className="text-indigo-600 hover:text-indigo-500">
          Browse all jobs →
        </a>
      </div>
    </div>
  );
}