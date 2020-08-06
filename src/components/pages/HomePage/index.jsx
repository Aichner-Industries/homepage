//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBBtn,
} from "mdbreact";

//> Images
import earthImg from "../../../assets/content/earth.jpg";
import marsImg from "../../../assets/content/mars.jpg";
import rockImg from "../../../assets/content/rock.jpg";
//> CSS
import "./HomePage.scss";
//#endregion

//#region > Components
class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBView>
          <MDBEdgeHeader className="sectionPage" />
          <MDBMask overlay="black-light"></MDBMask>
        </MDBView>
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol md="10" className="mx-auto py-2 px-2">
                <MDBCard className="float-none white border">
                  <MDBCardBody className="text-center">
                    <h2 className="h2-responsive mb-4">
                      <strong className="font-weight-bold">
                        We are looking for collaborators
                      </strong>
                    </h2>
                    <MDBRow />
                    <p className="lead mb-1">
                      We <MDBIcon icon="heart" className="pink-text" /> Open
                      Source
                    </p>
                    <p className="pb-2 text-muted">
                      All of our tools, research and progress is{" "}
                      <strong>100%</strong> open source.
                    </p>
                    <div>
                      <MDBBtn
                        social="git"
                        href="https://github.com/aichner-industries"
                        target="_blank"
                      >
                        <MDBIcon fab icon="github" />
                        View on GitHub
                      </MDBBtn>
                      <MDBBtn
                        color="indigo"
                        href="mailto:info@aichner.industries"
                      >
                        Get involved
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center mt-5 mb-2 font-weight-bold">
                  Why care?
                </h2>
                <p className="text-center text-muted lead mb-5">
                  Because humanity is just too important to us.
                </p>
                <MDBRow className="why">
                  <MDBCol lg="4">
                    <img src={earthImg} alt="Earth" />
                    <p>Earth's resources are being depleted</p>
                    <p className="small text-muted">
                      Many important resources on this planet are limited. There
                      will be the day, when those resources are gone. Progress
                      will be halted and humanity will no longer be able to
                      thrive, crashing into chaos.
                    </p>
                  </MDBCol>
                  <MDBCol lg="4">
                    <img src={marsImg} alt="Mars" />
                    <p>Colonies will need resources too</p>
                    <p className="small text-muted">
                      Becoming an interplanetary species is important for the
                      survival of the human race. But providing vital resources
                      like water, hydrogen and more will be a very hard task for
                      a earth already gutted of its resources.
                    </p>
                  </MDBCol>
                  <MDBCol lg="4">
                    <img src={rockImg} alt="Mars" />
                    <p>Resources in space are abundant</p>
                    <p className="small text-muted">
                      Minerals that lie in the belt of asteroids between Mars
                      and Jupiter hold mineral wealth equivalent to about $100
                      billion for every individual on Earth.
                    </p>
                  </MDBCol>
                </MDBRow>
                <p className="text-center text-muted mt-3 mb-1">
                  Hard rock minerals could be mined from an asteroid or a spent
                  comet. Precious metals such as gold, silver, and platinum
                  group metals could be transported back to Earth, while iron
                  group metals and other common ones could be used for
                  construction in space.
                </p>
                <hr className="my-5" />
                <MDBRow id="categories" className="justify-content-center">
                  <MDBCol lg="4">
                    <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="github"
                            fab
                            className="dark-text pr-2"
                          />
                          <strong>GitHub</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Collaborate with us and earn your own Aichner
                          Industries badge!
                        </MDBCardText>
                        <MDBBtn
                          social="git"
                          href="https://github.com/aichner-industries"
                          target="_blank"
                          size="md"
                        >
                          <MDBIcon fab icon="github" />
                          GitHub
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4">
                    <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="dollar-sign"
                            className="dark-text pr-2"
                          />
                          <strong>Funding</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Your financial support opens up new international
                          possibilities and enables us to work harder on our
                          goals.
                        </MDBCardText>
                        <MDBBtn
                          social="git"
                          size="md"
                          href="https://github.com/sponsors/Aichnerc"
                          target="_blank"
                        >
                          <MDBIcon icon="heart" className="pink-text" />
                          GitHub Sponsor
                        </MDBBtn>
                        <p className="mt-3 small mb-0">
                          <a
                            href="mailto:info@aichner.industries"
                            className="text-muted"
                          >
                            I want do donate more
                          </a>
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}
//#endregion

//#region > Exports
export default HomePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
