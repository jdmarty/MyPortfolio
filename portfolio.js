import Projects from './Projects.js'

function renderHighlight(project) {
    //image, title, and description
    $('#HLImage').attr('src', project.image.src).attr('alt', project.image.alt);
    $('#HLTitle').text(project.title);
    $('#HLDescription').text(project.description);
    //technology
    $("#HLTech").empty();
    project.tech.forEach(tech => {
        const techItem = $('<li>').addClass('list-group-item').text(tech)
        $('#HLTech').append(techItem)
    });
    //languages
    $('#HLLanguage').empty()
    const progressColor = ["success", "warning", "danger"];
    project.languagePercent.forEach((lang, index) => {
        const language = $("<div>")
            .addClass(`progress-bar bg-${progressColor[index]} text-dark`)
            .attr('style', `width: ${lang.percent}%`)
            .attr('role', 'progressbar')
            .attr('aria-valuenow', `${lang.percent}`)
            .attr('aria-valuemin', '0')
            .attr('arai-valuemax', '100')
            .text(`${lang.name} ${lang.percent}%`)
        $('#HLLanguage').append(language)
    })
    //links
    $('#HLrepoLink').attr('href', project.repoLink)
    $("#HLdeployLink").attr("href", project.deployedLink);
}

renderHighlight(Projects[0])