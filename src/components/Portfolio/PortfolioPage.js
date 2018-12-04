import React from "react";

const PortfolioPage = () => (
  <div id="portfolio" className="main-portfolio-div">
    {/* topDiv */}
    <div className="top-portfolio-div">
      <div className="sub-portfolio-div">Proj 1</div>
      <div className="sub-portfolio-div">Proj 2</div>
      <div className="sub-portfolio-div">Proj 3</div>
      <div className="sub-portfolio-div">Proj 4</div>
      <div className="sub-portfolio-div">Proj 5</div>
      <div className="sub-portfolio-div">Proj 6</div>
    </div>
    {/* midDiv */}
    <div className="top-portfolio-div" style={{ background: "dimgray" }}>
      <div className="sub-portfolio-div">Proj 7</div>
      <div className="sub-portfolio-div">Proj 8</div>
      <div className="sub-portfolio-div">Proj 9</div>
      <div className="sub-portfolio-div">Proj 10</div>
      <div className="sub-portfolio-div">Proj 11</div>
      <div className="sub-portfolio-div">Proj 12</div>
    </div>
    {/* BotDiv */}
    <div className="top-portfolio-div" style={{ background: "#282c34" }}>
      <div className="sub-portfolio-div">Proj 13</div>
      <div className="sub-portfolio-div">Proj 14</div>
      <div className="sub-portfolio-div">Proj 15</div>
      <div className="sub-portfolio-div">Proj 16</div>
      <div className="sub-portfolio-div">Proj 17</div>
      <div className="sub-portfolio-div">Proj 18</div>
    </div>
  </div>
);

export default PortfolioPage;
