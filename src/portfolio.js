/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahmudul Hasan",
  title: "আসসালামু আলাইকুম, I'm Mahmudul Hasan",
  subTitle: emoji(
    "A passionate Android  Developer 🚀 having an experience of building Mobile applications with Java, Kotlin,Spring Framework, Dart, Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1COE54r6wgnuCdrMrS-7Cu7qZ1vlV9SwaF9y_wxhZ864/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/appdevmhr/",
  linkedin: "https://www.linkedin.com/in/mahmudul-hasan-023029254/",
  gmail: "honey.app.developer@gmail.com",
  facebook: "https://www.facebook.com/share/1DAuxFb3yC/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY NATIVE ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ With extensive experience in Android development, backend technologies, and cloud infrastructure, I specialize in building scalable and high-performance applications using Java, Kotlin, Flutter, and Dart."
    ),
    emoji("⚡ As an expert in modern web development and App development, I leverage Spring, Database, Dart, and Flutter to craft intuitive, full-stack applications that are both robust and efficient"),
    emoji(
      "⚡ A seasoned professional in Linux, Docker, and database management, I ensure seamless deployment and optimal performance of mission-critical systems across diverse environments. "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      "skillName": "Java",
      "fontAwesomeClassname": "fab fa-java"
    },
    {
      "skillName": "Android",
      "fontAwesomeClassname": "fab fa-android"
    },
    {
      "skillName": "Kotlin",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "JavaScript",
      "fontAwesomeClassname": "fab fa-js"
    },
    {
      "skillName": "ReactJS",
      "fontAwesomeClassname": "fab fa-react"
    },
    {
      "skillName": "Dart",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "Flutter",
      "fontAwesomeClassname": "fas fa-mobile-alt"
    },
    {
      "skillName": "Cloud",
      "fontAwesomeClassname": "fas fa-cloud"
    },
    {
      "skillName": "Database",
      "fontAwesomeClassname": "fas fa-database"
    },
    {
      "skillName": "Linux",
      "fontAwesomeClassname": "fab fa-linux"
    },
    {
      "skillName": "Firebase",
      "fontAwesomeClassname": "fas fa-fire"
    },
    {
      "skillName": "Python",
      "fontAwesomeClassname": "fab fa-python"
    },
    {
      "skillName": "Docker",
      "fontAwesomeClassname": "fab fa-docker"
    }
  ],
  "display": true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      "schoolName": "ঢাকা পলিটেকনিক ইনস্টিটিউট",
      "logo": require("./assets/images/th.jpeg"),
      "subHeader": "কম্পিউটার সায়েন্সে ডিপ্লোমা",
      "duration": "মার্চ ২০২২ - ডিসেম্বর ২০২৫",
      "desc": "ঢাকা পলিটেকনিক ইনস্টিটিউটের কম্পিউটার সায়েন্স ডিপ্লোমা প্রোগ্রামে, আমি সফটওয়্যার ডেভেলপমেন্ট, ডেটাবেস ম্যানেজমেন্ট, এবং নেটওয়ার্কিংয়ের উপর গভীর জ্ঞান অর্জন করেছি।",
      "descBullets": [
        "সফটওয়্যার ডেভেলপমেন্টে দক্ষতা অর্জন",
        "ডেটাবেস ম্যানেজমেন্টে অভিজ্ঞতা",
        "নেটওয়ার্কিং এবং সিস্টেম অ্যাডমিনিস্ট্রেশনে জ্ঞান"
      ]
    },
    {
      "schoolName": "রামগতি রাব্বানিয়া ফাজিল মাদ্রাসা",
      "logo": require("./assets/images/stanfordLogo.png"),
      "subHeader": "ক্লাস ৫ - ক্লাস ১০",
      "duration": "জানুয়ারি ২০১৫ - ডিসেম্বর ২০২১",
      "desc": "রামগতি রাব্বানিয়া ফাজিল মাদ্রাসায়, আমি ইসলামী শিক্ষা ও সাধারণ শিক্ষার সমন্বিত পাঠ্যক্রমে অংশগ্রহণ করেছি, যা আমার ব্যক্তিগত ও পেশাগত জীবনে গুরুত্বপূর্ণ ভূমিকা পালন করেছে।",
      "descBullets": [
        "ইসলামী শিক্ষা ও সাধারণ শিক্ষার সমন্বিত পাঠ্যক্রমে অংশগ্রহণ",
        "ধর্মীয় মূল্যবোধ ও নৈতিক শিক্ষার বিকাশ",
        "সামাজিক ও সাংস্কৃতিক কার্যক্রমে সক্রিয় অংশগ্রহণ"
      ]
    },{
      "schoolName": "ওস্তাদ",
      "logo": require("./assets/images/ostad.png"),
      "subHeader": "ফ্লাটার দিয়ে অ্যাপ ডেভেলপমেন্ট",
      "duration": "নভেম্বর ২০২৪ - জুলাই ২০২৫",
      "desc": "ওস্তাদের ফ্লাটার অ্যাপ ডেভেলপমেন্ট কোর্সে, আমি ডার্ট প্রোগ্রামিং, ফ্লাটার ফ্রেমওয়ার্ক, এবং আধুনিক মোবাইল অ্যাপ ডেভেলপমেন্টের উপর গভীর জ্ঞান অর্জন করেছি।",
      "descBullets": [
        "ডার্ট প্রোগ্রামিং এবং ফ্লাটার ফ্রেমওয়ার্কে দক্ষতা অর্জন",
        "রিয়েল-টাইম ডেটা ব্যবস্থাপনা এবং API ইন্টিগ্রেশন",
        "ব্যবহারকারী-বান্ধব ইন্টারফেস ডিজাইন এবং উন্নত ফিচার বাস্তবায়ন"
      ]
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "99%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "90%"
    },
    {
      Stack: "Android",
      progressPercentage: "70%"
    },
    {
      Stack: "Jetpack-Compose",
      progressPercentage: "60%"
    },
    {
      Stack: "HTML",
      progressPercentage: "90%"
    },
    {
      Stack: "CSS",
      progressPercentage: "45%"
    },
    {
      Stack: "JS",
      progressPercentage: "85%"
    }, {
      Stack: "Dart",
      progressPercentage: "75%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "DPI",
      companylogo: require("./assets/images/dpi.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "JAVA",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "BIG PROJECT",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/furetePlanBd.png"),
      projectName: "Future Planning BD",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Play Store",
          url: "https://play.google.com/store/apps/details?id=com.gsmfixfarid.thefutureplaning"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bspi.png"),
      projectName: "BSPI",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Play Store",
          url: "https://play.google.com/store/apps/details?id=com.appdevmhr.bangladeshswedenpolytechnic&pli=1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("National anthem🎙️"),
  subtitle: "Official vocal music of the National anthem of Bangladesh",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+88-01537749454",
  email_address: "appdevmhr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
