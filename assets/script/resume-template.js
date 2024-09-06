// Add a new skill input field
function addSkill() {
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('form-elem');

    const skillLabel = document.createElement('label');
    skillLabel.classList.add('form-label');
    skillLabel.innerText = 'Skill';

    const skillInputContainer = document.createElement('div');
    skillInputContainer.classList.add('inputContainer');


    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.id='skill';
    skillInput.classList.add('form-control', 'skill');

    const removeBtn =document.createElement("button");
    removeBtn.classList.add('remove-btn')

    removeBtn.innerText="-";
    removeBtn.addEventListener("click", function(){
        skillContainer.remove();
    })
    skillInputContainer.appendChild(skillInput);
    skillInputContainer.appendChild(removeBtn);

    skillContainer.appendChild(skillLabel);
    skillContainer.appendChild(skillInputContainer);



    document.querySelector('#skills_dsp').style.display="flex"
    document.querySelector('#skills_dsp').appendChild(skillContainer);
}

// Add a new achievement input field
function addAchievement() {
    const achievementContainer = document.createElement('div');
    achievementContainer.classList.add('form-elem');

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('form-label');
    titleLabel.innerText = 'Title';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('form-control', 'achieve_title');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('form-label');
    descriptionLabel.innerText = 'Description';

    const removeBtn =document.createElement("button");
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText="-";
    removeBtn.addEventListener("click", function(){
        achievementContainer.remove();
    })

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('form-control', 'achieve_description');

    achievementContainer.appendChild(titleLabel);
    achievementContainer.appendChild(titleInput);
    achievementContainer.appendChild(descriptionLabel);
    achievementContainer.appendChild(descriptionInput);
    achievementContainer.appendChild(removeBtn);


    document.querySelector('#achievements_dsp').appendChild(achievementContainer);
}

// Add a new experience input field
function addExperience() {
    const experienceContainer = document.createElement('div');
    experienceContainer.classList.add('form-elem');

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('form-label');
    titleLabel.innerText = 'Title';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('form-control', 'exp_title');

    const organizationLabel = document.createElement('label');
    organizationLabel.classList.add('form-label');
    organizationLabel.innerText = 'Organization';

    const organizationInput = document.createElement('input');
    organizationInput.type = 'text';
    organizationInput.classList.add('form-control', 'exp_organization');

    const locationLabel = document.createElement('label');
    locationLabel.classList.add('form-label');
    locationLabel.innerText = 'Location';

    const locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.classList.add('form-control', 'exp_location');

    const startDateLabel = document.createElement('label');
    startDateLabel.classList.add('form-label');
    startDateLabel.innerText = 'Start Date';

    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.classList.add('form-control', 'exp_start_date');

    const endDateLabel = document.createElement('label');
    endDateLabel.classList.add('form-label');
    endDateLabel.innerText = 'End Date';

    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.classList.add('form-control', 'exp_end_date');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('form-label');
    descriptionLabel.innerText = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('form-control', 'exp_description');

    const removeBtn =document.createElement("button");
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText="-";
    removeBtn.addEventListener("click", function(){
        experienceContainer.remove();
    })

    experienceContainer.appendChild(titleLabel);
    experienceContainer.appendChild(titleInput);
    experienceContainer.appendChild(organizationLabel);
    experienceContainer.appendChild(organizationInput);
    experienceContainer.appendChild(locationLabel);
    experienceContainer.appendChild(locationInput);
    experienceContainer.appendChild(startDateLabel);
    experienceContainer.appendChild(startDateInput);
    experienceContainer.appendChild(endDateLabel);
    experienceContainer.appendChild(endDateInput);
    experienceContainer.appendChild(descriptionLabel);
    experienceContainer.appendChild(descriptionInput);
    experienceContainer.appendChild(removeBtn);


    document.querySelector('#experiences_dsp').appendChild(experienceContainer);
}

// Add a new education input field
function addEducation() {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('form-elem');

    const schoolLabel = document.createElement('label');
    schoolLabel.classList.add('form-label');
    schoolLabel.innerText = 'School/University';

    const schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.classList.add('form-control', 'edu_school');

    const degreeLabel = document.createElement('label');
    degreeLabel.classList.add('form-label');
    degreeLabel.innerText = 'Degree';

    const degreeInput = document.createElement('input');
    degreeInput.type = 'text';
    degreeInput.classList.add('form-control', 'edu_degree');

    const cityLabel = document.createElement('label');
    cityLabel.classList.add('form-label');
    cityLabel.innerText = 'City';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.classList.add('form-control', 'edu_city');

    const startDateLabel = document.createElement('label');
    startDateLabel.classList.add('form-label');
    startDateLabel.innerText = 'Start Date';

    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.classList.add('form-control', 'edu_start_date');

    const graduationDateLabel = document.createElement('label');
    graduationDateLabel.classList.add('form-label');
    graduationDateLabel.innerText = 'Graduation Date';

    const graduationDateInput = document.createElement('input');
    graduationDateInput.type = 'date';
    graduationDateInput.classList.add('form-control', 'edu_graduation_date');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('form-label');
    descriptionLabel.innerText = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('form-control', 'edu_description');

    const removeBtn =document.createElement("button");
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText="-";
    removeBtn.addEventListener("click", function(){
        educationContainer.remove();
    })

    educationContainer.appendChild(schoolLabel);
    educationContainer.appendChild(schoolInput);
    educationContainer.appendChild(degreeLabel);
    educationContainer.appendChild(degreeInput);
    educationContainer.appendChild(cityLabel);
    educationContainer.appendChild(cityInput);
    educationContainer.appendChild(startDateLabel);
    educationContainer.appendChild(startDateInput);
    educationContainer.appendChild(graduationDateLabel);
    educationContainer.appendChild(graduationDateInput);
    educationContainer.appendChild(descriptionLabel);
    educationContainer.appendChild(descriptionInput);
    educationContainer.appendChild(removeBtn);



    document.querySelector('#educations_dsp').appendChild(educationContainer);
}

// Add a new project input field
function addProject() {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('form-elem');

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('form-label');
    titleLabel.innerText = 'Title';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('form-control', 'proj_title');

    const linkLabel = document.createElement('label');
    linkLabel.classList.add('form-label');
    linkLabel.innerText = 'Link';

    const linkInput = document.createElement('input');
    linkInput.type = 'url';
    linkInput.classList.add('form-control', 'proj_link');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('form-label');
    descriptionLabel.innerText = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('form-control', 'proj_description');

    const removeBtn =document.createElement("button");
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText="-";
    removeBtn.addEventListener("click", function(){
        projectContainer.remove();
    })

    projectContainer.appendChild(titleLabel);
    projectContainer.appendChild(titleInput);
    projectContainer.appendChild(linkLabel);
    projectContainer.appendChild(linkInput);
    projectContainer.appendChild(descriptionLabel);
    projectContainer.appendChild(descriptionInput);
    projectContainer.appendChild(removeBtn);


    document.querySelector('#projects_dsp').appendChild(projectContainer);
}


// Print CV
function printCV() {
    const cvContent = document.querySelector('#cv-form').innerHTML;

    // Create a new window or iframe
    const printWindow = window.open('', '', 'height=800,width=600');

    // Write the HTML for the new window
    printWindow.document.write('<html><head><title>Print CV</title>');
    printWindow.document.write('<style>');
    // Add styles for printing if needed
    printWindow.document.write('body{ font-family: Arial, sans-serif; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    
    // Write the CV content into the new window
    printWindow.document.write(cvContent);
    printWindow.document.write('</body></html>');

    // Close the document to complete the writing process
    printWindow.document.close();

    // Wait for the content to load and then print
    printWindow.onload = function() {
        printWindow.focus();  // necessary for some browsers
        printWindow.print();
        printWindow.close();  // close the print window after printing
    };
}

// Download CV as PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const element = document.querySelector('.cv-preview');

    html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        doc.save('resume.pdf');
    });
}


// Preview the image before upload
function previewImage() {
    const imageInput = document.getElementById('image');
    const imageDisplay = document.getElementById('image_dsp');

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const imgElement = imageDisplay.querySelector('img');
        imgElement.src = reader.result;
        console.log(imgElement.src);

        // Store the image in local storage as base64
        localStorage.setItem('profileImage', reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        const imgElement = imageDisplay.querySelector('img');
        imgElement.src = '';
        localStorage.removeItem('profileImage'); // Remove image from local storage if no file is selected
    }
}

// Generate CV Preview
function generateCV() {
    // Get personal information fields and display
    const firstname = document.getElementById('firstname').value;
    const middlename = document.getElementById('middlename').value;
    const lastname = document.getElementById('lastname').value;
    const fullname = `${firstname} ${middlename} ${lastname}`;
    const designation = document.getElementById('designation').value;
    const phoneno = document.getElementById('phoneno').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;

    // Update preview fields
    document.getElementById('fullname_dsp').innerText = fullname;
    document.getElementById('designation_dsp').innerText = designation;
    document.getElementById('phoneno_dsp').innerText = phoneno;
    document.getElementById('email_dsp').innerText = email;
    document.getElementById('address_dsp').innerText = address;
    document.getElementById('summary_dsp').innerText = summary;

    // Store personal information in local storage
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('designation', designation);
    localStorage.setItem('phoneno', phoneno);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('summary', summary);

    // Store and update other sections
    storeAndUpdateSection('skill', 'resume_skills_dsp', 'skills');
    storeAndUpdateSection('achievements', 'resume_achievements_dsp', 'achievements', ['achieve_title', 'achieve_description']);
    storeAndUpdateSection('experiences', 'resume_experiences_dsp', 'experiences', ['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description']);
    storeAndUpdateSection('educations', 'resume_educations_dsp', 'educations', ['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description']);
    storeAndUpdateSection('projects', 'resume_projects_dsp', 'projects', ['proj_title', 'proj_link', 'proj_description']);
}

// Helper function to store and update sections
function storeAndUpdateSection(sectionClassName, sectionId, localStorageKey, fields = ['skill']) {
    const sectionItems = document.querySelectorAll(`.${sectionClassName}`);
    const sectionDisplay = document.getElementById(sectionId);
    sectionDisplay.innerHTML = ''; // Clear the preview section

    let sectionData = []; // To store the section's data in localStorage

    sectionItems.forEach(item => {
        let sectionEntry = {}; // Store individual entry data

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('preview-item');

        if (fields.length === 1) {
            sectionEntry[fields[0]] = item.value; // Single field input (e.g., skill)
            itemContainer.innerHTML = `<strong>${item.previousElementSibling ? item.previousElementSibling.innerText : 'Label'}:</strong> ${item.value}`;
        } else {
            fields.forEach(field => {
                const subField = item.querySelector(`.${field}`);
                if (subField) {
                    sectionEntry[field] = subField.value; // Store each field's value
                    const label = subField.previousElementSibling ? subField.previousElementSibling.innerText : field;
                    const fieldDiv = document.createElement('div');
                    fieldDiv.innerHTML = `<strong>${label}:</strong> ${subField.value}`;
                    itemContainer.appendChild(fieldDiv);
                }
            });
        }

        // Push each section's entry data to the array
        sectionData.push(sectionEntry);
        sectionDisplay.appendChild(itemContainer); // Append to preview
    });

    // Store the section's data in localStorage as a JSON string
    localStorage.setItem(localStorageKey, JSON.stringify(sectionData));
}

// Update preview sections
function updatePreviewSection(sectionClassName, sectionId, fields = ['skill']) {
    const sectionItems = document.querySelectorAll(`.${sectionClassName}`);
    const sectionDisplay = document.getElementById(sectionId);
    sectionDisplay.innerHTML = ''; // Clear existing content

    sectionItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('preview-item');

        // If there is only one field (e.g., skills)
        if (fields.length === 1) {
            const label = item.previousElementSibling ? item.previousElementSibling.innerText : 'Label';
            itemContainer.innerHTML = `<strong>${label}:</strong> ${item.value}`;
        } else {
            fields.forEach(field => {
                const subField = item.querySelector(`.${field}`);
                if (subField) {
                    const label = subField.previousElementSibling ? subField.previousElementSibling.innerText : field;
                    const fieldDiv = document.createElement('div');
                    fieldDiv.innerHTML = `<strong>${label}:</strong> ${subField.value}`;
                    itemContainer.appendChild(fieldDiv);
                }
            });
        }

        sectionDisplay.appendChild(itemContainer);
    });
}


// Reset form and preview
function resetForm() {
    document.getElementById('cv-form').reset();
    const previewSections = document.querySelectorAll('.preview-item, .preview-blk');
    previewSections.forEach(section => {
        section.innerHTML = '';
    });
    document.getElementById('image_dsp').querySelector('img').src = '../assets/images/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
}
