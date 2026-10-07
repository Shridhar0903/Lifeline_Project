import React, { useState } from 'react';
import { FaHandHoldingHeart, FaUser, FaPhoneAlt, FaMapMarkerAlt, FaClinicMedical, FaTint, FaNotesMedical, FaPaperPlane, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contactPerson: '',
    contactNumber: '',
    bloodGroup: '',
    hospitalName: '',
    city: '',
    pincode: '',
    unitsRequired: 1,
    additionalNote: '',
    isEmergency: false
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [matchingDonors, setMatchingDonors] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setMatchingDonors([]);

    try {
      // 1. Save blood request in backend
      const response = await fetch('http://localhost:8080/api/requests/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Emergency Blood Request submitted successfully!');

        // 2. Fetch matching available donors immediately from backend
        const donorResponse = await fetch(
          `http://localhost:8080/api/requests/search-donors?city=${formData.city}&bloodGroup=${encodeURIComponent(formData.bloodGroup)}`
        );

        if (donorResponse.ok) {
          const donorData = await donorResponse.json();
          setMatchingDonors(donorData);
        }
      } else {
        setErrorMessage('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      setErrorMessage('Unable to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to generate pre-filled WhatsApp message URL
  const getWhatsAppLink = (donorPhone, donorName) => {
    const message = `Hello ${donorName}, Urgent blood request! Patient ${formData.patientName} urgently requires ${formData.bloodGroup} blood at ${formData.hospitalName}, ${formData.city}. Please contact ${formData.contactNumber} if you can donate. Thank you!`;
    return `https://wa.me/91${donorPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-red-600 flex items-center justify-center gap-2">
          <FaHandHoldingHeart /> Post a Blood Request
        </h2>
        <p className="text-gray-600 mt-2">
          Fill in details below to post an emergency blood request and connect with nearby donors.
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-r-xl shadow-sm">
          <p className="font-bold">{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-800 rounded-r-xl shadow-sm">
          <p className="font-bold">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
        
        {/* Urgent Emergency Checkbox */}
        <div className="bg-red-50 p-4 rounded-xl border border-red-200 flex items-center gap-3">
          <input
            type="checkbox"
            id="isEmergency"
            name="isEmergency"
            checked={formData.isEmergency}
            onChange={handleChange}
            className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
          />
          <label htmlFor="isEmergency" className="font-bold text-red-700 flex items-center gap-2 cursor-pointer">
            <FaExclamationTriangle className="text-red-600" /> Mark as Critical / Emergency Request
          </label>
        </div>

        {/* Patient Name & Contact Person */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaUser className="text-red-500" /> Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              placeholder="Full name of patient"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaUser className="text-red-500" /> Contact Person Name
            </label>
            <input
              type="text"
              name="contactPerson"
              placeholder="Name of contact person"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Contact Number & Blood Group */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="10-digit phone number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaTint className="text-red-500" /> Blood Group Needed
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
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
        </div>

        {/* Hospital Name & Units Required */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaClinicMedical className="text-red-500" /> Hospital Name
            </label>
            <input
              type="text"
              name="hospitalName"
              placeholder="e.g. City Hospital"
              value={formData.hospitalName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaTint className="text-red-500" /> Units Required
            </label>
            <input
              type="number"
              name="unitsRequired"
              min="1"
              max="10"
              value={formData.unitsRequired}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* City & Pincode */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> City
            </label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Vengurla, Mumbai"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> Pincode
            </label>
            <input
              type="text"
              name="pincode"
              placeholder="6-digit pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Additional Note */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <FaNotesMedical className="text-red-500" /> Additional Note (Optional)
          </label>
          <textarea
            name="additionalNote"
            rows="3"
            placeholder="Any specific note e.g. Urgent requirement within 2 hours..."
            value={formData.additionalNote}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
        >
          {loading ? 'Submitting Request...' : <><FaPaperPlane /> Submit Emergency Request</>}
        </button>
      </form>

      {/* Immediate Matching Donors Section */}
      {matchingDonors.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-red-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaTint className="text-red-600" /> Available Matching Donors Found ({matchingDonors.length})
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Contact these donors directly via Call or WhatsApp to request urgent blood donation:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {matchingDonors.map((donor) => (
              <div key={donor.id} className="p-4 border rounded-xl shadow-sm flex flex-col justify-between bg-gray-50">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{donor.fullName}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt className="text-red-500" /> {donor.city}
                  </p>
                  <p className="text-sm font-semibold text-red-600 mt-1">
                    Group: <span className="font-bold">{donor.bloodGroup}</span>
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <a
                    href={`tel:${donor.phoneNumber}`}
                    className="flex-1 bg-green-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-1"
                  >
                    <FaPhoneAlt /> Call
                  </a>
                  <a
                    href={getWhatsAppLink(donor.phoneNumber, donor.fullName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-500 text-white text-sm font-bold py-2 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp className="text-lg" /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestBlood;