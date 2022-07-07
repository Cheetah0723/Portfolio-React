# Dev Portfolio

## A minimal portfolio template for Developers!

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ Made with React\
⚡️ Fully Responsive\
⚡️ Easily Customizable\
⚡️ Well organized documentation

## Demo

To view the demo: **[click here](https://iyuki.com)**

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- better chance of getting work opportunity

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

## Setup 🔧

From your command line, first clone Dev Portfolio:

```bash
# Clone the repository
$ git clone https://github.com/Cheetah0723/Portfolio-React

# Move into the repository
$ cd Portfolio-React

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install --force

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file if exists before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

Once your server has started, go to this url `http://localhost:3000/` to see the portfolio locally.
The page will reload if you make edits.

---

## Customization Instructions:

### Step 1 - DATA & IMAGES

All customizable files are inside the `public/` folder, organised mainly into `public/images/` and `public/profile/`.

- `public/images` contains all the image assets that can be customized on website
- `public/profile` contains all text and info inside json files that can be customized according to need

### (1) NavBar

- Open `public/profile/navbar.json`
  It has 2 keys, _logo_ and _sections_.

```
{
    "logo" : {
        "source": "images/logo.png",
        "height" : 50,
        "width" : 50
    },
    "sections": [
        {
            "title": "Home",
            "href": "/"
        },
        {
            "title": "About",
            "href": "/about"
        },
        {
            "title": "Skills",
            "href": "/skills"
        },
        {
            "title": "Education",
            "href": "/education"
        },
        {
            "title": "Experience",
            "href": "/experience"
        },
        {
            "title": "Projects",
            "href": "/projects"
        },
        {
            "title": "Resume",
            "href": "https://drive.google.com/file/d/17nNNmfh4nHz_Sp1vE5rGEnX4ipaKRzQq/view?usp=sharing",
            "type": "link"
        }
    ]

}
```

| key            | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| logo           | image you want to show as brand image on NavBar. It can be also be a simple logo with just your intitials |
| logo.source    | path to the logo image                                                                                    |
| logo.height    | height of logo                                                                                            |
| logo.width     | width of logo                                                                                             |
| sections       | array of sections that you want to show on Navbar as links                                                |
| sections.title | title of the section                                                                                      |
| sections.href  | link to that section. Same as _path_ mentioned in `routes.json`                                           |
| sections.type  | Opens in a new tab if value is _link_. `optional` field                                                   |

### (2) Routes

- open `public/profile/routes.json`

```
{
    "sections": [
        {
            "component": "About",
            "path": "/about",
            "headerTitle": "About"
        },
        {
            "component": "Skills",
            "path": "/skills",
            "headerTitle": "Skills"
        },
        {
            "component": "Education",
            "path": "/education",
            "headerTitle": "Education"
        },
        {
            "component": "Experience",
            "path": "/experience",
            "headerTitle": "Experience"
        },
        {
            "component": "Projects",
            "path": "/projects",
            "headerTitle": "Projects"
        }
    ]
}
```

| key                  | Description                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| sections             | array of sections that you want to create route for                                                |
| sections.component   | name of the Component. No need to change it unless you want to customize the entire Component.     |
| sections.path        | route for the particular section. this is the path where the particular section will be accessible |
| sections.headerTitle | title to be shown on the top of that section page                                                  |

- For component customization, create a component of your own inside `src/components/` and use name of that component here.

### (3) Home Section

#### Home Info

- open `public/profile/home.json`

```
{
    "name": "Iwamoto Yuki",
    "roles": ["a  Web Developer", "a Blockchain Developer", "a Software Engineer"]
}
```

| key   | Description                                            |
| ----- | ------------------------------------------------------ |
| name  | your name                                              |
| roles | string array separated by `,`. mention your roles here |

#### Social Links

- open `public/profile/social.json`

```
{
    "social": [
        {
            "network" : "linkedin",
            "href": "https://linkedin.com/in/iwamoto-yuki-65924223a"
        },
        {
            "network" : "github",
            "href": "https://github.com/Cheetah0723"
        },
        {
            "network" : "email",
            "href": "mailto:iyuki723@gmail.com"
        }
    ]
}
```

| key            | Description                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| social         | array of social links                                                                             |
| social.network | network name as provided in [react-social-icons](https://jaketrent.github.io/react-social-icons/) |
| social.href    | link for particular social network                                                                |

- we are using [react-social-icons](https://jaketrent.github.io/react-social-icons/) here. you can visit it to see all available social icons to use

### (4) About Section

- open `public/profile/about.json`

```
{
    "about": " I am Yuki from Canada having 8+ years of experience with web & blockchain and game & software developments.\n\n\n I like team spirit Sports, especially Volleyball, Football, and Basketball.\n I always put credit first on my assignments and strive to become a world-class developer, and it is my dream to become the best developer.\n There is a principle I found while developing the program.\n ➢ Respect clients and follow their wishes.\n ➢ Until you value yourself, you won't value your time. Until you value your time, you will not do anything with it.\n ➢ Pixel perfect, structured, and optimized design, smart and clean coding.\n I always work with this principle and strive to upload this principle.",
    "imageSource": "images/about/Yuki.png"
}
```

| key         | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| about       | write about yourself, your works and goals here. `markdown` supported |
| imageSource | path to your profile image. (recommended size 400 x 450)              |

### (5) Skills Section

- open `public/profile/skills.json`

```
{
    "intro": "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    "skills": [
        {

            "title": "Languages",
            "items" : [

                {
                    "icon": "images/skills/java.png",
                    "title": "Java"
                },
                {
                    "icon": "images/skills/c-plus-plus.svg",
                    "title": "C++"
                },
                {
                    "icon": "images/skills/php.png",
                    "title": "PHP"
                },
                {
                    "icon": "images/skills/js.png",
                    "title": "JavaScript"
                },
                {
                    "icon": "images/skills/typescript.png",
                    "title": "Typescript"
                },
                {
                    "icon": "images/skills/python.png",
                    "title": "Python"
                }
            ]
        },
        {
            "title": "Frameworks & Technologies",
            "items" : [
                {
                    "icon": "images/skills/angular.png",
                    "title": "Angular"
                },
                {
                    "icon": "images/skills/react.png",
                    "title": "React"
                },
                {
                    "icon": "images/skills/vue.png",
                    "title": "Vue"
                },
                {
                    "icon": "images/skills/svelte.png",
                    "title": "Svelte"
                },
                {
                    "icon": "images/skills/nodejs.png",
                    "title": "Nodejs"
                }
            ]
        },
        {
            "title" : "Databases",
            "items": [
                {
                    "icon": "images/skills/mysql.png",
                    "title": "MySQL"
                },
                {
                    "icon": "images/skills/mongo-db.png",
                    "title": "MongoDB"
                },
                {
                    "icon": "images/skills/firebase.png",
                    "title": "Firebase"
                }
            ]
        },
        {
            "title" : "Tools & Platforms",
            "items": [
                {
                    "icon": "images/skills/android-studio.png",
                    "title": "Android Studio"
                },
                {
                    "icon": "images/skills/css.png",
                    "title": "CSS"
                },
                {
                    "icon": "images/skills/git.png",
                    "title": "Git"
                },
                {
                    "icon": "images/skills/docker.png",
                    "title": "Docker"
                },
                {
                    "icon": "images/skills/cloudflare.png",
                    "title": "Cloudflare"
                }
            ]
        },
        {
            "title" : "Game Tools",
            "items": [
                {
                    "icon": "images/skills/unity.png",
                    "title": "Unity"
                },
                {
                    "icon": "images/skills/three.png",
                    "title": "ThreeJs"
                },
                {
                    "icon": "images/skills/html5.png",
                    "title": "Html5"
                }
            ]
        },
        {
            "title" : "Blockchain",
            "items": [
                {
                    "icon": "images/skills/ethereum.png",
                    "title": "Ethereum"
                },
                {
                    "icon": "images/skills/solana.png",
                    "title": "Solana"
                },
                {
                    "icon": "images/skills/polygon.png",
                    "title": "Polygon"
                }
            ]
        }
    ]
}
```

| key                | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| intro              | small introduction line related to your skills. `markdown` supported |
| skills             | array containing skills under different categories                   |
| skills.title       | title for category under which you want to list particular skills    |
| skills.items       | array containing skills for this category                            |
| skills.items.icon  | path to skill logo                                                   |
| skills.items.title | title of skill                                                       |

- many pre existing skill logos are available inside `public/images/skills`.

### (6) Education Section

- open `public/profile/education.json`

```
{
    "education":[
        {
            "title": "April 2010 - March 2013",
            "cardTitle": "B.Tech, Computer Science",
            "cardSubtitle":"Kyoto University, Kyoto",
            "cardDetailedText": "CGPA - 7.5",
            "icon" : {
                "src": "images/education/Kyoto_University.png"
            }
        },
        {
            "title": "April 2013 - March 2014",
            "cardTitle": "Full-Stack, Web development",
            "cardSubtitle":"Kyoto University, Kyoto",
            "cardDetailedText": "CGPA - 7.6"
        }
    ],
    "carousel" : [
        "images/education/kyotouniversity.png",
        "images/education/kyotouniversitygate.png",
        "images/education/kyotouniversitybuild.png"
    ]
}
```

| key                        | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| education                  | array containing education history of a person                     |
| education.title            | date range during which this education was pursued or passing date |
| education.cardTitle        | degree or course name                                              |
| education.cardSubtitle     | school or institute name                                           |
| education.cardDetailedText | extra info such as marks or cgpa                                   |
| education.icon             | icon shown on the timeline. `optional` field                       |
| education.icon.src         | path to icon                                                       |

### (7) Experience Section

- open `public/profile/experiences.json`

```
{
    "experiences": [
        {
            "title": "Blockchain Developer",
            "subtitle": "Pressply Ltd, etc",
            "workType": "Part-time",
            "workDescription": [
                "Taken part in development of large crypto freelancing platform like Frontier.",
                "Worked on 10 NFT projects and several dapp, defi projects."
            ],
            "dateText": "09/2019 – Present"
        },
        {
            "title": "Web Developer",
            "subtitle": "INTERSOG Ltd",
            "workType": "Full-Time",
            "workDescription": [
                "Worked on 3+ 3D/2D web game using Unity, Three.js, Canvas, WebGL",
                "Worked on 5+ projects using MERN stack."
            ],
            "dateText": "01/2018 – 09/2019"
        },
        {
            "title": "Web Developer",
            "subtitle": "NRI Ltd",
            "workType": "Full-Time",
            "workDescription": [
                "Worked on 10+ projects using MERN stack."
            ],
            "dateText": "07/2016 – 01/2018"
        },
        {
            "title": "Software Engineer",
            "subtitle": "VMO Ltd",
            "workType": "Internship",
            "workDescription": [
                "Developed the official apps for the startup for both Android and iOS using hybrid framework."
            ],
            "dateText": "03/2015 – 07/2016"
        }
    ]
}
```

| key                         | Description                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| experiences                 | array containing work experiences of a person                                                  |
| experiences.title           | role or designation title                                                                      |
| experiences.subtitle        | company or organization name. `optional` field                                                 |
| experiences.workType        | type of work experience. example - internship, freelance, full-time. `optional` field          |
| experiences.workDescription | string array to highlight specific points related to that work experiece. `markdown` supported |
| experiences.dateText        | date range text during which particular work experience was pursued.                           |

### (8) Projects Section

- open `public/profile/projects.json`

```
{
    "projects" : [
        {
            "image" : "images/projects/portfolio-poster.png",
            "title": "Dev Portfolio",
            "bodyText": "- Developer Portfolio Website made in React\n -  Fully customisable and dynamic, easily change data and images.\n - Dark Mode Support",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/dev-portfolio"
                },
                {
                    "text": "Live",
                    "href": "https://mayankagarwal.me"
                }
            ],
            "tags" : [
                "React",
                "Portfolio",
                "JavaScript"
            ]
        },
        {
            "title": "MVVM Sample App",
            "bodyText": "- An Android App that loads data from mock API and show in both **LinearLayout** and **GridLayout RecyclerView**.\n - Offline support using **Room** DB and **NetworkBoundResource**.\n - Uses the **MVVM** architecture.",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/mvvm-sample-app"
                }
            ],
            "tags" : [
                "Kotlin",
                "Android",
                "MVVM",
                "Room",
                "Coroutines",
                "Flow",
                "Hilt-Dagger",
                "NetworkBoundResource"
            ]
        },
        {
            "title": "Task Tracker",
            "bodyText": "- A simple Task Tracker web app made with **Angular 12**.\n - Uses **mock JSON server** to get, add, delete or update tasks.",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/task-tracker-app"
                }
            ],
            "tags" : [
                "TypeScript",
                "Angular 12",
                "JavaScript"
            ]
        }
    ]
}
```

| key                 | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| projects            | array containing projects information                              |
| projects.image      | add project poster here. `optional` field.                         |
| projects.title      | title of the project                                               |
| projects.bodyText   | description of project. `markdown` supported                       |
| projects.links      | clickable links related to the project. `optional` field           |
| projects.links.text | title of link to display                                           |
| projects.links.href | actual link to be redirected to on click of the button             |
| projects.tags       | string array containing tags related to projects. `optional` field |

### (9) Resume Section

- It is a clickable link which opens the link provided (generally drive link of resume file) in the navbar.json under Resume.

### Step 2 - STYLES

Change the color theme of the website -

Go to `/src/theme/themes.js` and change the values of the required components both under lightTheme and darkTheme with your prefered HEX color.

```theme
//Default Values
export const lightTheme = {
  background: '#fff',
  color: '#121212',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: 'white',
    cardForeColor: 'black',
    titleColor: 'white',
  },
  timelineLineColor: '#ccc',
  cardBackground: '#fff',
  cardFooterBackground: '#f7f7f7',
  cardBorderColor: '#00000020',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'light',
  bsSecondaryVariant: 'dark',
  socialIconBgColor: '#121212',
};

export const darkTheme = {
  background: '#121212',
  color: '#eee',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: '#1B1B1B',
    cardForeColor: '#eee',
    titleColor: 'black',
  },
  timelineLineColor: '#444',
  cardBackground: '#060606',
  cardFooterBackground: '#181818',
  cardBorderColor: '#ffffff20',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
  socialIconBgColor: '#fefefe',
};

```

### Step 3 - EXTRA

Go to `public/index.html`. Change _title_ and _logo_ if you want to customize it.

---

## Deployment 📦

Once you finish your setup. You need to put your website online!

I highly recommend to use [Vercel](https://vercel.app) because it is super easy.

## Notable Portfolios made using this template

- [Iwamoto Yuki](https://iyuki.com)

## Authors

- **Mayank Agarwal** - [https://github.com/Cheetah0723](https://github.com/Cheetah0723)

## Support

If you find a bug, feel free to [open an issue](https://github.com/Cheetah0723/Portfolio-React/issues) in this repository.
