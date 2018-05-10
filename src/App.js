import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'react-emotion';

import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';

const App = (props) => {
  const {
    currentLastName,
    currentFirstName,
    currentPhone
  } = props;

    return (
          <Form>
              <div>
                <label htmlFor="first-name">First Name: </label>
                <Input
                  id="first-name"
                  name="first-name"
                  autocomplete='given-name'
                  type="text"
                  placeholder="First Name"
                  // value={currentLastName}
                  autofocus
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name: </label>
                <Input
                  id="last-name"
                  name="last-name"
                  autocomplete='family-name'
                  type="text"
                  placeholder="Last Name"
                  // value={currentFirstName}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone: </label>
                <Input
                  id="phone"
                  name="phone"
                  autocomplete='given-name'
                  type="tel"
                  placeholder="Phone"
                  // value={currentPhone}
                  required
                />
              </div>
            <Button>Submit</Button>
          </Form>
    );
}

export default App;
