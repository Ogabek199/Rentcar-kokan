import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Manzildan" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Manzilgacha" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Mers</option>
            <option value="non-ac">Bmw</option>
            <option value="non-ac">Toyota</option>
            <option value="non-ac">Nissan</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Avtomobil toping</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
