import React, { Component } from "react";
import xposure from '../../assets/xposurevid.mp4'

class PortfolioPage extends Component {

    state = {
      condition: false,
      condition1: false,
      condition2: false,
      condition3: false,
      condition4: false,
      condition5: false,
      condition6: false,
      condition7: false,
      condition8: false,
      condition9: false,
      condition10: false,
      condition11: false,
      condition12: false,
      condition13: false,
      condition14: false,
      id: null
    }

  handleClick = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition: !this.state.condition
    });
  }

  handleClick1 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition1: !this.state.condition1
    });
  }
  handleClick2 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition2: !this.state.condition2
    });
  }
  handleClick3 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition3: !this.state.condition3
    });
  }
  handleClick4 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition4: !this.state.condition4
    });
  }

  handleClick5 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition5: !this.state.condition5
    });
  }

  handleClick6 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition6: !this.state.condition6
    });
  }

  handleClick7 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition7: !this.state.condition7
    });
  }

  handleClick8 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition8: !this.state.condition8
    });
  }

  handleClick9 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition9: !this.state.condition9
    });
  }

  handleClick10 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition10: !this.state.condition10
    });
  }

  handleClick11 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition11: !this.state.condition11
    });
  }

  handleClick12 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition12: !this.state.condition12
    });
  }

  handleClick13 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition13: !this.state.condition13
    });
  }

  handleClick14 = (event) => {
    console.log(event.currentTarget.id)
    this.setState({id: event.currentTarget.id})
    this.setState({
      condition14: !this.state.condition14
    });
  }



  render() {
    console.log(this.state.id)
    return (
      <div id="portfolio" className="main-portfolio-div">
        <section className="strips">
          <article id={1} onClick={ this.handleClick } className={ this.state.condition ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 1
              </h1>
              {this.state.condition ? 
              <div className="strip__inner__text">
                <h2>Xposure</h2>
                <div className="inner-modal-div">
                <video controls autoPlay className="video-display">
                  <source src={xposure} type="video/mp4"/>
                </video>
                </div>
                <p style={{width: '90%', marginTop: '7px'}}>
                A web app used to showcase your talents by setting up events and getting your name 
                around also a good place to find events happening in your area.
                <br/>
                FEATURES: have a user sign in and have saved content based on the users session, have
                 an event thats been created saved to their profile and upload to newsfeed, able to use
                  on a desktop and is mobile responsive keeping all of the functionality
                </p>
                <p>- Angular - Node - Express - Javascript - HTML5 - CSS3 - EventBrite API -</p>
              </div>
              : 
              null
              }
            </div>
          </article>
          <article id={2} onClick={this.handleClick1} className={ this.state.condition1 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 2
              </h1>
              {this.state.condition1 ? 
              <div className="strip__inner__text">
                <h2>Project 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
              : 
              null
              }
            </div>
          </article>
          <article id={3} onClick={ this.handleClick2 } className={ this.state.condition2 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 3
              </h1>
              {this.state.condition2 ? 
              <div className="strip__inner__text">
                <h2>Project 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
              :
              null
              }
            </div>
          </article>
          <article onClick={ this.handleClick3 } className={ this.state.condition3 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 4
              </h1>
              {this.state.condition3 ? 
              <div className="strip__inner__text">
                <h2>Project 4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
              :
              null 
              }
            </div>
          </article>
          <article onClick={ this.handleClick4 } className={ this.state.condition4 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 5
              </h1>
              {this.state.condition4 ? 
              <div className="strip__inner__text">
                <h2>Project 5</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
              :
              null
              }
            </div>
          </article>
        </section>

        <section className="strips">
          <article onClick={ this.handleClick5 } className={ this.state.condition5 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 6
              </h1>
              {this.state.condition5 ? 
              <div className="strip__inner__text">
                <h2>Project 6</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick6 } className={ this.state.condition6 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 7
              </h1>
              {this.state.condition6 ? 
              <div className="strip__inner__text">
                <h2>Project 7</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick7 } className={ this.state.condition7 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 8
              </h1>
              {this.state.condition7 ? 
              <div className="strip__inner__text">
                <h2>Project 8</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
                 :
                 null
                 }
            </div>
          </article>
          <article onClick={ this.handleClick8 } className={ this.state.condition8 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 9
              </h1>
              {this.state.condition8 ? 
              <div className="strip__inner__text">
                <h2>Project 9</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick9 } className={ this.state.condition9 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 10
              </h1>
              {this.state.condition9 ? 
              <div className="strip__inner__text">
                <h2>Project 10</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
                :
                null
                }
            </div>
          </article>
        </section>

        <section className="strips">
          <article onClick={ this.handleClick10 } className={ this.state.condition10 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 11
              </h1>
              {this.state.condition10 ? 
              <div className="strip__inner__text">
                <h2>Project 11</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick11 } className={ this.state.condition11 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 12
              </h1>
              {this.state.condition11 ? 
              <div className="strip__inner__text">
                <h2>Project 12</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick12 } className={ this.state.condition12 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 13
              </h1>
              {this.state.condition12 ? 
              <div className="strip__inner__text">
                <h2>Project 13</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick13 } className={ this.state.condition13 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 14
              </h1>
              {this.state.condition13 ? 
              <div className="strip__inner__text">
                <h2>Project 14</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
          <article onClick={ this.handleClick14 } className={ this.state.condition14 ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title">
                Proj 15
              </h1>
              {this.state.condition14 ? 
              <div className="strip__inner__text">
                <h2>Project 15</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
               :
               null
               }
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default PortfolioPage;
