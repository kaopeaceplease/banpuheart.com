export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Life at Nissan</h1>
        <p className="text-lg text-gray-700">
          Explore the exciting journey and opportunities at Nissan. Join us in
          shaping the future of mobility.
        </p>
        <button className="focus:shadow-outline-blue mt-6 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800">
          Learn More
        </button>
      </div>
    </div>
  );
}
