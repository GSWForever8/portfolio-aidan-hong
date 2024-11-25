import {Link} from "react-router-dom";
import csvimage from "./csvstudyimage.png";
import memory from"./memory.png";
import weather from "./weather.png";
import dbfbla from "./dbfbla.png";
import lockedin from "./chat.png";
export default function Projects(){
    return(
    <div class="content">
        <h1 class="center">Projects</h1>
        <div class="side">
            <div class="text">
                <h2>LockedIn</h2>
                <p>AI Powered tool to empower students</p>
                <a href="https://github.com/GSWForever8/congressapp24" target="_blank">Link to GitHub Repo</a>
                <h3>Skills Used</h3>
                <li>Meta Llama API</li>
                <li>Flask</li>
                <li>Skikit Learn</li>
                <li>Matplotlib</li>
                <li>MERN Stack</li>
            </div>
            <div class="image">
                <img class="medium" src={lockedin} alt="lockedin"/>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>DBHS FBLA Website</h2>
                <p>The Official Website of DBHS FBLA</p>
                <a href="https://dbhsfbla.onrender.com" target="_blank">Link to website</a>
                <h3>Skills Used</h3>
                <li>Google Oauth</li>
                <li>Google Drive API</li>
                <li>MERN Stack</li>
            </div>
            <div class="image">
                <img class="medium" src={dbfbla} alt="dbfbla"/>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>JS Flashcard Game</h2>
                <p>Simple flashcard game, 6x3 and 6x6 options</p>
                <a href="https://flashcardsahong.netlify.app" target="_blank">Link to website</a>
                <h3>Skills used</h3>
                <li>HTML</li>
                <li>JS</li>
                <li>CSS</li>
            </div>
            <div class="image">
                <img class="small" src={memory} alt="memory"/>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>CSVStudy</h2>
                <p>Designed to help students study using CSV files</p>
                <a href="https://github.com/GSWForever8/CSVStudy" target="_blank">Link to GitHub Repository</a>
                <h3>Skills used</h3>
                <li>Python</li>
                <li>File handling</li>
                <li>Tkinter</li>
            </div>
            <div class="image">
            <img class="small" src={csvimage} alt="csvstudy screenshot"/>
            </div>
        </div>
        <div class="side">
            <div class="text">
            <h2>Weather App</h2>
                <p>Worked with an API and react to create basic and clean weather app</p>
                <a href="https://ahongweather.netlify.app" target="_blank">Link to website</a>
                <h3>Skills used</h3>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>APIs</li>
            </div>
            <div class="image">
            <img class="small" src={weather} alt="weather app screenshot"/>
            </div>
        </div>
    </div>
    );
}
