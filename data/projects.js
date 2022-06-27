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
      title: "Portfolio Website",
      timestamp: "June 27th, 2022",
      description: `
        This website is my personal creation to organize my journey through coding and developing.

        I built this website using Next.js and styled it with Tailwind CSS. It is reactive, mobile optimized. I chose
        to keep the data such as this post static in order to keep maintenance and loading times at a minimum.

        There are still some "TODOs" to that will help scale the content of the page that I will implement as needed.
  `,
      links:
        [
          {
            title:"GitHub Repository",
            url: "",
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
