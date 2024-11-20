import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCharities } from '../redux/slices/charitySlice';

const CharityDetails = () => {
  const { charityId } = useParams();
  const dispatch = useDispatch();
  const { charities, loading, error } = useSelector((state) => state.charities);
  
  useEffect(() => {
    if (!charities.length) {
      dispatch(fetchCharities());
    }
  }, [dispatch, charities.length]);

  const charity = charities.find((item) => item.id === charityId);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">Error: {error}</div>;
  }

  if (!charity) {
    return <div className="text-center text-gray-600 mt-4">Charity not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">{charity.name}</h1>
          <p className="text-gray-700 mb-4">{charity.description}</p>
          <div className="flex gap-4">
            <div className="bg-gray-100 rounded-md p-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              <p>{charity.location}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Founded</h3>
              <p>{charity.foundedYear}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <p>{charity.contactEmail}</p>
            </div>
          </div>
        </section>

        {/* Donation Call-to-Action */}
        <section className="bg-purple-700 text-white rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Support {charity.name}</h2>
          <p className="mb-4">Your donations make a difference! Help us in our mission.</p>
          <Link to="/donate" className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold">
            Donate Now
          </Link>
        </section>

        {/* Charity's Projects or Programs */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Programs</h2>
          {charity.programs && charity.programs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {charity.programs.map((program) => (
                <div key={program.id} className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-700">{program.name}</h3>
                  <p className="text-gray-700 mt-2">{program.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No programs available</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CharityDetails;

