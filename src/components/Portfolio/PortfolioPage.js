import React,{Component} from "react"; 
import ReactModal from 'react-modal';

class PortfolioPage extends Component {
    state = {
        modalIsOpen: false,
        modalIsOpen1: false,
        modalIsOpen2: false,
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
      }
     
      closeModal = () => {
        this.setState({modalIsOpen: false});
      }

      openModal1 = () => {
        this.setState({modalIsOpen1: true});
      }
     
      closeModal1 = () => {
        this.setState({modalIsOpen1: false});
      }

      openModal2 = () => {
        this.setState({modalIsOpen2: true});
      }
     
      closeModal2 = () => {
        this.setState({modalIsOpen2: false});
      }
     

    render() {
        return (
            <div id="portfolio" className="main-portfolio-div">
            {/* topDiv */}
            <div className="top-portfolio-div">
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 1</div>
                <div className="overlay" onClick={this.openModal}>
                Yo
                </div>
              </div>


        <ReactModal className="Modal" overlayClassName="Overlay" isOpen={this.state.modalIsOpen}>
          <p>Modal text 1!</p>
          <button className='modal_close_button' onClick={this.closeModal}>X</button>
        </ReactModal>

        
              <div className="sub-portfolio-div">
                <div style={{position: "absolute"}}>Proj 2</div>
                <div className="overlay" onClick={this.openModal1}>
                How
                </div>
              </div>


        <ReactModal className="Modal" overlayClassName="Overlay" isOpen={this.state.modalIsOpen1}>
          <p>Modal text 2!</p>
          <button className='modal_close_button' onClick={this.closeModal1}>X</button>
        </ReactModal>

        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 3</div>
                <div className="overlay" onClick={this.openModal2}>
                zit
                </div>
              </div>
              </div>

                <ReactModal className="Modal" overlayClassName="Overlay" isOpen={this.state.modalIsOpen2}>
          <p>Modal text 3!</p>
          <button className='modal_close_button' onClick={this.closeModal2}>X</button>
        </ReactModal>
            
        
               <div className="top-portfolio-div">
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 4</div>
                <div className="overlay">
                going
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 5</div>
                <div className="overlay">
                brahdahh
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 6</div>
                <div className="overlay">
                Chee!!
                </div>
              </div>
              </div>
        
            {/* midDiv */}
            <div className="top-portfolio-div" style={{ background: "dimgray" }}>
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 7</div>
                <div className="overlay">
                Proj 7 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 8</div>
                <div className="overlay">
                Proj 8 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 9</div>
                <div className="overlay">
                Proj 9 name
                </div>
              </div>
              </div>
        
              <div className="top-portfolio-div" style={{ background: "dimgray" }}>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 10</div>
                <div className="overlay">
                Proj 10 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 11</div>
                <div className="overlay">
                Proj 11 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 12</div>
                <div className="overlay">
                Proj 12 name
                </div>
              </div>
            </div>
            
        
            {/* BotDiv */}
            <div className="top-portfolio-div" style={{ background: "#282c34" }}>
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 13</div>
                <div className="overlay">
                Proj 13 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 14</div>
                <div className="overlay">
                Proj 14 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 15</div>
                <div className="overlay">
                Proj 15 name
                </div>
              </div>
              </div>
        
              <div className="top-portfolio-div" style={{ background: "#282c34" }}>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 16</div>
                <div className="overlay">
                Proj 16 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 17</div>
                <div className="overlay">
                Proj 17 name
                </div>
              </div>
        
              <div className="sub-portfolio-div">
              <div style={{position: "absolute"}}>Proj 18</div>
                <div className="overlay">
                Proj 18 name
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default PortfolioPage;
