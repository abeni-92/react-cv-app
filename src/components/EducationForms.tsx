import React, { useState, useEffect } from "react";
import { GraduationSvg } from "../svg/graduationSvg";
import { ChevronDown } from "../svg/chevronDown";
import { ChevronUp } from "../svg/chevronUp";
import { PlusSvg } from "../svg/plusSvg";

export const EducationForm = ({ addEdu }) => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEdu(education);
    setCreate(false);
    setEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleChange = (e) => {
    setEducation({
      ...education,
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
          <GraduationSvg />
          <p className="text-xl text-black font-semibold">Education</p>
        </h3>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      {open ? (
        create ? (
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="school" className="flex flex-col gap-2">
              School
              <input
                type="text"
                placeholder="School"
                name="school"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={education.school}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="degree" className="flex flex-col gap-2">
              Degree
              <input
                type="text"
                placeholder="Degree"
                name="degree"
                className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
                value={education.degree}
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
                value={education.startDate}
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
                value={education.endDate}
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
                value={education.location}
                onChange={handleChange}
              />
            </label>
            <div className="flex gap-10 mt-4">
              <button type="submit" className="bg-blue-400 px-4 py-1 flex-1">
                Save
              </button>
              <button
                className="bg-red-400 px-4 py-1 flex-1"
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
            <PlusSvg /> <p className="text-lg">Education</p>
          </div>
        )
      ) : null}
    </form>
  );
};

export const EducationList = ({ eduList, editEducation, deleteEducation }) => {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <ul className="text-black flex flex-col gap-4">
      {eduList.map((edu, index) => (
        <li key={index} className="bg-white rounded-md p-2">
          {index === editingIndex ? (
            <EditableForm
              education={edu}
              onSave={(editedEducation) => {
                editEducation(index, editedEducation);
                handleCancelEdit();
              }}
              onCancel={handleCancelEdit}
            />
          ) : (
            <div className="flex justify-between">
              <p className="text-lg text-black font-semibold">{edu.school}</p>
              <div className="flex gap-4">
                <button
                  className="bg-green-300 py-1 px-4  rounded-md"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-300 py-1 px-4 rounded-md"
                  onClick={() => deleteEducation(index)}
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

const EditableForm = ({ education, onSave, onCancel }) => {
  const [editedEducation, setEditedEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  useEffect(() => {
    setEditedEducation(education);
  }, [education]);

  const handleChange = (e) => {
    setEditedEducation({
      ...editedEducation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedEducation);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <label htmlFor="school" className="flex flex-col gap-2">
        School
        <input
          type="text"
          placeholder="School"
          name="school"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedEducation.school}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="degree" className="flex flex-col gap-2">
        Degree
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          className="border p-2 rounded-md bg-slate-100 placeholder:text-black focus:outline-slate-300"
          value={editedEducation.degree}
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
          value={editedEducation.startDate}
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
          value={editedEducation.endDate}
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
          value={editedEducation.location}
          onChange={handleChange}
        />
      </label>
      <div className="flex gap-4 justify-center mt-4">
        <button
          type="submit"
          className="w-40 bg-blue-300 px-4 py-1"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="submit"
          className="w-40 bg-red-300 px-4 py-1"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
