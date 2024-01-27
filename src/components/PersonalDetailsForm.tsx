import React, { useState } from "react";

export const PersonalDetailsForm = ({ setPersonalDetails }) => {
  const [personalDetails, setPersonalDetailsLocal] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setPersonalDetailsLocal({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-8 px-6 text-black bg-white rounded-xl">
      <h2 className="pb-4 text-2xl">Personal Details</h2>
      <label htmlFor="fullname" className="flex flex-col gap-2">
        FullName
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={personalDetails.fullName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="fullname" className="flex flex-col gap-2">
        Email
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={personalDetails.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="fullname" className="flex flex-col gap-2">
        PhoneNumber
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={personalDetails.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="fullname" className="flex flex-col gap-2">
        Address
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={personalDetails.address}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
