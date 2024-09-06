const userName = document.querySelector("#username");
userName.innerHTML=localStorage.getItem('userName');


const fullname =document.querySelector("#fullname_dsp")
const designation = document.querySelector("#designation_dsp")
const phoneno = document.querySelector("#phoneno_dsp");
const email = document.querySelector("#email_dsp");
const address = document.querySelector("#address_dsp");
const summary = document.querySelector("#summary_dsp");

const skills = document.querySelector("#resume_skills_dsp");
const achievement = document.querySelector("#resume_achievements_dsp");
const experience = document.querySelector("#resume_experiences_dsp");
const education = document.querySelector("#resume_educations_dsp");
const project = document.querySelector("#resume_projects_dsp");

document.addEventListener("DOMContentLoaded", function () {
    // Load resumes on dashboard
    loadSavedResumes();
    
    // Fetch job suggestions and project recommendations based on resumes
    // loadJobSuggestions();
    // loadProjectRecommendations();
});
function loadSavedResumes() {
    // const savedResumes = JSON.parse(localStorage.getItem('fullname')) || [];
    const resumeContainer = document.getElementById('saved-resumes');
    // resumeContainer.innerHTML = ''; // Clear existing content
    if (localStorage.getItem('fullname') == null && localStorage.getItem('email') ==null) {
        resumeContainer.innerHTML = '<p>No saved resumes found.</p>';
        return;
    }

    fullname.innerText=localStorage.getItem('fullname');
    designation.innerText=localStorage.getItem('designation');
    phoneno.innerText=localStorage.getItem('phoneno');
    email.innerText=localStorage.getItem('email');
    address.innerText=localStorage.getItem('address');
    summary.innerText=localStorage.getItem('summary');

    const storedImage = localStorage.getItem('profileImage');
    const profileImageDisplay = document.getElementById('profileImageDisplay');

    if (storedImage) {
        profileImageDisplay.src = storedImage;
    } else {
        profileImageDisplay.src = '../assets/images/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'; 
    }


    const SavedSkills = getDataLocalStorage('skills')

    SavedSkills.forEach(element => {
        skills.innerHTML +=`${element.skill}, `;
        
    });
    const savedAchievement = getDataLocalStorage('achievements');

    savedAchievement.forEach((element,index) => {
        achievement.innerHTML+=`
            <div class="achiveContainer">
                <p>${++index}.</p>
                <div>
                    <strong>Title</strong>
                    <p>${element.achieve_title}</p>
                </div>
                <div>
                    <strong>Description</strong>
                    <p>${element.achieve_description}</p>
                </div>
            </div>
        `
    })

    const savedExperience = getDataLocalStorage('experiences');

    savedExperience.forEach((element,index) => {
        experience.innerHTML+=`
        <div class=experienceContainer>
        <p>${++index}.</p>
                <div>
                    <strong>Title</strong>
                    <p>${element.exp_title}</p>
                </div>
                <div>
                    <strong>Organization</strong>
                    <p>${element.exp_organization}</p>
                </div>
                <div>
                    <strong>Location</strong>
                    <p>${element.exp_location}</p>
                </div>
                <div>
                    <strong>Start Date</strong>
                    <p>${element.exp_start_date}</p>
                </div>
                <div>
                    <strong>End Date</strong>
                    <p>${element.exp_end_date}</p>
                </div>
                <div>
                    <strong>Description</strong>
                    <p>${element.exp_description}</p>
                </div>
            </div>
        `
        
    })
    const savedEducation = getDataLocalStorage('educations');

    savedEducation.forEach((element,index) => {
        education.innerHTML+=`
        <div class=educationContainer>
        <p>${++index}.</p>
                <div>
                    <strong>School/University</strong>
                    <p>${element.edu_school}</p>
                </div>
                <div>
                    <strong>Degree</strong>
                    <p>${element.edu_degree}</p>
                </div>
                <div>
                    <strong>City</strong>
                    <p>${element.edu_city}</p>
                </div>
                <div>
                    <strong>Start Date</strong>
                    <p>${element.edu_start_date}</p>
                </div>
                <div>
                    <strong>Graduation Date</strong>
                    <p>${element.edu_graduation_date}</p>
                </div>
                <div>
                    <strong>Description</strong>
                    <p>${element.edu_description}</p>
                </div>
            </div>
        `
        
    })

    const savedProject = getDataLocalStorage('projects');

    savedProject.forEach((element,index) => {
        project.innerHTML+=`
            <div class="projectContainer">
                <p>${++index}.</p>
                <div>
                    <strong>Title</strong>
                    <p>${element.proj_title}</p>
                </div>
                <div>
                    <strong>Link</strong>
                    <p>${element.proj_link}</p>
                </div>
                <div>
                    <strong>Description</strong>
                    <p>${element.proj_description}</p>
                </div>
            </div>
        `
    })


    // skills.innerText = localStorage.getItem('skills')


    // savedResumes.forEach(resume => {
    //     const resumeDiv = document.createElement('div');
    //     resumeDiv.classList.add('resume-item');

    //     // Display basic resume details
    //     resumeDiv.innerHTML = `
    //         <h4>${resume.name}</h4>
    //         <p>Email: ${resume.email}</p>
    //         <p>Skills: ${resume.skills.join(', ')}</p>
    //         <button onclick="showJobSuggestions('${resume.skills.join(', ')}')">Show Job Suggestions</button>
    //         <button onclick="showProjectRecommendations('${resume.skills.join(', ')}')">Show Project Recommendations</button>
    //     `;

    //     resumeContainer.appendChild(resumeDiv);
    // });
}
function getDataLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
