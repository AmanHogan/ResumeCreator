let workExpCount = 0;
let listOfResumeExperiences = [];

let inputBarStyle1 = 'height: 40px; background-color: #202124;    border-color: rgb(139, 139, 139);    border-radius: 5px;    color:#ffffff;    transition: opacity .15s;    box-shadow: 10px 5px 5px black;    padding-inline-start: 20px;    margin-right: 16px;    margin-bottom: 8px;    font-size: 20px;';
let resumeexpTitleResumeViewStyle = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start;     margin-left: 32px; display:inline;' ;
let resumeExpLocalStyle = ' display: inline; color: black; font-size: 18px; width: fit-content; font-family: \'Times New Roman\', Times, serif;    justify-self: end;';

var goToFinalView = document.getElementById("go-to-final-view");
goToFinalView.addEventListener('click', nextPage);

let skillsObject = JSON.parse(localStorage.getItem("Skills"));
console.log(skillsObject);

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

resumeTitle.innerHTML = skillsObject.name.toUpperCase();
resumeAddress1.innerHTML = skillsObject.address1;
resumeAddress2.innerHTML = skillsObject.address2;
resumeAddress3.innerHTML = skillsObject.address3;
resumeCollege.innerHTML = skillsObject.college;
resumeStartYear.innerHTML = skillsObject.startYear;
resumeEndYear.innerHTML = skillsObject.endYear;
resumeDegreeName.innerHTML = skillsObject.degree;
resumeGpa.innerHTML = skillsObject.gpa;
resumeLangauges.innerHTML = skillsObject.langauges;
resumeOperating.innerHTML = skillsObject.operating;
resumeDevloper.innerHTML = skillsObject.tools;
resumeCourseWork.innerHTML = skillsObject.courses;

var newExperienceBttn = document.getElementById("create-exp-bttn");
newExperienceBttn.addEventListener('click', newExperience);

function newExperience()
{
    let workExperience = new WorkExperience(listOfResumeExperiences.length);
    workExperience.initializeResumeViewElements();
    console.log(workExperience);
    listOfResumeExperiences.push(workExperience)
}

class WorkExperience
{
    constructor(workExpCount)
    {
        this.workExpCount = workExpCount;
        this.expResumeView = null;
        this.expBulletListResumeView = null;
        this.bodyResumeView = null;
        this.expTitleResumeView = null;
        this.expLocalResumeView = null;
        this.expNameResumeView = null;
        this.expDateResumeView = null;
        this.expBulletResumeView1 = null;
        this.expBulletResumeView2 = null;
        this.expBulletResumeView3 = null;
        this.expSecInput = null;
        this.bodyInput = null;
        this.expTitleInput = null;
        this.expLocalInput = null;
        this.expNameInput = null;
        this.expDateInput = null;
        this.expBulletListInput1 = null;
        this.expBulletListInput2 = null;
        this.expBulletListInput3 = null;
        this.expContainerInput = null;
        
    }

    // Function initializes, styles, and adds the elements of the Resume View to html page
    // It is styled to look like a pdf page. Each element on the Resume View will be linked to
    // input bars in the InputView to create a dynamic link between the Resume View and input
    initializeResumeViewElements()
    {

        // Create a View of the resume
        this.expResumeView = document.createElement('exp-resume-view-'+ this.workExpCount.toString() );
        this.bodyResumeView = document.getElementById('work-exp');
    
        /* Initialize Resume View and styles */
        this.expTitleResumeView = document.createElement('exp-title-view-' + this.workExpCount.toString() );
        this.expLocalResumeView = document.createElement('exp-local-view-' + this.workExpCount.toString() );
        this.expNameResumeView = document.createElement('exp-name-view-' + this.workExpCount.toString() );
        this.expDateResumeView = document.createElement('exp-date-view-' + this.workExpCount.toString());
        this.expBulletListResumeView = document.createElement('ul');
        this.expBulletResumeView1 = document.createElement('li');
        this.expBulletResumeView2 = document.createElement('li');
        this.expBulletResumeView3 = document.createElement('li');
    
        this.expResumeView.style = 'display: grid; grid-template-columns: 1fr 1fr; margin-right: 32px; padding-top: 4px;'
        this.expTitleResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start; margin-left: 32px; display:inline;' ;
        this.expLocalResumeView.style = 'color: black; font-size: 18px; display:inline; font-family: Times New Roman; font-weight: bold; justify-self: end;';
        this.expNameResumeView.style = 'color: black; font-size: 18px; width: fit-content;  margin-left: 32px; font-family:Times New Roman;  justify-self: start; font-style: italic;';
        this.expDateResumeView.style = 'color: black; font-size: 18px; display:inline; margin-left: 32px;  width: fit-content; font-family:Times New Roman; justify-self: end; font-style: italic;';
        this.expBulletListResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman;  justify-self: start; margin-left: 32px; display:inline; padding-top: 0px; margin-top:0px;' ;

        
        /* Initialize Inputs, style, placeholders, ids */
        //this.expContainerInput = document.createElement();
        this.expSecInput = document.createElement('exp-sec-input-' + this.workExpCount.toString());
        this.bodyInput = document.getElementById('input-resume');
        this.expTitleInput = document.createElement('input');
        this.expLocalInput = document.createElement('input');
        this.expNameInput = document.createElement('input');
        this.expDateInput = document.createElement('input');
        this.expBulletListInput1 = document.createElement('input');
        this.expBulletListInput2 = document.createElement('input');
        this.expBulletListInput3 = document.createElement('input');

    
        this.expSecInput.style="display:grid; grid-template-rows: repeat(7, 1fr); height:400px; margin-bottom:50px";
        this.expTitleInput.style = inputBarStyle1;
        this.expLocalInput.style = inputBarStyle1;
        this.expNameInput.style = inputBarStyle1;
        this.expDateInput.style = inputBarStyle1;
        this.expBulletListInput1.style = inputBarStyle1;
        this.expBulletListInput2.style = inputBarStyle1;
        this.expBulletListInput3.style = inputBarStyle1;

        this.expTitleInput.placeholder = 'Job Title';
        this.expLocalInput.placeholder = 'Job Location';
        this.expNameInput.placeholder = 'Company Name';
        this.expDateInput.placeholder = 'Start to End Date';
        this.expBulletListInput1.placeholder = 'Accomplishment #1';
        this.expBulletListInput2.placeholder = 'Accomplishment #2';
        this.expBulletListInput3.placeholder = 'Accomplishment #3';

        this.expTitleInput.id = 'exp-title-' + this.workExpCount.toString() ;
        this.expLocalInput.id = 'exp-local-' + this.workExpCount.toString() ;
        this.expNameInput.id = 'exp-name-' + this.workExpCount.toString() ;
        this.expDateInput.id = 'exp-date-' + this.workExpCount.toString() ;
        this.expBulletListInput1.id = 'exp-b1-' + this.workExpCount.toString() ;
        this.expBulletListInput2.id = 'exp-b2-' + this.workExpCount.toString() ;
        this.expBulletListInput3.id = 'exp-b3-' + this.workExpCount.toString() ;


        // Add to DOM
        this.bodyResumeView.appendChild(this.expResumeView);
        this.expResumeView.appendChild(this.expTitleResumeView);
        this.expResumeView.appendChild(this.expLocalResumeView);
        this.expResumeView.appendChild(this.expNameResumeView);
        this.expResumeView.appendChild(this.expDateResumeView);
        this.expResumeView.appendChild(this.expBulletListResumeView);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView1);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView2);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView3);



        this.expSecInput.appendChild(this.expTitleInput);
        this.expSecInput.appendChild(this.expLocalInput);
        this.expSecInput.appendChild(this.expNameInput);
        this.expSecInput.appendChild(this.expDateInput);
        this.expSecInput.appendChild(this.expBulletListInput1);
        this.expSecInput.appendChild(this.expBulletListInput2);
        this.expSecInput.appendChild(this.expBulletListInput3);
        this.bodyInput.appendChild( this.expSecInput);
   

        // Link Resume Input and View
        this.expTitleInput.addEventListener("input", () => {this.expTitleResumeView.innerText = this.expTitleInput.value;});
        this.expLocalInput.addEventListener("input", () => {this.expLocalResumeView.innerText = this.expLocalInput.value;});
        this.expNameInput.addEventListener("input", () => {this.expNameResumeView.innerText = this.expNameInput.value;});
        this.expDateInput.addEventListener("input", () => {this.expDateResumeView.innerText = this.expDateInput.value;});
        this.expBulletListInput1.addEventListener("input", () => {this.expBulletResumeView1.innerText = this.expBulletListInput1.value;});
        this.expBulletListInput2.addEventListener("input", () => {this.expBulletResumeView2.innerText = this.expBulletListInput2.value;});
        this.expBulletListInput3.addEventListener("input", () => {this.expBulletResumeView3.innerText = this.expBulletListInput3.value;});
        }

}

function nextPage() 
{
    localStorage.clear();

    let listOfWorkExperienceObjects = [];

    for (let i = 0; i < listOfResumeExperiences.length; i++) 
    {
        let workExperienceObject = 
        {
            jobTitle: listOfResumeExperiences[i].expTitleInput.value || 'N/A',
            jobAddress: listOfResumeExperiences[i].expLocalInput.value || 'N/A',
            companyName: listOfResumeExperiences[i].expNameInput.value || 'N/A',
            jobDate: listOfResumeExperiences[i].expDateInput.value || 'N/A',
            bullet1: listOfResumeExperiences[i].expBulletListInput1.value|| 'N/A',
            bullet2: listOfResumeExperiences[i].expBulletListInput2.value || 'N/A',
            bullet3: listOfResumeExperiences[i].expBulletListInput3.value || 'N/A'
        };

        listOfWorkExperienceObjects.push(workExperienceObject);
    }

    let experienceObject = 
    {
        name: skillsObject.name || 'N/A',
        address1: skillsObject.address1 || 'N/A',
        address2: skillsObject.address2 || 'N/A',
        address3: skillsObject.address3 || 'N/A',
        college: skillsObject.college || 'N/A',
        startYear: skillsObject.startYear || 'N/A',
        endYear: skillsObject.endYear || 'N/A',
        degree: skillsObject.degree || 'N/A',
        gpa: skillsObject.gpa || 'N/A',
        langauges: skillsObject.langauges || 'N/A', 
        operating: skillsObject.operating || 'N/A',
        tools: skillsObject.tools || 'N/A',
        courses: skillsObject.courses || 'N/A',
        experiences: listOfWorkExperienceObjects || 'N/A'
    };

    localStorage.setItem("Experience", JSON.stringify(experienceObject));
    window.location.href = "http://127.0.0.1:5500/FinalView.html";

  }


