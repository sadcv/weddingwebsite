import './App.css';
import OutsideNorthBeach from './images/OutsideNorthBeach.png';
import OutsideNorthBeach2 from './images/OutsideNorthBeach2.png';
import SaveTheDate from './images/SaveTheDate.png';
import FirstKiss from './images/FirstKiss.png';
import ParkDate from './images/ParkDate.JPEG';
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div class="pls" style={{ margin: "5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1rem double white", padding: '1rem' }}>
        <h1 style={{ margin: "0" }}>SNOW DA CRUZ WEDDING</h1>
        <p style={{ fontSize: "24px", fontWeight: 600 }}>
          Hello! You're on the website for the wedding between Darra Snow and Stephanie Da Cruz.
        </p>
        <h1 style={{ fontFamily: 'cursive', fontWeight: 300, fontSize: "24px", margin: "0" }}><b>Saturday June 7th, 2025</b></h1>
      </div>
      <p>
        For now the website will hold the Save The Date information, but whenever we have things to share the website will be updated.
        If you're looking for the address, the time and place, menu and allergen information, and eventually pictures from the day, there will be
        links here!
        <br/>
        <br/>
        <i>- - Registry Coming Soon - -</i>
      </p>
      <hr style={{ border: "4px solid white" }} />

      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <img style={{ width: "50%" }} src={FirstKiss} alt="The Brides' First Date" />
        <img style={{ width: "50%" }} src={SaveTheDate} alt="The Save The Date" />
      </div>

      <br />
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center", width: '25%', border: "1rem double white", textAlign: "center" }}>
          <div>
            <h2>DATE</h2>
            <h3>Saturday June 7th, 2025</h3>
            <p><i>Evening</i></p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <h3><a href='https://www.northbeachclubhouse.com/'>North Beach Clubhouse</a></h3>
            <p>79 Boston Neck Road</p>
            <p><b>Narragansett, Rhode Island</b></p>
            <p>02882</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "35%" }}>
          <img style={{ width: '100%' }} src={OutsideNorthBeach} alt="North Beach Clubhouse from the outside" />
          <img style={{ width: '100%' }} src={OutsideNorthBeach2} alt="North Beach Clubhouse from the outside, showing more of the building" />
        </div>
        <img style={{ width: '35%' }} src={ParkDate} alt="The Brides on a date at the park" />

      </div>

      <hr style={{ border: "4px solid white" }} />

      <p>Thank you for checking out the website. We're so excited for the big day and we are so grateful to have you celebrating with us. If you have
        any questions for Darra or Stephanie, you can reach out to us here: snowdacruzfamily@gmail.com. We can't wait to see everyone there!
      </p>
    </div>
  );
}

export default App;
