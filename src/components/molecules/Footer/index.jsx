//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBFooter, MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";

//> CSS
import "./footer.scss";

//> Images
import badgeImg from "../../../assets/badge-h200.png";
//#endregion

//#region > Components
class Footer extends React.Component {
  state = {
    pathBack: "",
  };

  componentDidMount = () => {
    if (this.props.location) {
      let i = 1;
      let pathBack = "";
      // Check the number of slashes to fix relative links
      while (i < this.props.location.pathname.split("/").length - 1) {
        pathBack += "../";
        i++;
      }
      console.log(pathBack);
      this.setState({
        pathBack,
      });
    }
  };
  render() {
    return (
      <MDBFooter color="white" className="font-small">
        <MDBContainer className="text-center text-md-left py-3">
          <MDBRow className="flex-center">
            <MDBCol md="3" className="text-center">
              <Link to="about">
                <li className="list-unstyled">About</li>
              </Link>
              <a
                href="https://www.aichner-christian.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="list-unstyled">Privacy</li>
              </a>
            </MDBCol>
            <MDBCol md="2" className="my-3 text-center">
              <img
                src={badgeImg}
                alt="Aichner Industries Badge"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <a href="mailto:info@aichner.industries">
                <li className="list-unstyled">Contact</li>
              </a>
              <a
                href="https://www.facebook.com/aichner.industries"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="list-unstyled">Facebook</li>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <div>
              &copy; {new Date().getFullYear()} Copyright: Christian Aichner
              <p className="my-2 font-weight-bold">
                Made with
                <i
                  className="fas fa-heart pulse red-text ml-1 mr-1"
                  aria-hidden="true"
                ></i>
                by
                <a
                  href="https://www.aichner-christian.com"
                  target="_blank"
                  className="ml-1"
                  rel="noopener noreferrer"
                >
                  us
                </a>
                .
              </p>
            </div>
            <div>
              <small>
                Stable release
                {process.env.REACT_APP_VERSION && (
                  <>
                    <span className="pl-2 pr-2">·</span>
                    Version v{process.env.REACT_APP_VERSION}
                  </>
                )}
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner-industries/homepage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBIcon fab icon="github" className="pr-2" />
                  View on GitHub
                </a>
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner-industries/homepage/issues/new?template=bug_report.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBIcon icon="bug" className="pr-2" />
                  Report bug
                </a>
              </small>
            </div>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
//#endregion

//#region > Exports
export default Footer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
