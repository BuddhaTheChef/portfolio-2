import React, { Component } from "react";

class PortfolioPage extends Component {

    state = {
      condition: false
    }

  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });

  }

  render() {
    return (
      <div id="portfolio" className="main-portfolio-div">
        <section className="strips">
          <article onClick={ this.handleClick } className= { this.state.condition ? "strip__toggled" : "strips__strip" }>
            <div className="strip__content">
              <h1 className="strip__title" data-name="Lorem">
                Proj 1
              </h1>
              {this.state.condition ? 
              <div className="strip__inner__text">
                <h2>Project 1</h2>
                <div className="inner-modal-div">Insert image or video</div>
                <p style={{width: '90%', marginTop: '7px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
                <p>- React - Angular - Node - Javascript - Firebase</p>
              </div>
              : 
              null
              }
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Ipsum">
                Proj 2
              </h1>
              <div className="strip__inner-text">
                <h2>Project 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Dolor">
                Proj 3
              </h1>
              <div className="strip__inner-text">
                <h2>Project 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Sit">
                Proj 4
              </h1>
              <div className="strip__inner-text">
                <h2>Project 4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Amet">
                Proj 5
              </h1>
              <div className="strip__inner-text">
                <h2>Project 5</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <i className="fa fa-close strip__close" />
        </section>

        <section className="strips">
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Lorem">
                Proj 6
              </h1>
              <div className="strip__inner-text">
                <h2>Project 6</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Ipsum">
                Proj 7
              </h1>
              <div className="strip__inner-text">
                <h2>Project 7</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Dolor">
                Proj 8
              </h1>
              <div className="strip__inner-text">
                <h2>Project 8</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Sit">
                Proj 9
              </h1>
              <div className="strip__inner-text">
                <h2>Project 9</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Amet">
                Proj 10
              </h1>
              <div className="strip__inner-text">
                <h2>Project 10</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <i className="fa fa-close strip__close" />
        </section>

        <section className="strips">
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Lorem">
                Proj 11
              </h1>
              <div className="strip__inner-text">
                <h2>Project 11</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Ipsum">
                Proj 12
              </h1>
              <div className="strip__inner-text">
                <h2>Project 12</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Dolor">
                Proj 13
              </h1>
              <div className="strip__inner-text">
                <h2>Project 13</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Sit">
                Proj 14
              </h1>
              <div className="strip__inner-text">
                <h2>Project 14</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Amet">
                Proj 15
              </h1>
              <div className="strip__inner-text">
                <h2>Project 15</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia sapiente deserunt consectetur, quod reiciendis
                  corrupti quo ea aliquid! Repellendus numquam quo, voluptate.
                  Suscipit soluta omnis quibusdam facilis, illo voluptates odit!
                </p>
              </div>
            </div>
          </article>
          <i className="fa fa-close strip__close" />
        </section>
      </div>
    );
  }
}

export default PortfolioPage;
