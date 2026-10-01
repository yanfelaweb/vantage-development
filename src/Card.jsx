import ProfilePic from './assets/images/mybulb.png';
function Card(){
    return (<div className="card">

    <img src= {ProfilePic} alt="profile-picture" className="card-image"/>
    <h2 className="card-title">Abass ayodeji</h2>
    <p>I am a student at Techpro Institute</p>
    </div>
    );
}

export default Card;