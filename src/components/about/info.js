import allmoxy from "./journeyImages/allmoxy.png"
import cityyear from "./journeyImages/cityyear.png"
import fullsail from "./journeyImages/fullsail.png"
import fullstack from "./journeyImages/fullstack.png"
import horizon from "./journeyImages/horizon.jpg"
import asd from "./journeyImages/asd.png"
import vschool from "./journeyImages/vschool.png"
import willowschool from "./journeyImages/willowschool.png"

const Milestone = class{
    constructor(name, year, info, img) {
        this.name = name;
        //number :increase stamina or life
        this.year = year;
        //number :decrease stamina or life
        this.info = info;
        //string: makes typing more dynamic : how this object should be used
        this.img = img;
    }
}
const milestones = [
    new Milestone("City Year", "2013 & 2018", "I completed two years of community service with City Year Inc. One as a corps member, and one as a team leader. My experience here helped me grow as a leader and ignited my passion to serve in and give back to my communities.", cityyear),
    new Milestone("The Willow School", "2014-2018", "My first professional job as an educator, the Willow school laid the foundation for my teaching philosophy. Even though I teach adult learners now, I still think learing should be fun and engaging!", willowschool),
    new Milestone("ASD", "2019-2021", "Though I've worked many jobs in customer service, answering phones for funeral homes at ASD, Answering Service for Directors, made me more empathetic  and intentional in my interactions with customers. When I became a trainer, I took my first steps in teaching and training my peers.", asd),
    new Milestone("Vschool","2020-2021", "When the pandemic hit, I began looking for a career that would allow me to stay home with my son. I enrolled in VSchool and learned HTML, CSS, Javascript, REACT, and Non-relational databases.", vschool),
    new Milestone("Allmoxy", "2021-2023", "My first professional software engineer job, at Allmoxy I developed the skills I already had and built new development skills like JQuery, python, and AWS storage.",allmoxy),
    new Milestone("Full Sail University", "2023-2024", "I enrolled my Full Sail University and obtained my Associates in Information technology while maintaining a 3.95 GPA", fullsail), 
    new Milestone("Fullstack Academy", "2023-present", "I currently work as a Fullstack Web Development Instructor. I teach cohort of 10-20 students foundational front-end and back-end concepts.", fullstack), 
    new Milestone("Full Sail University", "2023-2024", "After obtaining my associates, I continued at Full Sail University to get my Bachelors in Cybersecurity. I graduate June 6, 2025 and am excited to put my new skills to work!", fullsail),
    new Milestone("Up Next", "2025-beyond", "Interesting in contacting me for future opportunities or collaboration? Visit the resume page to contact me!", horizon)
]

export default milestones
