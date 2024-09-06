async function fetchProjectRecommendations(keywords) {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${keywords}&sort=stars&order=desc`);
        const data = await response.json();
        const projectRecommendationsDiv = document.getElementById('project-recommendations');

        console.log(data);

        data.items.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.innerHTML = `
                <h4>${repo.name}</h4>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;
            projectRecommendationsDiv.appendChild(repoDiv);
        });
    } catch (error) {
        console.error('Error fetching project recommendations:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchProjectRecommendations('JavaScript');
});
