import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Col,
  Row,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";
// import ContactForm from "./ContactComponentForm";

const required = (value) => value && value.length > 0;
const maxLength = (len) => (value) => !value || value.length <= len; // see the extended function below. it also works fine
const minLength = (len) => (value) => value && value.length >= len; // see the extended function below. it also works fine
const isNumber = (value) => !isNaN(Number(value));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); // regex

// function required(value) {
//   return value && value.length > 0;
// }
// function maxLength(len) {
//   return function (value) {
//     return !value || value.length <= len;
//   };
// }

// function minLength(len) {
//   return function (value) {
//     return value && value.length >= len;
//   };
// }

// function isNumber(value) {
//   return !isNaN(Number(value));
// }
// function validEmail(val) {
//   return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
// }

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    //alert("current state is " + JSON.stringify(values));
    let feedback = {
      firstname: values.firstname,
      lastname: values.lastNameyOMan,
      telnum: values.telnum,
      email: values.email,
      agree: values.agree,
      contactType: values.contactType,
      message: values.message,
    };
    feedback.date = new Date().toDateString();
    this.props.postFeedback(feedback);
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h3>Give us your feedback</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      maxLength: maxLength(15),
                      minLength: minLength(3),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "required.",
                      maxLength: "the name should be less than 15 charecters.",
                      minLength: "the name shoud have more than 3 charecters.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastNameyOMan"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      maxLength: maxLength(15),
                      minLength: minLength(3),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastNameyOMan"
                    show="touched"
                    messages={{
                      required: "required.",
                      maxLength: "the name should be less than 15 charecters.",
                      minLength: "the name shoud have more than 3 charecters.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(8),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "required.",
                      maxLength: "the number should be less than 15 digits.",
                      minLength: "the number should have more than 8 digits.",
                      isNumber: "only numbers. No charecters.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "required.",
                      validEmail: "please enter a valid email",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                    defaultValue="ulalala."
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
            {/* <ContactForm submit={(values) => this.handleSubmit(values)} /> */}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Contact;
