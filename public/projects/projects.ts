import { Icon } from "../icons/Icons"

type projects = {
    name: string
    img: string
    description: string
    libraries: Icon[]
    github: string
    url: string
}

export const projects:projects[] = [
    {
        name: 'Better Bettor',
        img: '/projects/bb.png',
        description: 'Fully responsive Sports Betting handicapping service providing educated sports betting picks as well as valuable insight through daily articles, bet tracking through means such as graphs and spreadsheets, and the total net gain/loss of units since registering for an account.',
        libraries: [{name: 'Next JS', img: '/icons/next.png'}, {name:'GraphQL', img:'/icons/graphql.png'}, {name:'Prism IO', img:'/icons/prisma.png'}, {name: 'Tailwind', img:'/icons/tailwind.png'}, {name:'TypeScript', img:'/icons/typescript.png'}],
        github: 'https://github.com/byoon97/ScoreTutor',
        url: 'https://www.betterbettor.me/'
    },
    {
        name: 'Umami Meats',
        img: '/projects/umami.png',
        description: 'Full responsive Japanese Umami Meats E-commerce app where users can purchase A grade beef such as A5 Wagyu and seafood such as Hokaido Uni and Kumamoto Oysters. Users are also able to create a cart and will be saved upon next log in cycle.',
        libraries: [{name: 'Next JS', img: '/icons/next.png'}, {name: 'PostgresQL' ,img:'/icons/postgresql.png'}, {name:'Redux',img:'/icons/redux.png',} ,{name:'Styled-Components', img:'/icons/styled.png'}, {name:'JavaScript', img:'/icons/js.png'}],
        github: 'https://github.com/dexters-lab-fsa-2208/umami-meats',
        url: 'https://umami-meats.vercel.app/'
    },
    {
        name: 'FSAbookie',
        img: '/projects/fsa.png',
        description: 'Sports Betting application where users can create paper bets to practice sports betting in order to gain valuable practice and communicate with other users through means such as forums.',
        libraries: [{name: 'Next JS', img: '/icons/next.png'}, {name: 'PostgresQL' ,img:'/icons/postgresql.png'}, {name:'Redux',img:'/icons/redux.png',} ,{name:'Styled-Components', img:'/icons/styled.png'}, {name:'JavaScript', img:'/icons/js.png'}],
        github: 'https://github.com/FSABookie/FSBookie',
        url: 'https://fsabookie.com/'
    },
]