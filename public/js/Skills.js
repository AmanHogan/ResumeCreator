
let listOfSkills = [];
let indexOfSkills = listOfSkills.length;




var nextPageButton = document.getElementById("go-to-work-section");
nextPageButton.addEventListener('click', goToWorkPage);

var skillsButton = document.getElementById("addNewSectionButton");
skillsButton.addEventListener('click', addNewTechnicalSkill);


var languagesNameInput = document.getElementById("languages-input");
var resumeSystemInput = document.getElementById("systems-input");
var resumeToolsInput = document.getElementById("tools-input");
var resumeCourseInput = document.getElementById("coursework-input");
var languageName = document.getElementById("skills-language");
var resumeSystem = document.getElementById("skills-operating");
var resumeTool = document.getElementById("skills-developer");
var resumeCourse = document.getElementById("skills-coursework");

languagesNameInput.addEventListener("input", function() {languageName.innerText = languagesNameInput.value;});  
resumeSystemInput.addEventListener("input", function() {resumeSystem.innerText = resumeSystemInput.value;});
resumeToolsInput.addEventListener("input", function() {resumeTool.innerText = resumeToolsInput.value;});
resumeCourseInput.addEventListener("input", function() {resumeCourse.innerText = resumeCourseInput.value;});


function goToWorkPage()
{
    localStorage.clear();
    
    let skillsObject = 
    {
            name: educationObject.name || 'N/A',
            address1: educationObject.address1 || 'N/A',
            address2: educationObject.address2 || 'N/A',
            address3: educationObject.address3 || 'N/A',
            college: educationObject.college || 'N/A',
            startYear: educationObject.startYear || 'N/A',
            endYear: educationObject.endYear || 'N/A',
            degree: educationObject.degree || 'N/A',
            gpa: educationObject.gpa || 'N/A',
            langauges: languagesNameInput.value || 'N/A', 
            operating: resumeSystemInput.value || 'N/A',
            tools: resumeToolsInput.value || 'N/A',
            courses: resumeCourseInput.value || 'N/A'
    };
        
    localStorage.setItem("Skills", JSON.stringify(skillsObject));
    
    window.location.href = "http://127.0.0.1:5500/WorkExperience.html";
}


// Add event listener to the button
var skillsButton = document.getElementById("addNewSectionButton");
skillsButton.addEventListener('click', addNewTechnicalSkill);

// Function to add a new skills section
function addNewTechnicalSkill() {
  // Create the container div for the new skills section
  var newSkillsSection = document.createElement("skill-type");
  newSkillsSection.classList.add("skill1");

  // Create elements for the new skills section
  var newSkillType = document.createElement("" + indexOfSkills);
  newSkillType.classList.add("skill-type");
  newSkillType.innerText = "New Skill Type:";

  var newSkillsList = document.createElement("div");
  newSkillsList.classList.add("skills-list");
  newSkillsList.innerText = "New Skill"; // Add some default text to the skills list

  // Append the elements to the container div
  newSkillsSection.appendChild(newSkillType);
  newSkillsSection.appendChild(newSkillsList);

  // Append the new skills section to the existing skills container
  var skillsContainer = document.getElementById("skills-container");
  skillsContainer.appendChild(newSkillsSection);
}
