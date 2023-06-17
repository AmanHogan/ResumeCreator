let workExpCount = 0;

let workExperiences = [];


let inputBarStyle1 = 'width: 736px; height: 40px; background-color: #202124;    border-color: rgb(139, 139, 139);    border-radius: 5px;    color:#ffffff;    transition: opacity .15s;    box-shadow: 10px 5px 5px black;    padding-inline-start: 20px;    margin-right: 16px;    margin-bottom: 8px;    font-size: 20px;';
let resumeexpTitleResumeViewStyle = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start;     margin-left: 32px; display:inline;' ;
let resumeExpLocalStyle = ' display: inline; color: black; font-size: 18px; width: fit-content; font-family: \'Times New Roman\', Times, serif;    justify-self: end;';


var nextPageButton = document.getElementById("go-to-skills-section");


nextPageButton.addEventListener('click', goToSkillsPage);


// Initialize Input listeners for Education Section
/* 
    Name,
    Addresses 1, 2, 3
    College
    Graduation Start, End,
    Degree
    GPA
*/
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
    




function goToSkillsPage() 
{

    localStorage.clear();

    let educationObject = 
    {
        
        name: resumeTitleInput.value || 'N/A',
        address1: resumeAddress1Input.value || 'N/A',
        address2: resumeAddress2Input.value || 'N/A',
        address3: resumeAddress3Input.value || 'N/A',
        college: resumeCollegeInput.value || 'N/A',
        startYear: resumeStartYearInput.value || 'N/A',
        endYear: resumeEndYearInput.value || 'N/A',
        degree: resumeDegreeNameInput.value || 'N/A',
        gpa: resumeGpaInput.value || 'N/A'
    };
    
    localStorage.setItem("Education", JSON.stringify(educationObject));

    window.location.href = "http://127.0.0.1:5500/Skills.html";
}




function createWorkExperience()
{
    console.log('Create Experience button clicked');

    let resumeView = new ResumeView(workExpCount);
    let inputView = new InputView(workExpCount);
    let resumeInputViewAdapter = new  ResumeInputViewAdapter(workExpCount, resumeView, inputView);


    resumeView.initializeResumeViewElements();
    console.log(resumeView);

    inputView.initializeInputViewElements();
    console.log(inputView);

    resumeInputViewAdapter.linkResumeToInput();

    workExpCount = workExpCount + 1;


}


function createProjectExperience()
{

    console.log('Create Project Experience button clicked');
    
    let expResumeView = document.createElement('exp-resume-view-'+ workExpCount.toString() );
    let expBulletListResumeView = document.createElement('ul');
    let bodyResumeView = document.getElementById('project-exp');

    // Create Resume View Elementts
    let expTitleResumeView = document.createElement('exp-title-view-' + workExpCount.toString() );
    let expLocalResumeView = document.createElement('exp-local-view-' + workExpCount.toString() );
    let expBulletResumeView1 = document.createElement('li');
    let expBulletResumeView2 = document.createElement('li');


    // Declare styles of Resume view
    expResumeView.style = 'display: grid;    grid-template-columns: 1fr 1fr; margin-right: 32px; padding-top: 4px;'
    expTitleResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start; margin-left: 32px; display:inline;' ;
    expLocalResumeView.style = 'color: black; font-size: 18px; display:inline; font-family: Times New Roman; font-weight: bold; justify-self: end;';
    expBulletListResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman;  justify-self: start;     margin-left: 32px; display:inline; padding-top: 0px; margin-top:0px;' ;

    // Add changes to html view
    bodyResumeView.appendChild(expResumeView);
    expResumeView.appendChild(expTitleResumeView);
    expResumeView.appendChild(expLocalResumeView);
    expResumeView.appendChild(expBulletListResumeView);
    expBulletListResumeView.appendChild(expBulletResumeView1);
    expBulletListResumeView.appendChild(expBulletResumeView2);

    /////////////////////////////////////////////////////////////////

    let  expSecProperty = document.createElement('exp-sec-property');
    expSecProperty.style = 'display: grid; grid-template-columns: 1fr; margin-right: 32px; padding-top: 4px;';

    // Declare input bars
    let bodyProperty = document.getElementById('input-resume');
    let expTitleProperty = document.createElement('input');
    let expLocalProperty = document.createElement('input');
    let expBulletListProperty1 = document.createElement('input');
    let expBulletListProperty2 = document.createElement('input');


    // Declare input bar styles
    expTitleProperty.style = inputBarStyle1;
    expLocalProperty.style = inputBarStyle1;
    expBulletListProperty1.style = inputBarStyle1;
    expBulletListProperty2.style = inputBarStyle1;

    // Declare placeholders of input styles
    expTitleProperty.placeholder = 'Job Title';
    expLocalProperty.placeholder = 'Job Location';
    expBulletListProperty1.placeholder = 'Accomplishment #1';
    expBulletListProperty2.placeholder = 'Accomplishment #2';


    // Declare input id
    expTitleProperty.id = 'exp-title-' + workExpCount.toString() ;
    expLocalProperty.id = 'exp-local-' + workExpCount.toString() ;
    expBulletListProperty1.id = 'exp-b1-' + workExpCount.toString() ;
    expBulletListProperty2.id = 'exp-b2-' + workExpCount.toString() ;


    // Add changes to html view
    bodyProperty.appendChild(expTitleProperty);
    bodyProperty.appendChild(expLocalProperty);
    bodyProperty.appendChild(expBulletListProperty1);
    bodyProperty.appendChild(expBulletListProperty2);


    //////////////////////////////////////////

    expTitleProperty.addEventListener("input", 
    function() {expTitleResumeView.innerText = expTitleProperty.value;}); 


    expLocalProperty.addEventListener("input", 
    function() {expLocalResumeView.innerText = expLocalProperty.value;});  

    expBulletListProperty1.addEventListener("input", 
    function() {expBulletResumeView1.innerText = expBulletListProperty1.value;});  

    expBulletListProperty2.addEventListener("input", 
    function() {expBulletResumeView2.innerText = expBulletListProperty2.value;});  




    workExpCount = workExpCount + 1;

}


function convertToPdf()
{


    //TODO
    console.log('convertToPdf has been pressed');

}

    
class ResumeView
{
    constructor(workExpCount)
    {
        this.workExpNum = workExpCount;
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
        

    }

    // Function initializes, styles, and adds the elements of the Resume View to html page
    // It is styled to look like a pdf page. Each element on the Resume View will be linked to
    // input bars in the InputView to create a dynamic link between the Resume View and input
    initializeResumeViewElements()
    {

        // Create a View of the resume
        this.expResumeView = document.createElement('exp-resume-view-'+ this.workExpNum.toString() );
        this.bodyResumeView = document.getElementById('work-exp');
    
        // Initialize Resume View Elements
        this.expTitleResumeView = document.createElement('exp-title-view-' + this.workExpNum.toString() );
        this.expLocalResumeView = document.createElement('exp-local-view-' + this.workExpNum.toString() );
        this.expNameResumeView = document.createElement('exp-name-view-' + this.workExpNum.toString() );
        this.expDateResumeView = document.createElement('exp-date-view-' + this.workExpNum.toString());
        this.expBulletListResumeView = document.createElement('ul');
        this.expBulletResumeView1 = document.createElement('li');
        this.expBulletResumeView2 = document.createElement('li');
        this.expBulletResumeView3 = document.createElement('li');
    
    
        // Initialize styles of Resume view
        this.expResumeView.style = 'display: grid; grid-template-columns: 1fr 1fr; margin-right: 32px; padding-top: 4px;'
        this.expTitleResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman; font-weight: bold; justify-self: start; margin-left: 32px; display:inline;' ;
        this.expLocalResumeView.style = 'color: black; font-size: 18px; display:inline; font-family: Times New Roman; font-weight: bold; justify-self: end;';
        this.expNameResumeView.style = 'color: black; font-size: 18px; width: fit-content;  margin-left: 32px; font-family:Times New Roman;  justify-self: start; font-style: italic;';
        this.expDateResumeView.style = 'color: black; font-size: 18px; display:inline; margin-left: 32px;  width: fit-content; font-family:Times New Roman; justify-self: end; font-style: italic;';
        this.expBulletListResumeView.style = 'color: black; font-size: 18px; font-family: Times New Roman;  justify-self: start; margin-left: 32px; display:inline; padding-top: 0px; margin-top:0px;' ;
    
        // Apply  changes to html view
        this.bodyResumeView.appendChild(this.expResumeView);
        this.expResumeView.appendChild(this.expTitleResumeView);
        this.expResumeView.appendChild(this.expLocalResumeView);
        this.expResumeView.appendChild(this.expNameResumeView);
        this.expResumeView.appendChild(this.expDateResumeView);
        this.expResumeView.appendChild(this.expBulletListResumeView);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView1);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView2);
        this.expBulletListResumeView.appendChild(this.expBulletResumeView3);



    }

}

class InputView
{

    constructor(workExpCount)
    {
        this.workExpCount = workExpCount;
        this.expSecProperty = null;
        this.bodyProperty = null;
        this.expTitleProperty = null;
        this.expLocalProperty = null;
        this.expNameProperty = null;
        this.expDateProperty = null;
        this.expBulletListProperty1 = null;
        this.expBulletListProperty2 = null;
        this.expBulletListProperty3 = null;
    }


    initializeInputViewElements()
    {

        this.expSecProperty = document.createElement('exp-sec-property');
        this.bodyProperty = document.getElementById('input-resume');
        this.expTitleProperty = document.createElement('input');
        this.expLocalProperty = document.createElement('input');
        this.expNameProperty = document.createElement('input');
        this.expDateProperty = document.createElement('input');
        this.expBulletListProperty1 = document.createElement('input');
        this.expBulletListProperty2 = document.createElement('input');
        this.expBulletListProperty3 = document.createElement('input');


        // Declare input bar styles
        this.expSecProperty.style = 'display: grid; grid-template-columns: 1fr; margin-right: 32px; padding-top: 4px;';
        this.expTitleProperty.style = inputBarStyle1;
        this.expLocalProperty.style = inputBarStyle1;
        this.expNameProperty.style = inputBarStyle1;
        this.expDateProperty.style = inputBarStyle1;
        this.expBulletListProperty1.style = inputBarStyle1;
        this.expBulletListProperty2.style = inputBarStyle1;
        this.expBulletListProperty3.style = inputBarStyle1;

        // Declare placeholders of input styles
        this.expTitleProperty.placeholder = 'Job Title';
        this.expLocalProperty.placeholder = 'Job Location';
        this.expNameProperty.placeholder = 'Company Name';
        this.expDateProperty.placeholder = 'Start to End Date';
        this.expBulletListProperty1.placeholder = 'Accomplishment #1';
        this.expBulletListProperty2.placeholder = 'Accomplishment #2';
        this.expBulletListProperty3.placeholder = 'Accomplishment #3';


        // Declare input id
        this.expTitleProperty.id = 'exp-title-' + this.workExpCount.toString() ;
        this.expLocalProperty.id = 'exp-local-' + this.workExpCount.toString() ;
        this.expNameProperty.id = 'exp-name-' + this.workExpCount.toString() ;
        this.expDateProperty.id = 'exp-date-' + this.workExpCount.toString() ;
        this.expBulletListProperty1.id = 'exp-b1-' + this.workExpCount.toString() ;
        this.expBulletListProperty2.id = 'exp-b2-' + this.workExpCount.toString() ;
        this.expBulletListProperty3.id = 'exp-b3-' + this.workExpCount.toString() ;


        // Add changes to html view
        this.bodyProperty.appendChild(this.expTitleProperty);
        this.bodyProperty.appendChild(this.expLocalProperty);
        this.bodyProperty.appendChild(this.expNameProperty);
        this.bodyProperty.appendChild(this.expDateProperty);
        this.bodyProperty.appendChild(this.expBulletListProperty1);
        this.bodyProperty.appendChild(this.expBulletListProperty2);
        this.bodyProperty.appendChild(this.expBulletListProperty3);



    }



}

class ResumeInputViewAdapter
{

    constructor(workExpCount, resumeView, inputView)
    {
        this.workExpCount = workExpCount;
        this.resumeView = resumeView;
        this.inputView = inputView;

    }


    linkResumeToInput()
    {

        this.inputView.expTitleProperty.addEventListener("input", () => {
            this.resumeView.expTitleResumeView.innerText = this.inputView.expTitleProperty.value;
          });
          
          this.inputView.expLocalProperty.addEventListener("input", () => {
            this.resumeView.expLocalResumeView.innerText = this.inputView.expLocalProperty.value;
          });
          
          this.inputView.expNameProperty.addEventListener("input", () => {
            this.resumeView.expNameResumeView.innerText = this.inputView.expNameProperty.value;
          });
          
          this.inputView.expDateProperty.addEventListener("input", () => {
            this.resumeView.expDateResumeView.innerText = this.inputView.expDateProperty.value;
          });
          
          this.inputView.expBulletListProperty1.addEventListener("input", () => {
            this.resumeView.expBulletResumeView1.innerText = this.inputView.expBulletListProperty1.value;
          });
          
          this.inputView.expBulletListProperty2.addEventListener("input", () => {
            this.resumeView.expBulletResumeView2.innerText = this.inputView.expBulletListProperty2.value;
          });
          
          this.inputView.expBulletListProperty3.addEventListener("input", () => {
            this.resumeView.expBulletResumeView3.innerText = this.inputView.expBulletListProperty3.value;
          });
          

    }

}