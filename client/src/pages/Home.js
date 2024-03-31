import headshot from "./Headshot.png";
export default function Home(){
    return(
    <div class="side">
        <div class="text">
            <h1>Aidan Hong</h1>
            <h2>Computer Engineer+Fencer</h2>
        </div>
        <div class="image">
            <img class="headshot" src={headshot} alt="headshot"/>
        </div>
    </div>
    );
}