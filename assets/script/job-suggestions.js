async function fetchAdzunaJobSuggestions(keywords) {
    const appId = 'c5292b0a'; 
    const appKey = 'd34ef202428d9ab7e6604ebc72e602d3'; 
    try {
        const response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=10&what=${keywords}`);
        const data = await response.json();
        const jobSuggestionsDiv = document.getElementById('job-suggestions');
        jobSuggestionsDiv.innerHTML = ''; // Clear previous suggestions
        // console.log(data);

        if (data.results && data.results.length > 0) {
            data.results.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.className = 'job-item';
                jobDiv.innerHTML = `
                    <h4>${job.title}</h4>
                    <p>Company: ${job.company.display_name}</p>
                    <p>Location: ${job.location.display_name}</p>
                    <a href="${job.redirect_url}" target="_blank">View Job</a>
                `;
                jobSuggestionsDiv.appendChild(jobDiv);
            });
        } else {
            jobSuggestionsDiv.innerHTML = '<p>No job suggestions found.</p>';
        }
    } catch (error) {
        console.error('Error fetching job suggestions:', error);
        document.getElementById('job-suggestions').innerHTML = '<p>Error fetching job suggestions. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const SavedSkills = getDataLocalStorage('skills')
    let skills ="";
    SavedSkills.forEach(element => {
        skills +=`${element.skill}, `;
        
    });
    fetchAdzunaJobSuggestions(`${skills}`);
});
