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
      title: "Avionics - EFIS",
      company: "",
      description: `
	  Open source avionics application written in Rust for use with Valve's
	  Steam Deck and X-Plane 11 flight simulation software. The steam deck is a
	  powerful machine with gamepad peripherals and a built in screen capable
	  of running X-Plane 11 at lower graphics and costs less than the minimum
	  dedicated graphics card required to by X-Plane's system requirements.

	This work-in-progress application will provide at home cockpit builders and
	student pilots with a more accessible cost to having their own personal
	flight simulator at home. By using this application with ForeFlight and a
	dedicated external monitor, a student pilot can make better use of their
	ground studies by simulating airport procedures, applying checklist, and
	in-flight maneuvers in real time. Better preparing student pilots for their
	dual training with a flight instructor which may reduce the overall cost of
	flight training.


	`,
      timestamp: "",
      links:
        [
          {
            title:
              "GitHub Repository",
            url: "https://github.com/kalenwillits/avionics",
          },
        ],
      bullets:
        [
          "Rust Programming",
		  "Bevy Framework",
		  "UDP Stream",
		  "X-Plane 11",
		  "ForeFlight",
		  "Aeronautical Science",
        ],
    },

{
      title: "Aviation Stack Data Pipeline",
      company: "",
      description: `
	  A proof of concept AWS and Python data pipeline using S3, Lambda, and RDS.
      `,
      timestamp: "",
      links:
        [
          {
            title:
              "GitHub Repository",
            url: "https://github.com/KalenWillits/aviation_stack_data_pipeline",
          },
		  {
            title:
              "Aviation Stack",
            url: "https://github.com/KalenWillits/aviation_stack_data_pipeline",
          },

        ],
      bullets:
        [
          "Python",
          "AWS - S3 Lambda RDS ECR SecretsManager IAM",
          "Docker",
          "Pandas",
		  "Postgres",
        ],
    },
{
      title: "fn - A linux command line tool for the organized execution of shell scripts.",
      company: "",
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
              "Github Repository (Rust)",
            url: "https://github.com/kalenwillits/function",
          },

          {
            title:
              "Github Repository (C++)",
            url: "https://github.com/kalenwillits/fn",
          },
        ],
      bullets:
        [
		  "Rust",
          "C++",
		  "Linux",
		  "Bash"
        ],
    },


{
      title: "Lexicons - A dynamic websocket service framework",
      company: "",
      description: `
	  Lexicons is a stateless middleware websocket server framework written in Python designed to handle small and medium sized data sets.
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
      title: "Image Tool - A Rust implimented image altering cli tool",
      company: "",
      description: `
		Used as a reference repository on how to structure new cli tools.
	`,
      timestamp: "",
      links:
        [
          {
            title:
              "Github Repository",
            url: "https://github.com/kalenwillits/image-tool",
          },
        ],
      bullets:
        [
		  "Rust"
        ],
    },

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
      title: "Dice Algebra - A dice notation interpertor for controlled statistical distributions.",
      company: "",
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
        ],
      bullets:
        [
          "C++",
        ],
    },
	{
      title: "Astronautica - Godot Wild Jam #53 submission.",
      company: "",
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
