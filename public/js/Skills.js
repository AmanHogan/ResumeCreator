var nextPageButton = document.getElementById("go-to-work-section");
nextPageButton.addEventListener('click', goToWorkPage);

educationObject = JSON.parse(localStorage.getItem("Education"));

var resumeTitle = document.getElementById("resume-title");
var resumeAddress1 = document.getElementById("address1");
var resumeAddress2 = document.getElementById("address2");
var resumeAddress3 = document.getElementById("address3");
var resumeCollege = document.getElementById("resume-college");
var resumeStartYear = document.getElementById("grad-year-start");
var resumeEndYear = document.getElementById("grad-year-end");
var resumeDegreeName = document.getElementById("resume-degree");
var resumeGpa = document.getElementById("resume-gpa");

resumeTitle.innerHTML = educationObject.name.toUpperCase();
resumeAddress1.innerHTML = educationObject.address1;
resumeAddress2.innerHTML = educationObject.address2;
resumeAddress3.innerHTML = educationObject.address3;
resumeCollege.innerHTML = educationObject.college;
resumeStartYear.innerHTML = educationObject.startYear;
resumeEndYear.innerHTML = educationObject.endYear;
resumeDegreeName.innerHTML = educationObject.degree;
resumeGpa.innerHTML = educationObject.gpa;


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
    



