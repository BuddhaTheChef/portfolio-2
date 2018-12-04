import React, { Component } from 'react';
import '../App.css';
import linkedIn from '../../assets/linkedIn-copy.svg'
import github from '../../assets/github-copy.svg'
import mail from '../../assets/mail-copy.svg'
import twitter from '../../assets/twitter-copy.svg'
import website from '../../assets/website-copy.svg'

class LandingPage extends Component {
  render() {
    return (
      <div className="super-div">
      <div id="home" className="main-landing-div">
      <div className="foreground">
      <h1 className="landing-page-main-title">Aj's Portfolio</h1>
      <h2 className="landing-page-skills">- React - Redux - Angular - Node - Express - SQL - Firebase -</h2>
      </div>
      </div>


      <div id="portfolio" className="main-portfolio-div">
      {/* <h1 className="landing-page-main-title">ALL Portfolio</h1> */}
     
       {/* topDiv */}
       <div className="top-portfolio-div">
         <div className="sub-portfolio-div">Proj 1</div>
         <div className="sub-portfolio-div">Proj 2</div>
         <div className="sub-portfolio-div">Proj 3</div>
         <div className="sub-portfolio-div">Proj 4</div>
         <div className="sub-portfolio-div">Proj 5</div>
         <div className="sub-portfolio-div">Proj 6</div>
       </div>
       <div className="top-portfolio-div" style={{background: 'darkgrey'}}>
         <div className="sub-portfolio-div">Proj 7</div>
         <div className="sub-portfolio-div">Proj 8</div>
         <div className="sub-portfolio-div">Proj 9</div>
         <div className="sub-portfolio-div">Proj 10</div>
         <div className="sub-portfolio-div">Proj 11</div>
         <div className="sub-portfolio-div">Proj 12</div>
       </div>
       {/* BotDiv */}
       <div className="top-portfolio-div" style={{background: 'purple'}}>
       <div className="sub-portfolio-div">Proj 13</div>
       <div className="sub-portfolio-div">Proj 14</div>
       <div className="sub-portfolio-div">Proj 15</div>
       <div className="sub-portfolio-div">Proj 16</div>
       <div className="sub-portfolio-div">Proj 17</div>
       <div className="sub-portfolio-div">Proj 18</div>
       </div>
     </div>
    
    {/* /// */}

    <div id="about" className="parent">
    <h1 className="about-main-title">About</h1>
  <div className="child child--top">
    <div className="child__inner">
    <p className="about-description">
      <span style={{fontWeight:'bold'}}>About Me: </span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
      of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
       Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
        in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
         written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
         Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
      of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
       Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
        in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
         written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
         Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
      </p>
    </div>
  </div>
  <div className="child child--middle">
    <div className="child__inner">
       
    </div>
  </div>
  <div className="child child--bottom">
    <div className="child__inner">
    </div>
  </div>
</div>

 {/* /// */}
 
      <footer className="footer-div">
      <div style={{display:'-webkit-inline-box'}}> 
      <div style={{width: 'fit-content', maxWidth: '333px'}}>
      <h2 className="footer-title">Contact Me</h2>
      <div className="footer-content-div">
        <p style={{fontSize: '17px'}}>Phone Number:(123)456-7890</p>
        <p style={{fontSize: '17xpx'}}>Email: abc@def.com </p>
        <p style={{fontSize: '17px'}}>LinkedIn: cool@linkedin.com </p>
      </div>
      </div>
      <div style={{width: 'fit-content', maxWidth: '180px'}}>
       <h2 className="footer-title" style={{marginLeft: '22px'}}>Location</h2>
       <div className="footer-content-div">
          <p style={{fontSize: '17px', marginTop: '15px'}}>Seattle, WA 12345 Place 92201</p>
       </div>
       </div>
      <div style={{width: 'fit-content', maxWidth: '290px'}}> 
      <h2 className="footer-title" style={{marginLeft: ''}}>Other</h2>
      <div className="footer-content-div">
      <p style={{fontSize: '17px', marginTop: '15px'}}>This is where you put any other intresting info about yourself or you end with something intresting</p>
      </div>
      </div>
      </div>
     
        <div className="icon-finder-main-div">
        <a href={"https://www.linkedin.com/in/ajwietechaii/"}><img className="icon-finder" src={linkedIn} alt="linkedIn"/></a>
        <a href={"https://github.com/BuddhaTheChef"}><img className="icon-finder" src={github} alt="github"/></a>
        <a href={"https://www.gmail.com"}><img className="icon-finder" src={mail} alt="mail"/></a>
        <a href={"https://www.google.com"}><img className="icon-finder" src={twitter} alt="twitter"/></a>
        <a href={"http://www.ajwietecha.com/"}><img className="icon-finder" src={website} alt="website"/></a>
        </div>
      </footer>
      </div>
    );
  }
}

export default LandingPage;
