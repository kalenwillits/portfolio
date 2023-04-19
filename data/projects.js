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
      title: "Node Core - A Python implimentation of a node scene graph.",
      company: "",
      description: `
		Used to package, test, and reuse python code. Extending object
		orienting programming from one to two dimensions allowing horizontal
		scaling.
	`,
      timestamp: "",
      links:
        [
          {
            title:
              "PyPi Package",
            url: "https://pypi.org/project/node-core/",
          },
          {
            title:
              "Github Repository",
            url: "https://github.com/kalenwillits/node-core",
          },
        ],
      bullets:
        [
		  "Python"
        ],
    },
 
    {
      title: "fn - A linux command line tool for the organized execution of shell scripts.",
      company: "Dark Mode Games",
      description: `
		The best little tool I have ever made. In less than 200 lines of c++
		code, once installed this tool will allow you to keep global and
		project level bash scripts on path to automate your work flow.
	`,
      timestamp: "",
      links:
        [
          {
            title:
              "Github Repository",
            url: "https://github.com/kalenwillits/fn",
          },
        ],
      bullets:
        [
          "C++",
		  "Linux",
		  "Bash"
        ],
    },
	      {
      title: "Dice Algebra - A dice notation interpertor for controlled statistical distributions.",
      company: "Dark Mode Games",
      description: `
		A C++ module that interprets dice notation and returns an evaluated
		integer using pseudo random number generation. Ideal for creating
		complex data distributions quickly. 
	`,
      timestamp: "",
      links:
        [
          {
            title:
              "Github Repository",
            url: "https://github.com/kalenwillits/DiceAlgebra",
          },
          {
            title:
              "Dark Mode Games Blog Post",
            url: "https://www.darkmode.games/blog/dice_algebra",
          },

        ],
      bullets:
        [
          "C++",
        ],
    },
	{
      title: "Astronautica - Godot Wild Jam #53 submission.",
      company: "Dark Mode Games",
      description: `
Astronautica is a space survival game that challenges players to gather
resources and build machines to ensure their survival. With just nine days to
work on the game, we had to hit the ground running and battle-test our
isometric concepts using a JSON API we had been prototyping for
rapid content creation.
			`,
      timestamp: "",
      links:
        [
          {
            title:
              "Download on itch.io",
            url: "https://kilthunox.itch.io/astronautica",
          },
          {
            title:
              "Github Repository",
            url: "https://github.com/kalenwillits/Astronautica",
          },
        ],
      bullets:
        [
          "Godot",
		  "Linux"
        ],
    },
    {
      title: "Lexicons - A dynamic websocket framework for performance.",
      company: "",
      description: `
Lexicons is an asynchronous websocket server framework written in Python designed to handle small and medium sized data
sets. The data is not persistent but dumps all tables to separate json files on shutdown or scheduled task. Excellent
for chat servers, micro-services, and multiplayer game development.
      `,
      timestamp: "",
      links:
        [
          {
            title:
              "GitHub Repository",
            url: "https://github.com/KalenWillits/lexicons",
          },
          {
            title:
              "PyPi Package",
            url: "https://pypi.org/project/lexicons/",
          },
        ],
      bullets:
        [
          "Python",
          "Websockets",
          "json",
          "Pandas",
        ],
    },
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
        to keep the data such as this post static in order to keep maintenance and loading times at a minimum. Hosted on AWS on a Amplify container.

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
		  "AWS",
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
