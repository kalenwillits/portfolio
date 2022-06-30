let schema =
    {
      title: "",
      company: "",
      description: ``,
      timestamp: "",
      links:
        [
          {
            title:
              "",
            url: "",
          },
        ],
      bullets:
        [
          ""
        ],
    }

export const projects =
  [
    {
      title: "nbk - A simple terminal notebook for developers",
      description: `
    nbk is a terminal notebook that runs on Linux. Designed to stay out of your way while keeping enough features
    available to keep you on track. This application can be run from any terminal and utilizes vim as an
    editor. With a very small query string, nbk can create, read, update, filter, delete, copy snippets, and execute
    code snippets without leaving your favorite IDE. In my workflow, keeping detailed notes and using code snippets is
    essential. This tool has become a staple of mine in order to stay on track and deliver quality code before
    deadlines.
  `,
      timestamp: "June 29th, 2022",
      links:
        [
          {
            title: "nbk Public GitHub Repository",
            url: "https://github.com/KalenWillits/nbk",
          },
        ],
      bullets:
        [
          "Python",
          "Pandas",
          "Bash",
          "Linux",
        ],
    },
    {
      title: "Portfolio Website",
      timestamp: "June 27th, 2022",
      description: `
        This website is my personal creation to organize my journey through coding and developing.

        I built this website using Next.js and styled it with Tailwind CSS. It is reactive and mobile optimized. I chose
        to keep the data such as this post static in order to keep maintenance and loading times at a minimum.

        There are still some "TODOs" on this that will help scale the content of the page that I will implement as needed.
  `,
      links:
        [
          {
            title:"GitHub Repository",
            url: "https://github.com/KalenWillits/portfolio/",
          },
        ],
      bullets:
        [
          "Next.js",
          "React.js",
          "Tailwind CSS",
        ],
    },
    {
      title:
        "Teaching Your Computer To Read With Machine Learning",
      company:
        "Sprngboard Data Science Career Track",
      description: `
An experiment testing the possibilities of artificial intelligence understanding text by classification and grouping algorithms.
<br>
<br>
In this project I create an chat bot powered by artificial intelligence to read sections of text from Wikipedia via API and demonstrate and understanding. The results were inconsistent but show promise of possibility.
    `,
      timestamp:
        "August, 2020",
      links:
        [
          {
            title:
              "Publication on Springboard’s blog",
            url: "https://www.springboard.com/blog/data-science/teaching-a-computer-to-read-with-machine-learning/",
          },
          {
            title:
              "GitHub Repository",
            url: "https://github.com/KalenWillits/CapstoneThree/",
          },
        ],
      bullets:
        [
          "Python",
          "Pandas",
          "Numpy",
          "SciKit-Learn",
          "Gensim",
          "Natural Language Processing",
          "Google Cloud Console - Compute Engine",
          "Jupyter Notebooks",
        ],
    },
    {
      title:
        "Predicting Airline Flight Delays",
      company:
        "Sprngboard Data Science Career Track",
      description: `
An analysis of airline flight delays and how we can make better travel decisions before they cascade across the world.
</br>
</br>
This is a data science project that I worked on while attending Springboard’s Data Science curriculum. Here I leverage exploratory data analysis to find trends in a year’s worth of flight data to predict cascading delays in other locations. The results show that certain types of delays are easier to predict than others.
    `,
      timestamp:
        "May, 2020",
      links:
        [
          {
            title:
              "Publication on Springboard’s blog",
            url: "https://www.springboard.com/blog/data-science/how-to-predict-flight-delays-using-data-science/",
          },
          {
            title:
              "GitHub Repository",
            url: "https://github.com/KalenWillits/CapstoneTwo/",
          },
        ],
      bullets:
        [
          "Python",
          "Pandas",
          "Numpy",
          "SciKit-Learn",
          "Jupyter Notebooks",
        ],
    },
  ];
