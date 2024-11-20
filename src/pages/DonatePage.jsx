import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DonationCard from '../components/DonationCard';
import { fetchUserDonations } from '../redux/slices/donationSlice'; // Adjust the import based on your actual file structure

const DonatePage = () => {
  const dispatch = useDispatch();
  const { donations = [], recurringDonations = [], loading, error } = useSelector(
    (state) => state.donations
  );

  // Replace 'userId' with the actual user ID once it's available in your application
  const userId = 1;

  useEffect(() => {
    dispatch(fetchUserDonations(userId));
  }, [dispatch, userId]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Empower Your Giving
            </h1>
            <p className="mt-4 text-xl">
              Experience seamless and impactful donations today.
            </p>
            <div className="mt-8">
              <Link
                to="/charities"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Donating
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One-Time Donations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Your One-Time Donations
          </h2>
          {loading ? (
            <div className="text-center">Loading donations...</div>
          ) : error ? (
            <div className="text-center text-red-500">Error: {error}</div>
          ) : donations?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donations.map((donation) => (
                <DonationCard key={donation.id} {...donation} />
              ))}
            </div>
          ) : (
            <div className="text-center">No one-time donations found</div>
          )}
        </div>
      </section>

      {/* Recurring Donations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Your Recurring Donations
          </h2>
          {loading ? (
            <div className="text-center">Loading recurring donations...</div>
          ) : recurringDonations?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recurringDonations.map((donation) => (
                <DonationCard key={donation.id} {...donation} />
              ))}
            </div>
          ) : (
            <div className="text-center">No recurring donations found</div>
          )}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-700">Flexible Options</h3>
              <p className="mt-4 text-gray-700">
                Choose the donation amount and frequency that suits your budget.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-700">Transparent Tracking</h3>
              <p className="mt-4 text-gray-700">
                Know exactly where your donations go and the impact they make.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-700">Support Our Community</h3>
              <p className="mt-4 text-gray-700">
                Join a community that believes in making a positive change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;

