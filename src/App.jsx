import { useState } from "react";
import "./App.css";
import { EducationForm, EducationList } from "./components/EducationForms";
import { PersonalDetailsForm } from "./components/PersonalDetailsForm";
import { ExperienceForm, ExperienceList } from "./components/ExperienceForms";

function App() {
  const [eduList, setEduList] = useState([]);
  const [expList, setExpList] = useState([]);

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // Education 
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

  // Experience
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
    <div className="w-screen min-h-screen flex gap-20 bg-slate-100 ">
        <div className="flex flex-col gap-4 my-10 w-1/3 ml-10">
            <PersonalDetailsForm setPersonalDetails={setPersonalDetails} />
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
        <OutPutDetails personalDetails={personalDetails} eduList={eduList} expList={expList}/>
    </div>
  );
}

const OutPutDetails = ({personalDetails, eduList, expList}) => {
  return (
    <div className=" w-2/3 mr-20 my-10 text-black bg-white">
      <div className="p-6 bg-gray-700 text-white flex flex-col items-center">
        <p className="text-4xl font-bold mb-2"> {personalDetails.fullName}</p>
        <div className="flex gap-4">
          <p className="text-xl"> {personalDetails.email}</p>
          <p className="text-xl"> {personalDetails.phoneNumber}</p>
          <p className="text-xl"> {personalDetails.address}</p>
        </div>
      </div>

      <div className="py-6 px-10">
        {eduList.length > 0 && <h2 className="text-center bg-blue-100 p-2 text-xl font-bold">Education</h2> }
        {eduList.map((edu, index) => (
           <div key={index} className="flex gap-12 p-4 items-center">
            <div className="flex flex-col gap-2">
              <p>{edu.startDate} - {edu.endDate}</p>
              <p>{edu.location}</p>        
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{edu.school}</p>   
              <p>{edu.degree}</p>
            </div>
           </div> 

        ))}
      </div>

      <div className="py-6 px-10">
        {expList.length > 0 && <h2 className="text-center bg-blue-100 p-2 text-xl font-bold">Experience</h2>}
        {expList.map((exp, index) => (
           <div key={index} className="flex gap-12 p-4 items-center">
            <div className="flex flex-col gap-2">
              <p className="whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
              <p>{exp.location}</p>        
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{exp.companyName}</p>   
              <p>{exp.description}</p>
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default App;
