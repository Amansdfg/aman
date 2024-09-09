import React, { useEffect ,useRef} from 'react';
import classes from './Resume.module.css';

export default function Resume() {
    const ref=useRef(null);
    useEffect(()=>{
        function handleIntersection(entries,observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add(classes.animateSection);
                    observer.unobserve(entry.target);
                }
            })
        }
        const observer=new IntersectionObserver(handleIntersection,{threshold:0.3});
        const section=ref.current;
        if(section){
            observer.observe(section);
        }
        return () => {
            if (section) observer.unobserve(section);
        };
    },[])
    return (
        <section id='resume' ref={ref} className={classes.resumeSection}>        
        <div className={classes.head}>
                <span>Resume</span>
                <h3>My resume</h3>
        </div>
        <div className={classes.container}>
            <div className={classes.header_decor}>
                <h1 className={classes.h1}>Aman Kalabay</h1>        
            </div>
            <div className={classes.contact_info}>
                <p>Email: <a href="mailto:kalabaiaman2006@gmail.com">kalabaiaman2006@gmail.com</a> | Phone: +7 (747) 539 7059 | Almaty, Kazakhstan</p>
                <p>
                    <a target='blank' href="https://github.com/Amansdfg">GitHub</a> | 
                    <a target='blank' href="https://www.linkedin.com/in/aman-kalabay-4371542bb/" >LinkedIn</a> | 
                    <a target='blank' href="https://www.hackerrank.com/profile/h230103375">HackerRank</a> | 
                    <a target='blank' href='https://leetcode.com/u/Aman_0006/' >LeetCode</a> | 
                    <a href="/">Portfolio</a>
                </p>
            </div>

            <div className={classes.section}>
                <h2>About Me</h2>
                <p>
                    Good day! My name is Aman Kalabay, and I’m a motivated Java developer with a strong background in backend and frontend development. I hold a Bachelor’s degree in Information Systems and have worked on projects like Chatgram, showcasing my skills in Java and web technologies. I’m passionate about technology and continuously seek to expand my knowledge and skills. I am eager to learn and contribute to projects in the field of programming.
                </p>
            </div>

            <div className={classes.section}>
                <h2>Education</h2>
                <div className={classes.experience_item}>
                    <div className={classes.details}>
                        <h3>Suleyman Dimerel University</h3>
                        <p>Bachelor of Information Systems</p>
                        <p>Abylaihan 1/1, Kaskelen, Kazakhstan</p>
                    </div>
                    <div className={classes.date}>
                        August 2023 – June 2027<br/>GPA: 3.17
                    </div>
                </div>
            </div>

            <div className={classes.section}>
                <h2>Experience</h2>
                <div className={classes.experience_item}>
                    <div className={classes.details}>
                        <h3>Bitlab Academy</h3>
                        <p>Java Mentor</p>
                        <p>- Providing individual support and mentoring to students in their studies on topics such as Java, HTML/CSS/JS, Java EE, and Spring.</p>
                        <p>- Answering students’ questions and assisting in solving complex tasks related to the technologies being studied.</p>
                    </div>
                    <div className={classes.date}>May 2024 - June 2024</div>
                </div>
            </div>

            <div className={classes.section}>
                <h2>Projects</h2>
                <div className={classes.project_item}>
                    <div className={classes.details}>
                        <h3>Chatgram</h3>
                        <p>Java Spring, React, PostgreSQL, JWT, WebSocket, Tailwind CSS, Docker</p>
                        <p>- A social networking platform allowing users to chat, share posts, and connect with friends in real-time.</p>
                        <p>- Built with Java Spring (backend), React (frontend), and PostgreSQL (database).</p>
                        <p>- Features JWT for secure authentication, WebSocket for real-time messaging, Tailwind CSS for modern and responsive styling, and Docker for containerization.</p>
                    </div>
                    <a href='https://github.com/Amansdfg/JWT' className={classes.date}>Link</a>
                </div>
                <div className={classes.project_item}>
                    <div className={classes.details}>
                        <h3>Portfolio Website</h3>
                        <p>React, CSS</p>
                        <p>- A personal portfolio website designed to showcase projects, skills, and experience.</p>
                        <p>- Built with React.js for the frontend and styled using CSS for a clean, responsive design.</p>
                        <p>- Includes sections for project galleries, a dynamic resume, and a contact form with email integration.</p>
                    </div>
                    <a href='https://amansdfg.github.io/aman/' className={classes.date}>Link</a>
                </div>
                <div className={classes.project_item}>
                    <div className={classes.details}>
                        <h3>TechProduct Mini Market</h3>
                        <p>Java Spring, Spring Security, Liquibase, MySQL, Bootstrap, MapStruct</p>
                        <p>- An online mini market application for managing and browsing phone and laptop products.</p>
                        <p>- Built with Java Spring for the backend, featuring Spring Security for secure user authentication.</p>
                        <p>- Utilizes Liquibase for database versioning and MySQL for data storage.</p>
                        <p>- The frontend is styled using Bootstrap for a responsive and user-friendly design.</p>
                    </div>
                    <a href='https://github.com/Amansdfg/TechProduct' className={classes.date}>Link</a>
                </div>
            </div>

            <div className={classes.section}>
                <h2>Technical Skills</h2>
                <ul className={classes.skills_list}>
                    <li><strong>Languages:</strong> Java, Python, JavaScript</li>
                    <li><strong>Frameworks:</strong> Spring, React, Redux, Hibernate, JavaEE, JavaFX, TailwindCSS, Bootstrap</li>
                    <li><strong>Developer Tools:</strong> Git, Docker, GitHub, GitLab, Liquibase, MapStruct</li>
                    <li><strong>Testing:</strong> JUnit, TestNG</li>
                    <li><strong>Databases:</strong> PostgreSQL, MySQL</li>
                </ul>
            </div>

            <div className={classes.section}>
                <h2>Certifications</h2>
                <ul>
                    <li><strong>Java Developer</strong> - Bitlab Academy<br/>Issued: April 2023<br/>Description: Completed a comprehensive Java Developer course covering Java, Java EE, Spring framework, and advanced Java concepts.</li>
                    <li><strong>English B2</strong> - CES for You<br/>Issued: September 2022<br/>Description: Achieved B2 level proficiency in English as per the Common European Framework of Reference (CEFR).</li>
                </ul>
            </div>
        </div>
        </section>
    );
}
