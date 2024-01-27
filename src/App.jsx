import { useState } from "react";
import "./App.css";
import { EducationForm, EducationList } from "./components/EducationForms";
import { PersonalDetailsForm } from "./components/PersonalDetailsForm";
import { ExperienceForm, ExperienceList } from "./components/ExperienceForms";

function App() {
  const [eduList, setEduList] = useState([]);
  const [expList, setExpList] = useState([]);

  const addEdu = (education) => {
    setEduList([...eduList, education]);
  };

  const editEducation = (index, editedEducation) => {
    const updatedEducationList = [...eduList];
    updatedEducationList[index] = editedEducation;
    setEduList(updatedEducationList);
  };

  const deleteEducation = (index) => {
    const updatedEducationList = [...eduList];
    updatedEducationList.splice(index, 1);
    setEduList(updatedEducationList);
  };

  const addExp = (experience) => {
    setExpList([...expList, experience]);
  };

  const editExperience = (index, editedExperience) => {
    const updatedExperienceList = [...expList];
    updatedExperienceList[index] = editedExperience;
    setExpList(updatedExperienceList);
  };

  const deleteExperience = (index) => {
    const updatedExperienceList = [...expList];
    updatedExperienceList.splice(index, 1);
    setExpList(updatedExperienceList);
  };

  return (
    <div className="w-screen flex justify-around bg-slate-100 ">
        <div className="flex flex-col gap-4 my-10 w-1/3">
            <PersonalDetailsForm />
            <EducationForm addEdu={addEdu} />
            <EducationList
            eduList={eduList}
            editEducation={editEducation}
            deleteEducation={deleteEducation}
            />
            <ExperienceForm addExp={addExp} />
            <ExperienceList
            expList={expList}
            editExperience={editExperience}
            deleteExperience={deleteExperience}
            />
        </div>
        <div>

        </div>
    </div>
  );
}

export default App;
