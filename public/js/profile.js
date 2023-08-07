
document.getElementById('page-buttons').addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
      if (target.id === 'preview-button') {
          previewResume();
      } else if (target.id === 'submit-button') {
        submitEducationData();
      }
  }
});

function previewResume() {

  var resumeTitle = document.getElementById("resume-title");
  var resumeAddress1 = document.getElementById("address1");
  var resumeAddress2 = document.getElementById("address2");
  var resumeAddress3 = document.getElementById("address3");
  var resumeCollege = document.getElementById("resume-college");
  var resumeGPA = document.getElementById("resume-gpa");
  var resumeGrad = document.getElementById("grad-year-start");
  var resumeDegree = document.getElementById("resume-degree");

  resumeTitle.innerHTML = document.getElementById("input-name").value.toUpperCase() || "First and Last Name".toUpperCase() ;
  resumeAddress1.innerHTML = document.getElementById("input-address").value || "Address";
  resumeAddress2.innerHTML = document.getElementById("input-city").value || "City";
  resumeAddress3.innerHTML = document.getElementById("input-zip-state").value || "Zip, State";
  resumeCollege.innerHTML = document.getElementById("input-college").value || "College Name";
  resumeGPA.innerHTML = document.getElementById("input-gpa").value || "GPA";
  resumeGrad.innerHTML = (document.getElementById("input-start").value || "Start Year") + ' - ' + (document.getElementById("input-end").value || "End Year");
  resumeDegree.innerHTML = document.getElementById("input-degree-dp").value + ' of ' + (document.getElementById("input-degree").value || "Technical Degree") ;
}

function submitEducationData()
{
  // Creating the workExperienceData object
  const educationData = 
  {
    inputName: document.getElementById("input-name").value.toUpperCase() || "N/A",
    address1: document.getElementById("input-address").value || "N/A",
    address2: document.getElementById("input-city").value || "N/A",
    address3: document.getElementById("input-zip-state").value || "N/A",
    college: document.getElementById("input-college").valu || "N/A",
    startYear: document.getElementById("input-start").value || "N/A",
    endYear: document.getElementById("input-end").value || "N/A",
    degreeName: document.getElementById("input-degree-dp").value + ' of ' + (document.getElementById("input-degree").value || "N/A") || "N/A",
    gpa:  document.getElementById("input-gpa").value  || "N/A"
  };

  // Build the query string with the data
  const queryString = Object.keys(educationData)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(educationData[key])}`)
  .join('&');

  // Make the GET request by appending the query string to the URL
  window.location.href = `/Skills?${queryString}`;
}
