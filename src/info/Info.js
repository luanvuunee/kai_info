import self from "../img/self.png"
import mock1 from "../img/crm.png"
import mock2 from "../img/metapp.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Luan",
    lastName: "Vu Nguyen",
    initials: "React", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Web Developer'
        },
        {
            emoji: '🇯🇵',
            text: 'JLPT N3'
        },
        {
            emoji: "💼",
            text: "BMG Group VN"
        },
        {
            emoji: "📧",
            text: "luanvuforwork@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/kaiiscomingg",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        
        {
            link: "https://github.com/luanvuunee",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/luanvuforwork/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Luan(Kai). I'm a web developer for BMG Group VN. I studied CompSci at MKU, I have Japanese N3 proficiency and enjoy playing football, singing, and exploring tech-related topics.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'MUI', 'Japanese', 'Redux', 'figma'],
            exposedTo: ['NestJS', 'AWS', 'VPS']
        }
    ,
    hobbies: [
        {
            label: 'football',
            emoji: '⚽️'
        },
        {
            label: 'game',
            emoji: '🎮'
        },
        {
            label: 'streaming',
            emoji: '💻'
        },
        {
            label: 'singing',
            emoji: '🎼'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "CRM Bank",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "SM Meta Passport",
            live: "",
            source: "",
            image: mock2
        },
       
        {
            title: "Day Will Come",
            live: "https://netxjs-daywillcome.vercel.app",
            source: "https://github.com/luanvuunee/netxjs_daywillcome",
            image: mock5
        }
    ]
}