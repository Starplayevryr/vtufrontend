"use client";

import React, { useState } from "react";

const eventCategories = {
  MUSIC: [
    "Classical Vocal Solo (Hindustani/Carnatic)",
    "Classical Instrumental Solo (Percussion Tala Vadya)",
    "Classical Instrumental Solo (Non-Percussion Swara Vadya)",
    "Light Vocal Solo (Indian)",
    "Western Vocal Solo",
    "Group Song (Indian)",
    "Group Song (Western)",
    "Folk Orchestra",
  ],
  DANCE: ["Folk / Tribal Dance", "Classical Dance Solo"],
  THEATRE: ["Skit", "Mime", "Mimicry", "One Act Play"],
  LITERARY: ["Quiz", "Debate", "Elocution"],
  "FINE-ARTS": [
    "Collage",
    "Rangoli",
    "Cartooning",
    "Installation",
    "Poster Making",
    "Clay Modelling",
    "On Spot Painting",
    "Spot Photography",
  ],
};

interface FormData {
  name: string;
  usn: string;
  type: string;
  events: string[];
  photo: File | null;
  aadhar: File | null;
  sslc: File | null;
  puc: File | null;
  admission: File | null;
  idcard: File | null;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    usn: "",
    type: "",
    events: [],
    photo: null,
    aadhar: null,
    sslc: null,
    puc: null,
    admission: null,
    idcard: null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.usn) newErrors.usn = "USN is required.";
    if (!formData.type) newErrors.type = "Participant type is required.";
    if (formData.events.length === 0) newErrors.events = "Select at least one event.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleEventSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      events: checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      // Add form submission logic here (e.g., API call)
    }
  };

  return (
    <section id="register">
      <center>
        <h2>Registrant Page</h2>
      </center>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm focus:outline-none`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* USN */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            USN
          </label>
          <input
            type="text"
            name="usn"
            placeholder="Enter your USN"
            value={formData.usn}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.usn ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm focus:outline-none`}
          />
          {errors.usn && (
            <p className="text-red-500 text-xs mt-1">{errors.usn}</p>
          )}
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.type ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm focus:outline-none`}
          >
            <option value="">Select type</option>
            <option value="PARTICIPANT">PARTICIPANT</option>
            <option value="TEAMMANAGER">TEAM MANAGER</option>
            <option value="ACCOMPANIST">ACCOMPANIST</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-xs mt-1">{errors.type}</p>
          )}
        </div>

        {/* Events */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Events
          </label>
          {Object.entries(eventCategories).map(([category, events]) => (
            <fieldset key={category} className="mb-2">
              <legend className="font-semibold">{category}</legend>
              {events.map((event) => (
                <div key={event}>
                  <input
                    type="checkbox"
                    name="events"
                    value={event}
                    onChange={handleEventSelection}
                  />
                  <label className="ml-2">{event}</label>
                </div>
              ))}
            </fieldset>
          ))}
          {errors.events && (
            <p className="text-red-500 text-xs mt-1">{errors.events}</p>
          )}
        </div>

        {/* File Uploads */}
        {["photo", "aadhar", "sslc", "puc", "admission", "idcard"].map(
          (fileField) => (
            <div key={fileField} className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor={fileField}
              >
                {fileField.toUpperCase()}:
              </label>
              <input
                type="file"
                id={fileField}
                name={fileField}
                onChange={handleFileChange}
                className="w-full text-sm"
              />
            </div>
          )
        )}

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
