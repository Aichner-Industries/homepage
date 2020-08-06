//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

//> Images
import badgeImg from "../../../assets/badge-h200.png";
//#endregion

//#region > Components
class PositionsPage extends React.Component {
  render() {
    return (
      <MDBContainer id="positions" className="py-5 my-5 text-center">
        <img
          src={badgeImg}
          alt="Aichner Industries mission badge"
          className="mt-4"
          height="150"
        />
        <h2 className="mb-2 mt-2">Help us build the future</h2>
        <p className="lead text-muted mb-2">
          Are you from earth or its colonies? Good. You can work with us.
        </p>
        <hr />
        <p className="text-muted mb-5">
          You can work from all around the solar system.
        </p>
        <MDBRow className="justify-content-center">
          <MDBCol lg="4" className="mt-3">
            <MDBCard className="border">
              <MDBCardBody>
                <p className="font-weight-bold mb-0">Software Developer</p>
                <p className="text-muted small">Voluntary</p>
                <div className="text-left">
                  <p className="mb-2">Frontend</p>
                  <ul>
                    <li>HTML, JavaScript, Sass (scss)</li>
                    <li>ReactJS</li>
                    <li>GitHub workflow</li>
                  </ul>
                  <p className="mb-2 mt-3">Backend</p>
                  <ul>
                    <li>Python, Django</li>
                    <li>Docker</li>
                    <li>GitHub workflow</li>
                  </ul>
                  <p className="mb-2 mt-3">Robotics</p>
                  <ul>
                    <li>C or C++ for flight software</li>
                    <li>Python for testing and simulations</li>
                    <li>GitHub workflow</li>
                  </ul>
                </div>
                <p className="mt-2 small text-muted">
                  Become part of the team and receive your own physical Aichner
                  Industries mission-badge.
                </p>
                <MDBBtn
                  color="indigo"
                  size="md"
                  href="mailto:info@aichner.industries?subject=Application Software Developer"
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" className="mt-3">
            <MDBCard className="border">
              <MDBCardBody>
                <p className="font-weight-bold mb-0">Researcher</p>
                <p className="text-muted small">Voluntary</p>
                <div className="text-left">
                  <p className="mb-2">Our main areas of research</p>
                  <ul>
                    <li>Avionik</li>
                    <li>Communication systems</li>
                    <li>Electronics</li>
                    <li>PCB Design</li>
                    <li>Sensors and Actuators</li>
                    <li>Astrophysics</li>
                    <li>Software Automation</li>
                    <li>Artificial intelligence</li>
                    <li>Software security</li>
                    <li>Rocket science</li>
                    <li>Payload design</li>
                    <li>Computational Physicist</li>
                  </ul>
                </div>
                <p className="mt-2 small text-muted">
                  Become part of the team and receive your own physical Aichner
                  Industries mission-badge.
                </p>
                <MDBBtn
                  color="indigo"
                  size="md"
                  href="mailto:info@aichner.industries?subject=Application Researcher"
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" className="mt-3">
            <MDBCard className="border">
              <MDBCardBody>
                <p className="font-weight-bold mb-0">Engineer</p>
                <p className="text-muted small">Voluntary</p>
                <div className="text-left">
                  <p className="mb-2">Our main areas of research</p>
                  <ul>
                    <li>Prototyping and manufacturing</li>
                    <li>Development of tooling</li>
                    <li>Production control</li>
                    <li>Solar array prototyping</li>
                    <li>Mining and recovery craft prototyping</li>
                    <li>Mission integration</li>
                    <li>Propulsion systems</li>
                    <li>Communications and integration</li>
                    <li>Optics</li>
                    <li>Hydraulics</li>
                  </ul>
                </div>
                <p className="mt-2 small text-muted">
                  Become part of the team and receive your own physical Aichner
                  Industries mission-badge.
                </p>
                <MDBBtn
                  color="indigo"
                  size="md"
                  href="mailto:info@aichner.industries?subject=Application Engineer"
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" className="mt-3">
            <MDBCard className="border">
              <MDBCardBody>
                <p className="font-weight-bold mb-0">Media Engineer</p>
                <p className="text-muted small">Voluntary</p>
                <div className="text-left">
                  <p className="mb-2">Your main areas</p>
                  <ul>
                    <li>Graphics design</li>
                    <li>Public relations</li>
                    <li>Video production</li>
                    <li>3D design</li>
                  </ul>
                </div>
                <p className="mt-2 small text-muted">
                  Become part of the team and receive your own physical Aichner
                  Industries mission-badge.
                </p>
                <MDBBtn
                  color="indigo"
                  size="md"
                  href="mailto:info@aichner.industries?subject=Application Media Engineer"
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" className="mt-3">
            <MDBCard className="border">
              <MDBCardBody>
                <p className="font-weight-bold mb-0">Other positions</p>
                <p className="text-muted small">Voluntary</p>
                <div className="text-left">
                  <ul>
                    <li>Mission manager</li>
                    <li>Customer support</li>
                    <li>Financial manager</li>
                  </ul>
                </div>
                <p className="mt-2 small text-muted">
                  Become part of the team and receive your own physical Aichner
                  Industries mission-badge.
                </p>
                <MDBBtn
                  color="indigo"
                  size="md"
                  href="mailto:info@aichner.industries?subject=Application Other"
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
//#endregion

//#region > Exports
export default PositionsPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
