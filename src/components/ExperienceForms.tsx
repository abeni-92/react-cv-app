import React, { useEffect } from "react";
import { useState } from "react";
import { ChevronDown } from "../svg/chevronDown";
import { ChevronUp } from "../svg/chevronUp";
import { GraduationSvg } from "../svg/graduationSvg";
import { PlusSvg } from "../svg/plusSvg";
import { SuitcaseSvg } from "../svg/suitcaseSvg";

export const ExperienceForm = ({ addExp }) => {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExp(experience);
    setCreate(false);
    setExperience({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white text-black rounded-xl p-4"
    >
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="flex items-center gap-4">
          <SuitcaseSvg />
          <p className="text-xl text-black font-semibold">Experience</p>
        </h3>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      {open ? (
        create ? (
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="companyname" className="flex flex-col gap-2">
              Company Name
              <input
                type="text"
                placeholder="Company Name"
                name="companyName"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.companyName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="positiontitle" className="flex flex-col gap-2">
              Position Title
              <input
                type="text"
                placeholder="position Title"
                name="positionTitle"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.positionTitle}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="startdate" className="flex flex-col gap-2">
              Start Date
              <input
                type="text"
                placeholder="start date"
                name="startDate"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.startDate}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="enddate" className="flex flex-col gap-2">
              End Date
              <input
                type="text"
                placeholder="end date"
                name="endDate"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.endDate}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="location" className="flex flex-col gap-2">
              Location
              <input
                type="text"
                placeholder="location"
                name="location"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="description" className="flex flex-col gap-2">
              Description
              <textarea
                name="description"
                id="description"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={experience.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <div className="flex justify-center items-center gap-6">
              <button
                type="submit"
                className="flex-1 bg-blue-300 px-4 py-1 my-4 rounded-sm"
              >
                Save
              </button>
              <button
                type="submit"
                className="flex-1 bg-red-300 px-4 py-1"
                onClick={() => {
                  setOpen(false);
                  setCreate(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            className="w-1/2 mt-3 flex items-center mx-auto justify-center gap-2 bg-blue-300 p-2 rounded-md cursor-pointer"
            onClick={() => setCreate(true)}
          >
            <PlusSvg /> <p className="text-lg">Experience</p>
          </div>
        )
      ) : null}
    </form>
  );
};

export const ExperienceList = ({
  expList,
  editExperience,
  deleteExperience,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedIndex(index);
  };

  const handleCancel = () => {
    setEditedIndex(null);
  };

  return (
    <ul className="text-black flex flex-col gap-4">
      {expList.map((exp, index) => (
        <li key={index} className="bg-white rounded-md p-2">
          {index === editedIndex ? (
            <EditableForm
              experience={exp}
              onCancel={handleCancel}
              onSave={(editedExperience) => {
                editExperience(index, editedExperience);
                handleCancel();
              }}
            />
          ) : (
            <div className="flex justify-between">
              <p className="text-lg text-black font-semibold">
                {exp.companyName}
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-green-300 py-1 px-4  rounded-md"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-300 py-1 px-4 rounded-md"
                  onClick={() => deleteExperience(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const EditableForm = ({ experience, onCancel, onSave }) => {
  const [editedExperience, setEditedExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    setEditedExperience(experience);
  }, [experience]);

  const handleChange = (e) => {
    setEditedExperience({
      ...editedExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedExperience);
  };

  return (
    <div className="flex flex-col gap-2 mt-4 p-4">
      <label htmlFor="companyname" className="flex flex-col gap-2">
        Company Name
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.companyName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="positiontitle" className="flex flex-col gap-2">
        Position Title
        <input
          type="text"
          placeholder="position Title"
          name="positionTitle"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.positionTitle}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="startdate" className="flex flex-col gap-2">
        Start Date
        <input
          type="text"
          placeholder="start date"
          name="startDate"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.startDate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="enddate" className="flex flex-col gap-2">
        End Date
        <input
          type="text"
          placeholder="end date"
          name="endDate"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.endDate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="location" className="flex flex-col gap-2">
        Location
        <input
          type="text"
          placeholder="location"
          name="location"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.location}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description" className="flex flex-col gap-2">
        Description
        <textarea
          name="description"
          id="description"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedExperience.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <div className="flex gap-4 justify-center mt-4">
        <button
          type="submit"
          className="w-40 bg-blue-300 px-4 py-1"
          onClick={handleSave}
        >
          Save
        </button>
        <button type="submit" className="w-40 bg-red-300 px-4 py-1" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
