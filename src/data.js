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