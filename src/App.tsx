import React from 'react';
import './App.css';

// Import your sample images
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-section">
          <h1>stop right there, criminal scum 😈</h1>
          <div className="commission-info">

            <h3>commissions open 📥 <a href="https://twitter.com/messages/compose?recipient_id=48013384" className="link-text">dm</a> <a href="mailto:hwplivnlow@gmail.com" className="link-text">email</a>
              &nbsp;
              <a href="https://twitch.tv/hp_az" target="_blank" rel="noopener noreferrer">
                <img src="https://www.vectorlogo.zone/logos/twitch/twitch-horizontal.svg" alt="Twitch Logo" className="twitch-logo" />
              </a>
            </h3>



          </div>
        </div>
        <div className="image-section">
          {/* Display your sample images */}
          <img src={image1} alt="Sample 1" className="sample-image" />
          <img src={image2} alt="Sample 2" className="sample-image" />
          <img src={image3} alt="Sample 3" className="sample-image" />
          <img src={image4} alt="Sample 4" className="sample-image" />
          <img src={image5} alt="Sample 5" className="sample-image" />
          <img src={image6} alt="Sample 6" className="sample-image" />
        </div>
      </header>
    </div>
  );
}

export default App;
