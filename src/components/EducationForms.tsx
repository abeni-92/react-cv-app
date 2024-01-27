import React, { useState, useEffect } from "react";
import { GraduationSvg } from "../svg/graduationSvg";
import { ChevronDown } from "../svg/chevronDown";
import { ChevronUp } from "../svg/chevronUp";

export const EducationForm = ({ addEdu }) => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEdu(education);
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
    <form onSubmit={handleSubmit} className=" bg-white rounded-xl p-4">
      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="flex items-center gap-4">
          <GraduationSvg />
          <p className="text-xl text-black font-semibold">Education</p>
        </h3>
        {open ? <ChevronUp /> : <ChevronDown/> }
      </div>
      {open && (
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
			<button type="submit" className="bg-blue-400 px-4 py-1 flex-1">Save</button>				
			<button className="bg-red-400 px-4 py-1 flex-1" onClick={() => {setOpen(false)}}>Cancel</button>			
		  </div>
        </div>
      )}
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
    <ul>
      {eduList.map((edu, index) => (
        <li key={index}>
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
            <>
              {edu.degree}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => deleteEducation(index)}>Delete</button>
            </>
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
    <div className="flex flex-col items-center gap-2">
      <input
        type="text"
        placeholder="School"
        name="school"
        className="border p-1 rounded-md"
        value={editedEducation.school}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        className="border p-1 rounded-md"
        value={editedEducation.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="start date"
        name="startDate"
        className="border p-1 rounded-md"
        value={editedEducation.startDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="end date"
        name="endDate"
        className="border p-1 rounded-md"
        value={editedEducation.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="location"
        name="location"
        className="border p-1 rounded-md"
        value={editedEducation.location}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-300 px-4 py-1"
        onClick={handleSave}
      >
        Save
      </button>
      <button type="submit" className="bg-red-300 px-4 py-1" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};
