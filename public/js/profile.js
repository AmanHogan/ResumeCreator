var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener('click', submitEducationData)

var resumeTitleInput = document.getElementById("input-name");
var resumeAddress1Input = document.getElementById("input-address1");
var resumeAddress2Input = document.getElementById("input-address2");
var resumeAddress3Input = document.getElementById("input-address3");
var resumeCollegeInput = document.getElementById("input-college");
var resumeStartYearInput = document.getElementById("input-grad-start");
var resumeEndYearInput = document.getElementById("input-grad-end");
var resumeDegreeNameInput = document.getElementById("input-degree");
var resumeGpaInput = document.getElementById("input-gpa");
var resumeTitle = document.getElementById("resume-title");
var resumeAddress1 = document.getElementById("address1");
var resumeAddress2 = document.getElementById("address2");
var resumeAddress3 = document.getElementById("address3");
var resumeCollege = document.getElementById("resume-college");
var resumeStartYear = document.getElementById("grad-year-start");
var resumeEndYear = document.getElementById("grad-year-end");
var resumeDegreeName = document.getElementById("resume-degree");
var resumeGpa = document.getElementById("resume-gpa");

resumeTitleInput.addEventListener("input", function() {resumeTitle.innerText = resumeTitleInput.value.toUpperCase();});
resumeAddress1Input.addEventListener("input", function() {resumeAddress1.innerText = resumeAddress1Input.value;});
resumeAddress2Input.addEventListener("input", function() {resumeAddress2.innerText = resumeAddress2Input.value;});
resumeAddress3Input.addEventListener("input", function() {resumeAddress3.innerText = resumeAddress3Input.value;});   
resumeCollegeInput.addEventListener("input", function() {resumeCollege.innerText = resumeCollegeInput.value;});
resumeStartYearInput.addEventListener("input", function() {resumeStartYear.innerText = resumeStartYearInput.value;}); 
resumeEndYearInput.addEventListener("input", function() {resumeEndYear.innerText = resumeEndYearInput.value;});
resumeDegreeNameInput.addEventListener("input", function() {resumeDegreeName.innerText = resumeDegreeNameInput.value;});   
resumeGpaInput.addEventListener("input", function() {resumeGpa.innerText = resumeGpaInput.value;}); 
    

function submitEducationData(){

    // Assuming you have the following variables declared:
    const resumeTitleInput = document.getElementById("input-name");
    const resumeAddress1Input = document.getElementById("input-address1");
    const resumeAddress2Input = document.getElementById("input-address2");
    const resumeAddress3Input = document.getElementById("input-address3");
    const resumeCollegeInput = document.getElementById("input-college");
    const resumeStartYearInput = document.getElementById("input-grad-start");
    const resumeEndYearInput = document.getElementById("input-grad-end");
    const resumeDegreeNameInput = document.getElementById("input-degree");
    const resumeGpaInput = document.getElementById("input-gpa");
    
    // Creating the workExperienceData object
    const educationData = 
    {
        inputName: resumeTitleInput.value || "N/A",
        address1: resumeAddress1Input.value || "N/A",
        address2: resumeAddress2Input.value || "N/A",
        address3: resumeAddress3Input.value || "N/A",
        college: resumeCollegeInput.value || "N/A",
        startYear: resumeStartYearInput.value || "N/A",
        endYear: resumeEndYearInput.value || "N/A",
        degreeName: resumeDegreeNameInput.value || "N/A",
        gpa: resumeGpaInput.value || "N/A"
    };


    // Build the query string with the data
  const queryString = Object.keys(educationData)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(educationData[key])}`)
  .join('&');


// Make the GET request by appending the query string to the URL
window.location.href = `/Skills?${queryString}`;
}
