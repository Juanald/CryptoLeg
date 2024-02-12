import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-page bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Cryptocurrency Ledger
        </h1>
        <p className="text-gray-600 mt-2">
          View dynamic cryptocurrency data at a moment's notice with accurate
          graphs and real-time information.
        </p>
      </header>

      <main className="flex-grow">
        <section className="features text-center py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features:
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700 mb-2">
              Real-time Cryptocurrency Data
            </li>
            <li className="text-gray-700 mb-2">
              Interactive Graphs and Charts
            </li>
            <li className="text-gray-700">User-friendly Interface</li>
            {/* Add more features as needed */}
          </ul>
        </section>

        <section className="images text-center py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore the App
          </h2>
          <div className="image-container flex justify-around">
            {/* Add different images to showcase the app */}
            <img
              className="max-w-1/3 rounded-md shadow-md"
              src="image1.jpg"
              alt="App Feature 1"
            />
            <img
              className="max-w-1/3 rounded-md shadow-md"
              src="image2.jpg"
              alt="App Feature 2"
            />
            <img
              className="max-w-1/3 rounded-md shadow-md"
              src="image3.jpg"
              alt="App Feature 3"
            />
          </div>
        </section>
      </main>

      <footer className="text-center py-8">
        <p className="text-gray-700">
          Ready to get started?{" "}
          <Link to="/dashboard" className="text-blue-500 hover:underline">
            Explore the Dashboard
          </Link>
        </p>
      </footer>
    </div>
  );
}
