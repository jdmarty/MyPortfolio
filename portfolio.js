const project = {
  title: "Code Quiz",
  image: {
    src: "Assets/Images/codeQuiz.PNG",
    alt: "Code Quiz App",
  },
  description: "Quiz app that prompts the user to answer web-development related questions and maintains a high score board.",
  tech: ["HTML", "CSS", "BootStrap", "jQuery"],
  languagePercent: [
    {
      name: "JavaScript",
      percent: 77,
    },
    {
      name: "CSS",
      percent: 12,
    },
    {
      name: "HTML",
      percent: 11,
    },
  ],
  repoLink: "https://jdmarty.github.io/codeQuiz/",
  deployedLink: "https://github.com/jdmarty/codeQuiz",
};

const progressColor = ['success', 'warning', 'danger']

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

renderHighlight(project)