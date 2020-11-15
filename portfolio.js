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

function renderCards(projects) {
    projects.forEach((project, index) => {
        //create elements
        const column = $("<div>").addClass('col-lg-4 col-12 px-0 px-lg-2');
        const card = $('<article>')
            .addClass('card my-2 border')
            .attr('data-index', index);
        const cardImg = $("<img>")
          .addClass("card-img-top px-0")
          .attr("src", project.image.src)
          .attr("alt", project.image.alt)
        const cardText = $("<div>")
          .addClass("card-body text-center")
          .html(`<h5 class="card-title">${project.title}</h5>`);
        //create card with event listener
        card
            .append(cardImg, cardText)
            .on('click', (e) => {
                const index = $(e.currentTarget).attr('data-index')
                renderHighlight(Projects[index])
            })
        //append card and column
        column.append(card)
        $('#cardsRow').append(column)
    })
}

renderCards(Projects)

renderHighlight(Projects[0])