let workExperienceObject = JSON.parse(localStorage.getItem("Experience"));
let workExperiences = workExperienceObject.experiences;
let workExpCount = workExperiences.length;
console.log(workExperiences);
console.log(workExperienceObject);

var resumeTitle = document.getElementById("resume-title");
var resumeAddress1 = document.getElementById("address1");
var resumeAddress2 = document.getElementById("address2");
var resumeAddress3 = document.getElementById("address3");
var resumeCollege = document.getElementById("resume-college");
var resumeStartYear = document.getElementById("grad-year-start");
var resumeEndYear = document.getElementById("grad-year-end");
var resumeDegreeName = document.getElementById("resume-degree");
var resumeGpa = document.getElementById("resume-gpa");
var resumeLangauges = document.getElementById("skills-language");
var resumeOperating = document.getElementById("skills-operating");
var resumeDevloper = document.getElementById("skills-developer");
var resumeCourseWork =document.getElementById("skills-coursework");

resumeTitle.innerHTML = workExperienceObject.name.toUpperCase();
resumeAddress1.innerHTML = workExperienceObject.address1;
resumeAddress2.innerHTML = workExperienceObject.address2;
resumeAddress3.innerHTML = workExperienceObject.address3;
resumeCollege.innerHTML = workExperienceObject.college;
resumeStartYear.innerHTML = workExperienceObject.startYear;
resumeEndYear.innerHTML = workExperienceObject.endYear;
resumeDegreeName.innerHTML = workExperienceObject.degree;
resumeGpa.innerHTML = workExperienceObject.gpa;
resumeLangauges.innerHTML = workExperienceObject.langauges;
resumeOperating.innerHTML = workExperienceObject.operating;
resumeDevloper.innerHTML = workExperienceObject.tools;
resumeCourseWork.innerHTML = workExperienceObject.courses;

for (var i = 0; i < workExperiences.length; i++) 
{
    var expResumeView = document.createElement('exp-resume-view-' + workExpCount.toString());
    var bodyResumeView = document.getElementById('work-exp');
  
    var expTitleResumeView = document.createElement('exp-title-view-' + workExpCount.toString());
    var expLocalResumeView = document.createElement('exp-local-view-' + workExpCount.toString());
    var expNameResumeView = document.createElement('exp-name-view-' + workExpCount.toString());
    var expDateResumeView = document.createElement('exp-date-view-' + workExpCount.toString());
    var expBulletListResumeView = document.createElement('ul');
    var expBulletResumeView1 = document.createElement('li');
    var expBulletResumeView2 = document.createElement('li');
    var expBulletResumeView3 = document.createElement('li');


  
    expResumeView.style = 'display: grid; grid-template-columns: 1fr 1fr; margin-right: 32px; padding-top: 4px;';
    expTitleResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start; margin-left: 32px; display:inline;';
    expLocalResumeView.style = 'color: black; font-size: 18px; display:inline; font-family: Times New Roman; font-weight: bold; justify-self: end;';
    expNameResumeView.style = 'color: black; font-size: 18px; width: fit-content; margin-left: 32px; font-family: Times New Roman; justify-self: start; font-style: italic;';
    expDateResumeView.style = 'color: black; font-size: 18px; display:inline; margin-left: 32px; width: fit-content; font-family: Times New Roman; justify-self: end; font-style: italic;';
    expBulletListResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman; justify-self: start; margin-left: 32px; display:inline; padding-top: 0px; margin-top: 0px;';
  
    expTitleResumeView.innerHTML = workExperiences[i].jobTitle;
    expLocalResumeView.innerHTML =workExperiences[i].jobAddress
    expNameResumeView.innerHTML =workExperiences[i].companyName;
    expDateResumeView.innerHTML =workExperiences[i].jobDate;
    expBulletResumeView1.innerHTML =workExperiences[i].bullet1;
    expBulletResumeView2.innerHTML =workExperiences[i].bullet2;
    expBulletResumeView3.innerHTML =workExperiences[i].bullet3;

    bodyResumeView.appendChild(expResumeView);
    expResumeView.appendChild(expTitleResumeView);
    expResumeView.appendChild(expLocalResumeView);
    expResumeView.appendChild(expNameResumeView);
    expResumeView.appendChild(expDateResumeView);
    expResumeView.appendChild(expBulletListResumeView);
    expBulletListResumeView.appendChild(expBulletResumeView1);
    expBulletListResumeView.appendChild(expBulletResumeView2);
    expBulletListResumeView.appendChild(expBulletResumeView3);
}

