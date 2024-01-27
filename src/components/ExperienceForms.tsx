import React, { useEffect } from "react";
import { useState } from "react";

export const ExperienceForm = ({ addExp }) => {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExp(experience);
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 bg-white rounded-lg">
      <input
        type="text"
        placeholder="Company Name"
        name="companyName"
        className="border p-1 rounded-md"
        value={experience.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="position Title"
        name="positionTitle"
        className="border p-1 rounded-md"
        value={experience.positionTitle}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="start date"
        name="startDate"
        className="border p-1 rounded-md"
        value={experience.startDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="end date"
        name="endDate"
        className="border p-1 rounded-md"
        value={experience.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="location"
        name="location"
        className="border p-1 rounded-md"
        value={experience.location}
        onChange={handleChange}
      />
      <textarea
        name="description"
        id="description"
        className="border p-1 rounded-md"
        value={experience.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="bg-blue-300 px-4 py-1">
        Save
      </button>
    </form>
  );
};

export const ExperienceList = ({ expList, editExperience, deleteExperience }) => {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedIndex(index);
  };

  const handleCancel = () => {
    setEditedIndex(null);
  };

  return (
    <ul>
      {expList.map((exp, index) => (
        <li key={index}>
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
            <>
              {exp.companyName}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => deleteExperience(index)}>Delete</button>
            </>
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
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        type="text"
        placeholder="Company Name"
        name="companyName"
        className="border p-1 rounded-md"
        value={editedExperience.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="position Title"
        name="positionTitle"
        className="border p-1 rounded-md"
        value={editedExperience.positionTitle}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="start date"
        name="startDate"
        className="border p-1 rounded-md"
        value={editedExperience.startDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="end date"
        name="endDate"
        className="border p-1 rounded-md"
        value={editedExperience.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="location"
        name="location"
        className="border p-1 rounded-md"
        value={editedExperience.location}
        onChange={handleChange}
      />
      <textarea
        name="description"
        id="description"
        className="border p-1 rounded-md"
        value={editedExperience.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="bg-blue-300 px-4 py-1" onClick={handleSave}>
        Save
      </button>
      <button type="submit" className="bg-red-300 px-4 py-1" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};
