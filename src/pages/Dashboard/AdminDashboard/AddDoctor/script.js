// addEducationFields
export const addEducationFields = () => {
    const educationParent = document.getElementById('educationParent');

    const educationContainerDiv = document.createElement('div');
    educationContainerDiv.id = 'educationContainer';
    educationContainerDiv.className = 'education mt-1';

    // universityName field starts
    const universityField = document.createElement('input');
    universityField.id = "university";
    universityField.name = "university";
    universityField.type = 'text';
    universityField.autocomplete = 'off';
    universityField.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm mt-5";
    universityField.placeholder = "University Name";
    // universityName field ends


    // degree_sessionContainer div starts
    const div = document.createElement('div');
    div.className = "degree_sessionContainer grid md:gap-5 grid-cols-1 md:grid-cols-2 mt-2";

    // degree field starts
    const degreeField = document.createElement('input');
    degreeField.id = "degree";
    degreeField.name = "degree";
    degreeField.type = 'text';
    degreeField.autocomplete = 'off';
    degreeField.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm mb-2 md:mb-0";
    degreeField.placeholder = "Degree";
    // degree field ends

    // session field starts
    const sessionField = document.createElement('input');
    sessionField.id = "session";
    sessionField.name = "session";
    sessionField.type = 'text';
    sessionField.autocomplete = 'off';
    sessionField.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm";
    sessionField.placeholder = "Session";
    // session field ends

    
    div.appendChild(degreeField);
    div.appendChild(sessionField);

    
    educationContainerDiv.appendChild(universityField);
    educationContainerDiv.appendChild(div);

    educationParent.appendChild(educationContainerDiv);
}





// addWorkExperienceFields
export const addWorkExperienceFields = () => {
    const workExperienceContainer = document.getElementById('workExperienceParent');

    const div = document.createElement('div');
    div.id = "workExperienceContainer";
    div.className = "workExperienceContainer grid md:gap-5 grid-cols-1 md:grid-cols-2 mt-2 mb-3";

    // experience field starts
    const experienceField = document.createElement('input');
    experienceField.id = "experience";
    experienceField.name = "experience";
    experienceField.type = 'text';
    experienceField.autocomplete = 'off';
    experienceField.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm  mb-2 md:mb-0";
    experienceField.placeholder = "Experience";

    // session field starts
    const sessionField = document.createElement('input');
    sessionField.id = "session";
    sessionField.name = "session";
    sessionField.type = 'text';
    sessionField.autocomplete = 'off';
    sessionField.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm  mb-2 md:mb-0";
    sessionField.placeholder = "Session (2000 - 2001 format)";


    div.appendChild(experienceField);
    div.appendChild(sessionField);


    workExperienceContainer.appendChild(div);
}





// addAwardFields
export const addAwardFields = () => {
    const awardsParent = document.getElementById('awardsParent');

    const div = document.createElement('div');
    div.id = "awardContainer";
    div.className = "awardContainer mt-4";

    const awardName_yearContainer = document.createElement('div');
    awardName_yearContainer.id = "awardName_yearContainer";
    awardName_yearContainer.className = "awardsContainer grid md:gap-5 grid-cols-1 md:grid-cols-2 mt-2";

    // awardName field starts
    const awardName = document.createElement('input');
    awardName.id = "awardName";
    awardName.name = "awardName";
    awardName.type = 'text';
    awardName.autocomplete = 'off';
    awardName.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm  mb-2 md:mb-0";
    awardName.placeholder = "Award Name";


    // year field starts
    const year = document.createElement('input');
    year.id = "awardName";
    year.name = "awardName";
    year.type = 'text';
    year.autocomplete = 'off';
    year.className = "block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm  mb-2 md:mb-0";
    year.placeholder = "Year";


    // textarea field starts
    const textarea = document.createElement('textarea');
    textarea.id = "aboutAward";
    textarea.name = "aboutAward";
    textarea.rows = '2';
    textarea.autocomplete = "off";
    textarea.className = "block w-full rounded-md px-2 py-1.5 md:mt-2 border border-gray-300 focus:outline-[#4a817d] shadow-sm";
    textarea.placeholder = "Write here about award...";

    awardName_yearContainer.appendChild(awardName);
    awardName_yearContainer.appendChild(year);

    div.appendChild(awardName_yearContainer);
    div.appendChild(textarea);

    awardsParent.appendChild(div);
}