import git from "./assets/git.svg"
import gitDark from "./assets/gitDark.svg"
import github from "./assets/github.svg"
import githubDark from "./assets/githubDark.svg"
import linkedIn from "./assets/linkedIn.svg"
import linkedInDark from "./assets/linkedInDark.svg"
import telegram from "./assets/telegram.svg"
import telegramDark from "./assets/telegramDark.svg"
import instagram from "./assets/instagram.svg";
import instagramDark from "./assets/instagramDark.svg";
import email from "./assets/email.svg"
import emailDark from "./assets/emailDark.svg"
import navigation from "./assets/navigation.svg"
import navigationDark from "./assets/navigationDark.svg"
import phone from "./assets/phone.svg"
import phoneDark from "./assets/phoneDark.svg"
import java from "./assets/java.svg";
import javaDark from "./assets/javaDark.svg";
import spring from "./assets/spring.svg"
// import spring from "./assets/jakarta.svg"
import springDark from "./assets/springDark.svg"
import javascipt from "./assets/javascript.svg"
import javasciptDark from "./assets/javascriptDark.svg"
import react from "./assets/react.svg"
import reactDark from "./assets/reactDark.svg"
import tic_tac_toe from "./assets/portfolio/tic-tac-toe.png";
import petProject from "./assets/project.png";
export const currentYear=new Date().getFullYear();
export const header={

    full_name:"Aman Kalabay",
    list:[
        {
            href:"#home",
            name:"Home"
        },
        {
            href:"#personal",
            name:"Personal"
        },
        {
            href:"#skills",
            name:"Skills"
        },
        {
            href:"#portfolio",
            name:"Portfolio"
        },
        {
            href:"#contact",
            name:"Contact"
        },
    ]
}
export const social=[
    {
        id:"1",
        name:"Github",
        href:"https://github.com/Amansdfg",
        img:github,
        imgDark:githubDark,
    },
    {
        id:"2",
        name:"LinkedIn",
        href:"https://www.linkedin.com/in/aman-kalabay-4371542bb/",
        img:linkedIn,
        imgDark:linkedInDark,
    },
    {
        id:"3",
        name:"Telegram",
        href:"https://t.me/AmanKalabay",
        img:telegram,
        imgDark:telegramDark,
    },
    {
        id:"4",
        name:"Instagram",
        href:"https://www.instagram.com/aman_kalabay/",
        img:instagram,
        imgDark:instagramDark,
    }
]
export const personal_info=[
    {
        id:"p1",
        img:email,
        imgDark:emailDark,
        name:"kalabaiaman2006@gmail.com"
    },
    {
        id:"p2",
        img:phone,
        imgDark:phoneDark,
        name:"8-747-539-70-59"
    },
    {
        id:"p3",
        img:navigation,
        imgDark:navigationDark,
        name:"Almaty, Kazakhstan"
    }
]
export const skills=[
    {
        id:"1",
        name:"Java",
        skill:95
    },
    {
        id:"2",
        name:"JavaScript",
        skill:80
    },
    {
        id:"4",
        name:"Spring",
        skill:85
    },
    {
        id:"5",
        name:"React",
        skill:80
    },
    {
        id:"6",
        name:"Postgres",
        skill:80
    },
    {
        id:"7",
        name:"Tailwind CSS",
        skill:80
    }
]
export const card=[
    {
        id:"1",
        head:"Java",
        text:"Java Expert: Skilled in object-oriented programming, cross-platform development, and performance optimization.",
        img:java,
        imgDark:javaDark,
        headBack:"Spring",
        textBack:"Spring Pro: Proficient in Spring Boot, Dependency Injection, and scalable, maintainable application development.",
        imgBack:spring,
        imgBackDark:springDark,
    },
    {
        id:"2",
        head:"JavaScript",
        text:"JavaScript Expert: Proficient in dynamic web development, ES6+, and interactive user interfaces.",
        img:javascipt,
        imgDark:javasciptDark,
        headBack:"React",
        textBack:"React Pro: Skilled in building responsive, component-based UIs with state management and Hooks.",
        imgBack:react,
        imgBackDark:reactDark,
    },
    {
        id:"3",
        head:"Git",
        text:"Git Expert: Master in version control, branching, merging, and collaborative workflows.",
        img:git,
        imgDark:gitDark,    
        headBack:"GitHub/Gitlab",
        textBack:"GitHub/GitLab Pro: Skilled in repository management, CI/CD pipelines, and code review processes.",
        imgBack:github,
        imgBackDark:githubDark,
    }
]
export const porfolio=[
    {
        id:"p1",
        img:tic_tac_toe,
        title:"Tic Tac Toe Game",
        description:"A game played on a piece of paper in which two players write either O or X in a pattern of nine squares."
    },
    {
        id:"p2",
        img:petProject,
        title:"Chatgram",
        description:"ChatGram is a social networking platform that allows users to chat, share posts, and connect with friends in real time"
    },
]