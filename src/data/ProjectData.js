import portfolioImg from "../assets/projects/portfolioPic.png";
import tuneShareImg from "../assets/projects/tuneShare.png";

const Details = [
    {
        "title": "Tune Share",
        "description": "Music sharing social media website. Features include searchable music, posting & commenting, and a friend system. Music interests found through searches can be added directly to a user's profile page for others to view.",
        "techStack": [
            "React",
            "Redux",
            "SCSS",
            "React Router",
            "Ant Design",
            "Ant Design Charts",
            "date-fns"
        ],
        "imageSrc": tuneShareImg,
        "liveLink": "https://tuneshare.netlify.app/",
        "sourceLink": "https://github.com/famarcellus/share-your-tunes"
    },
    {
        "title": "Portfolio Website",
        "description": "Designed by myself using Gatsby to display skills possessed, projects completed, and info about myself.",
        "techStack": [
            "Gatsby",
            "React",
            "SCSS"
        ],
        "imageSrc": portfolioImg,
        "liveLink": process.env.GATSBY_PUBLIC_URL,
        "sourceLink": "https://github.com/famarcellus/Developer-PortfolioV3"
    }
]

export default Details;