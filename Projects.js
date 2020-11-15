const codeQuiz = {
  title: "Code Quiz",
  image: {
    src: "Assets/Images/codeQuiz.PNG",
    alt: "Code Quiz",
  },
  description:
    "Quiz app that prompts the user to answer web-development related questions and maintains a high score board.",
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
  repoLink: "https://github.com/jdmarty/codeQuiz",
  deployedLink: "https://jdmarty.github.io/codeQuiz/",
};

const nutriSpot = {
  title: "NutriSpot",
  image: {
    src: "Assets/Images/nutriSpot.PNG",
    alt: "Nutrispot",
  },
  description:
    "Application that uses the Spoonacular and Yelp API to combine a healthy recipe search and a search for local restaurants",
  tech: ["Bulma CSS", "jQuery", "Spoonacular API", "Yelp API"],
  languagePercent: [
    {
      name: "JavaScript",
      percent: 46,
    },
    {
      name: "HTML",
      percent: 45,
    },
    {
      name: "CSS",
      percent: 9,
    },
  ],
  repoLink: "https://github.com/jdmarty/scoop",
  deployedLink: "https://jdmarty.github.io/scoop/",
};

const passwordGenerator = {
  title: "Password Generator",
  image: {
    src: "Assets/Images/PasswordGenerator.PNG",
    alt: "Password Generator",
  },
  description:
    "Simple site that prompts you to enter password criteria and generates a scrambled password that meets those criteria",
  tech: ["HTML", "CSS", "JavaScript"],
  languagePercent: [
    {
      name: "JavaScript",
      percent: 61,
    },
    {
      name: "CSS",
      percent: 24,
    },
    {
      name: "HTML",
      percent: 15,
    },
  ],
  repoLink: "https://github.com/jdmarty/scrambledPasswordGenerator",
  deployedLink: "https://jdmarty.github.io/scrambledPasswordGenerator/",
};

const jammming = {
  title: "Jammming with JD",
  image: {
    src: "./Assets/Images/jammming_codecademy.PNG",
    alt: "Jamming with JD",
  },
  description:
    "An app built with React and the Spotify API that allows users to search the Spotify library and create new playlists.",
  tech: ["React", "Spotify API", "JavaScript"],
  languagePercent: [
    {
      name: "JavaScript",
      percent: 75,
    },
    {
      name: "CSS",
      percent: 18,
    },
    {
      name: "HTML",
      percent: 7,
    },
  ],
  repoLink: "https://github.com/jdmarty/jammming/",
  deployedLink: "http://jammmingwithjd.surge.sh/",
};

const Projects = [nutriSpot, codeQuiz, jammming, passwordGenerator]

export default Projects