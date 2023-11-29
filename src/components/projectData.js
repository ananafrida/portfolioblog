import project1 from './../assets/images/project1.png';
import project2 from './../assets/images/project2.png';
import project3 from './../assets/images/project3.png';
import project4 from './../assets/images/project4.png';
import project5 from './../assets/images/project5.png';

export const ProjectData = [
    {
        title: "Wesleyan Interactive Campus Map",
        description: "This is Wesleyan University's campus map built using Google Map API, mapIDs, and custom Google Map markers. I built interactive campus map for university using Google Maps API to help people navigate and update locations.",
        img: project1,
        stack: "JavaScript",
        link: "https://animated-semolina-5e423f.netlify.app"
    },
    {
        title: "Music Rater Mobile App",
        description:(
            <div dangerouslySetInnerHTML={{ __html: `
                We developed a React-Native frontend that seamlessly integrates with our PHP/MySQL backend created, via a REST API. The app allows users to manage a list of songs, including creating, reading, updating, and deleting songs. This is a collaborative class project with my teammate <a href="https://github.com/n-aggarwal" target="_blank">Nishant Aggarwal</a>.
            `}} />
        ),
        img: project2,
        stack: "React Native",
        link: "https://github.com/ananafrida/comp-333-4-frontend"
    },
    {
        title: "Task List App",
        description: "A task list app that allow users to add, search, and delete tasks. It also allows them to rank tasks based on priority.",
        img: project3,
        stack: "Angular",
        link: "https://github.com/ananafrida/tasklist"
    },
    {
        title: "Fries Center for Global Studies Data Project",
        description: "This is Wesleyan University's data summer data project to observe the trends of study abroad students' language type based on majors and divisions over years.",
        img: project4,
        stack: "R and SAS",
        link: "https://github.com/ananafrida/wes-fries-data-project"
    },
    {
        title: "My Old Portfolio Blog",
        description: "I built this app to as a part of self-paced web development learning in high school.",
        img: project5,
        stack: "CSS",
        link: "https://github.com/ananafrida/portfolioblog"
    }
];