import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {  FormGroup, Input, Label, Row, Col, } from 'reactstrap';
// import Button from '@mui/material/Button';
import { db } from "./Data form fire/firebase"
import { ref, set } from "firebase/database";

const Register = () => {
  const [email,setemail]= useState ('')
  const [password,setpassword]= useState ('')
  const [Address,setAddress]= useState ('')
  const [Address2,setAddress2]= useState ('')
  const [City,setCity]= useState ('')
  const [State,setState]= useState ('')
  const [Zip,setZip]= useState ('')
  const [notify,setnotify]= useState('')


  const onSubmit = (event) =>{

    const id = Date.now()

event.preventDefualt()
const useRef = ref(db , 'user/' + id)
set(useRef,{
  email:email,
  password:password,
  Address:Address,
  Address2:Address2,
  City:City,
  State:State,
  Zip:Zip

})
setnotify('Data Add')
  }


  return (
    <div>
    <span className="notify">{notify}</span>
    <div className="container">

      <div className="fbg" >
        <form className="marg "
        onSubmit={onSubmit} >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input name="email" placeholder="Email"
                 type = "email" required
                 value={email} onChange={(e)=>setemail(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Password
                </Label>
                <Input
                  id="examplePassword" name="password" placeholder="password placeholder" type="password" required
                  value={password} onChange={(e)=>setpassword(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">
              Address
            </Label>
            <Input
              id="exampleAddress" name="address" placeholder="1234 Main St" required
              value={Address} onChange={(e)=>setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">
              Address 2
            </Label>
            <Input
              name="address2" placeholder="Apartment, studio, or floor"
              value={Address2} onChange={(e)=>setAddress2(e.target.value)}
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">
                  City
                </Label>
                <Input
                  id="exampleCity" name="city" required
                  value={City} onChange={(e)=>setCity(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">
                  State
                </Label>
                <Input
                  id="exampleState" name="state" required
                  value={State} onChange={(e)=>setState(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">
                  Zip
                </Label>
                <Input
                  type="number" max="6"  required
                  value={Zip} onChange={(e)=>setZip(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input
              id="exampleCheck" name="check" type="checkbox"
            />
            <Label
              check for="exampleCheck" required
            >
              Check me out
            </Label>
          </FormGroup>
          <div className="fform">
            {/* <Button variant="outlined"  >
              <Link to="/Home" >Sign Up</Link>
            </Button> */}
            <button type="Submit" >Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );

}

export default Register;