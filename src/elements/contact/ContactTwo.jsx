import React, { Component } from "react";

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(

          <div className="wrapper">
            <form action="">
              <div id="wizard">
                <h4></h4>
                <section>
                  <div className="form-header">
                    <div className="avartar">
                      <a href="#">
                        <img src="images/avartar.png" alt=""></img>
                      </a>
                      <div className="avartar-picker">
                        <input type="file" name="file-1[]" id="file-1" className="inputfile"
                               data-multiple-caption="{count} files selected" multiple/>
                        <label htmlFor="file-1">
                          <i className="zmdi zmdi-camera"></i>
                          <span>Choose Picture</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-holder active">
                        <input type="text" placeholder="First Name" className="form-control"></input>
                      </div>
                      <div className="form-holder">
                        <input type="text" placeholder="Last Name" className="form-control"></input>
                      </div>
                      <div className="form-holder">
                        <input type="text" placeholder="Team Name" className="form-control"></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-holder">
                    <input type="text" placeholder="Email" className="form-control"></input>
                  </div>
                  <div className="form-holder">
                    <input type="password" placeholder="Create a password" className="form-control"></input>
                  </div>
                </section>

                <h4></h4>
                <section>
                  <div className="grid">
                    <div className="row">
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/programming.png" alt=""></img>
                            <span>Programming</span>
                        </div>
                      </a>
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/research.png" alt=""></img>
                            <span>Research</span>
                        </div>

                      </a>
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/teacher.png" alt=""></img>
                            <span>Teacher</span>
                        </div>

                      </a>
                    </div>
                    <div className="row">
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/tour-guide.png" alt=""></img>
                            <span>Tour Guide</span>
                        </div>
                      </a>
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/business.png" alt=""></img>
                            <span>Business</span>
                        </div>
                      </a>
                      <a href="#" className="grid-item">
                        <div className="inner">
                          <img src="images/artist.png" alt=""></img>
                            <span>Artist</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>

                <h4></h4>
                <section>

                  <div className="form-row">
                    <div className="form-holder">
                      <input type="text" placeholder="Street Name" className="form-control"></input>
                    </div>
                    <div className="form-holder">
                      <input type="text" placeholder="Street Number" className="form-control"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-holder">
                      <input type="text" placeholder="City" className="form-control"></input>
                    </div>
                    <div className="form-holder">
                      <input type="text" placeholder="Country" className="form-control"></input>
                    </div>
                  </div>
                </section>
              </div>
            </form>
          </div>
        )
    }
}
export default ContactTwo;
