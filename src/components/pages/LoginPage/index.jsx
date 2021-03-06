//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { withRouter } from "react-router-dom";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signIn } from "../../../store/actions/authActions";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAlert,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> Components
// To be added here

//> CSS
// To be added here

//> Images
import IMGlogo from "../../../assets/logo-h100.png";
//#endregion

//#region > Components
class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount = () => {};

  submitHandler = (event) => {
    event.preventDefault();

    this._loginUser();
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  _loginUser = () => {
    const email = this.state.email;
    const password = this.state.password;

    if (email && password) {
      this.props.signIn({
        email,
        password,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { authErrorDetails } = this.props;

    return (
      <MDBContainer id="login" className="text-center pt-5 mt-5">
        <img
          src={IMGlogo}
          style={{ maxWidth: "100%", maxHeight: "150px" }}
          alt="SithCult logo"
          className="img-fluid mb-3"
        />
        <form onSubmit={this.submitHandler}>
          <MDBRow className="flex-center">
            <MDBCol md="4">
              {authErrorDetails && (
                <MDBAlert color="danger">
                  The password is invalid or the user does not exist.
                </MDBAlert>
              )}
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                placeholder="E-Mail"
                id="materialFormRegisterConfirmEx2"
                name="email"
                className="form-control my-3"
                label="Your email"
                required
              />
            </MDBCol>
            <MDBCol md="12"></MDBCol>
            <MDBCol md="4">
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterConfirmEx4"
                className="form-control mb-3"
                placeholder="Passwort"
                name="password"
                label="Password"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="elegant" type="submit">
            <MDBIcon icon="key" />
            Login
          </MDBBtn>
        </form>
      </MDBContainer>
    );
  }
}
//#endregion

//#region > Functions
const mapStateToProps = (state) => {
  return {
    authErrorDetails: state.auth.authErrorDetails,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};
//#endregion

//#region > Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
