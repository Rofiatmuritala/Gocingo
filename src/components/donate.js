"use client";

import React, { useState } from "react";

const DonateForm = () => {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [optionalMessage, setOptionalMessage] = useState("");
  const [proceedToPayment, setProceedToPayment] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setProceedToPayment(true);
  };

  const handleDonateNow = (e) => {
    e.preventDefault();
    setThankYouMessage(true);
    setProceedToPayment(false);
  };

  const handleCloseThankYou = () => {
    setThankYouMessage(false);
    setDonorName("");
    setDonorEmail("");
    setDonationAmount("");
    setPaymentMethod("Credit Card");
    setOptionalMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white relative mt-6">
      {!proceedToPayment && !thankYouMessage && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl ">
          <h2 className="text-lg lg:text-xl font-bold mt-24 mb-6 md:mt-4 sm:text-center">
            Donate to Our Cause
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Your support makes a difference!
          </p>
          <form onSubmit={handleProceedToPayment}>
            <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
              <div className="flex-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount ($)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      id="credit-card"
                      type="radio"
                      value="Credit Card"
                      checked={paymentMethod === "Credit Card"}
                      onChange={() => setPaymentMethod("Credit Card")}
                      className="h-4 w-4 text-green-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="credit-card"
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      type="radio"
                      value="PayPal"
                      checked={paymentMethod === "PayPal"}
                      onChange={() => setPaymentMethod("PayPal")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      PayPal
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    value={optionalMessage}
                    onChange={(e) => setOptionalMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Leave a message (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-400 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {proceedToPayment && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-lg font-bold mb-4">Confirm Your Donation</h2>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Name:</strong> {donorName}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Email:</strong> {donorEmail}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            You are about to donate <strong>${donationAmount}</strong> using{" "}
            <strong>{paymentMethod}</strong>.
          </p>
          {optionalMessage && (
            <p className="text-sm text-gray-600 mb-4">
              <strong>Message:</strong> {optionalMessage}
            </p>
          )}
          <div className="flex justify-between">
            <button
              onClick={() => setProceedToPayment(false)}
              className="w-5/12 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
            >
              Edit Details
            </button>
            <button
              onClick={handleDonateNow}
              className="w-5/12 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}

      {thankYouMessage && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-black mb-2">Thank You!</h2>
            <p className="text-sm text-gray-700 mb-2 my-10">
              Thank you, <strong>{donorName}</strong>, for your generous
              donation of <strong>${donationAmount}</strong> using{" "}
              <strong>{paymentMethod}</strong>.
            </p>
            {optionalMessage && (
              <p className="text-sm text-gray-700 mb-4">
                Your message: "{optionalMessage}"
              </p>
            )}
            <button
              onClick={handleCloseThankYou}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-lime-400 my-10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateForm;
