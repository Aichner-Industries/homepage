//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router DOM bindings
import { Link } from "react-router-dom";

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
  MDBAvatar,
} from "mdbreact";

//> Images
import badgeImg from "../../../assets/badge-h200.png";
//#endregion

//#region > Data
const TEAM = [
  {
    name: "Christian Aichner",
    avatar:
      "https://avatars3.githubusercontent.com/u/21159914?s=460&u=afab4659183999f1adc85089bb713aefbf085b94&v=4",
    facebook: "https://www.facebook.com/aichner.christian",
    github: "https://github.com/Aichnerc",
    linkedin: "https://www.linkedin.com/in/aichnerc/",
    snek: "https://snek.at/u/Aichnerc",
    positions: ["Chairman and founder", "Full-Stack Software Engineer"],
  },
  {
    name: "Luca Egger",
    avatar:
      "https://avatars1.githubusercontent.com/u/54544871?s=460&u=7f97ca40d7449158c3ee807c9144cf9451ab72ef&v=4",
    facebook: "https://www.facebook.com/lucaegger00",
    github: "https://github.com/sweggerat",
    positions: ["Deputy chairman and co-founder", "Customer relations"],
  },
  {
    name: "Florian Kleber",
    avatar:
      "https://avatars3.githubusercontent.com/u/26285351?s=460&u=436ec570a42946e246268b2e3b1e310342e02aa8&v=4",
    github: "https://github.com/kleberbaum",
    snek: "https://snek.at/u/kleberbaum",
    positions: ["Code Quality Inspector", "Backend Software Engineer"],
  },
  {
    name: "David Pinterics",
    avatar:
      "https://avatars1.githubusercontent.com/u/55298934?s=460&u=37517fbfe6f4bc3aa2b1f92fa58a348bd977abbe&v=4",
    github: "https://github.com/pinterid",
    snek: "https://snek.at/u/pinterid",
    positions: ["Code Quality Inspector"],
  },
];
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
        <h2 className="mb-2 mt-2">Meet the dynamic team</h2>
        <p className="text-muted mb-5">
          The will to strive and live as humanity is what connects all of us.
        </p>
        <MDBRow className="justify-content-center">
          {TEAM.map((member, m) => {
            return (
              <MDBCol lg="4" className="mt-5 mb-5" key={m}>
                <MDBCard testimonial className="border">
                  <MDBAvatar className="mx-auto white border">
                    <img src={member.avatar} alt={member.name} />
                  </MDBAvatar>
                  <MDBCardBody>
                    <h4 className="card-title mb-0">{member.name}</h4>
                    {member.positions &&
                      member.positions.map((pos, p) => {
                        return <p className="text-muted small mb-0">{pos}</p>;
                      })}
                    <hr />
                    {member.github && (
                      <MDBBtn
                        social="git"
                        size="md"
                        href={member.github}
                        target="_blank"
                      >
                        <MDBIcon fab icon="github" />
                        GitHub
                      </MDBBtn>
                    )}
                    {member.facebook && (
                      <MDBBtn
                        social="fb"
                        size="md"
                        href={member.facebook}
                        target="_blank"
                      >
                        <MDBIcon fab icon="facebook" />
                        Facebook
                      </MDBBtn>
                    )}
                    {member.linkedin && (
                      <MDBBtn
                        social="li"
                        size="md"
                        href={member.linkedin}
                        target="_blank"
                      >
                        <MDBIcon fab icon="linkedin" />
                        LinkedIn
                      </MDBBtn>
                    )}
                    {member.snek && (
                      <MDBBtn
                        color="snek"
                        size="md"
                        href={member.snek}
                        target="_blank"
                      >
                        <span className="d-flex align-items-center">
                          <img
                            src="https://github.com/snek-at/ops-front/blob/master/public/fav/apple-icon-57x57.png?raw=true"
                            alt="SNEK Logo"
                            height="11"
                            className="mr-1"
                          />
                          snek
                        </span>
                      </MDBBtn>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
          <MDBCol lg="12" />
          <MDBCol lg="4" className="mt-5">
            <MDBCard testimonial className="border">
              <MDBCardBody>
                <h4 className="card-title mb-0">Join us today</h4>
                <hr />
                <Link to="/jobs">
                  <MDBBtn color="indigo" size="md">
                    positions
                  </MDBBtn>
                </Link>
                <MDBBtn
                  color="elegant"
                  outline
                  href="mailto:info@aichner.industries"
                  size="md"
                >
                  e-mail
                </MDBBtn>
                <MDBBtn
                  social="git"
                  size="md"
                  href="https://github.com/sponsors/Aichnerc"
                  target="_blank"
                >
                  <MDBIcon icon="heart" className="pink-text" />
                  GitHub Sponsor
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
