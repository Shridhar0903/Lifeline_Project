import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaPhoneAlt, FaExclamationTriangle } from 'react-icons/fa';

const FindDonors = () => {
  const [city, setCity] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [isOtherCity, setIsOtherCity] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    setIsOtherCity(false);

    try {
      // Backend API Call
      const response = await fetch(
        `http://localhost:8080/api/requests/search-donors?city=${city}&bloodGroup=${encodeURIComponent(bloodGroup)}`
      );

     if (response.ok) {
        const data = await response.json();
        setDonors(data);

        // partial/contains match चेक करा (उदा. 'vengurla' हे 'Vengurla, Sindhudurg' मध्ये आहे का)
        if (data.length > 0) {
          const userSearch = city.trim().toLowerCase().replace(',', '');
          const donorCity = data[0].city.trim().toLowerCase();

          // जर डोनरचे शहर युझरच्या इनपुटशी जुळत नसेल तरच 'isOtherCity' ट्रू करा
          if (!donorCity.includes(userSearch) && !userSearch.includes(donorCity.split(' ')[0])) {
            setIsOtherCity(true);
          } else {
            setIsOtherCity(false);
          }
        }
      } else {
        alert('Failed to fetch donors. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
      alert('Unable to connect to the server. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center flex items-center justify-center gap-2">
        <FaSearch /> Find Available Donors
      </h2>

      {/* Filter Form */}
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">City</label>
          <input
            type="text"
            placeholder="e.g. Mumbai, Pune"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">Blood Group</label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </div>
      </form>

      {/* Loading Indicator */}
      {loading && <p className="text-center font-semibold text-gray-600">Searching for donors...</p>}

      {/* Alert Banner: Donors found in other cities */}
      {isOtherCity && (
        <div className="mb-6 p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-900 rounded-r-2xl shadow-sm">
          <FaExclamationTriangle className="text-2xl text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-bold text-lg">
              No donors found in "{city}" for {bloodGroup} blood group.
            </p>
            <p className="text-sm text-amber-800 mt-1">
              Showing available donors with matching blood group (<strong>{bloodGroup}</strong>) from <strong>other cities</strong> below:
            </p>
          </div>
        </div>
      )}

      {/* No Donors Found Anywhere */}
      {!loading && searched && donors.length === 0 && (
        <div className="text-center bg-gray-100 p-6 rounded-xl">
          <p className="text-lg font-semibold text-gray-700">
            Currently, no available donors found for blood group {bloodGroup} in any city.
          </p>
        </div>
      )}

      {/* Donor Cards List */}
      <div className="grid md:grid-cols-2 gap-4">
        {donors.map((donor) => (
          <div key={donor.id} className="bg-white p-5 rounded-2xl shadow border-l-4 border-red-600 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{donor.fullName}</h3>
              <p className="text-sm font-medium text-gray-600 flex items-center gap-1 mt-1">
                <FaMapMarkerAlt className="text-red-500" /> {donor.city} ({donor.pincode})
              </p>
              <p className="text-sm font-semibold text-red-600 mt-1">
                Blood Group: <span className="text-lg font-bold">{donor.bloodGroup}</span>
              </p>
            </div>
            <a
              href={`tel:${donor.phoneNumber}`}
              className="bg-green-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-green-700 transition flex items-center gap-2"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDonors;