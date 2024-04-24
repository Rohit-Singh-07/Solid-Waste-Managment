import React, { useState } from "react";

const PaymentPage = () => {

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    setCardNumber("");
    setExpiryDate("");
    setCVV("");
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Payment Information
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium leading-5 text-gray-700">
                Card Number
              </label>
              <input
                id="card-number"
                className="mt-1 form-input block w-full py-3 px-4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter card number"
                required
              />
            </div>

            <div className="mt-6 -mx-3 md:flex">
              <div className="md:w-1/2 px-3">
                <label htmlFor="expiry-date" className="block text-sm font-medium leading-5 text-gray-700">
                  Expiry Date
                </label>
                <input
                  id="expiry-date"
                  className="mt-1 form-input block w-full py-3 px-4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 px-3">
                <label htmlFor="cvv" className="block text-sm font-medium leading-5 text-gray-700">
                  CVV
                </label>
                <input
                  id="cvv"
                  className="mt-1 form-input block w-full py-3 px-4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  placeholder="Enter CVV"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                Name on Card
              </label>
              <input
                id="name"
                className="mt-1 form-input block w-full py-3 px-4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name on card"
                required
              />
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                Email
              </label>
              <input
                id="email"
                className="mt-1 form-input block w-full py-3 px-4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
