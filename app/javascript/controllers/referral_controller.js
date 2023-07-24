import { Controller } from "@hotwired/stimulus"
import React from "react"
//import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import Referral from '../components/Referral';

// Connects to data-controller="Referral"
export default class extends Controller {
  connect() {
    // const app = document.getElementById("app");

    // createRoot(app).render(<Referral />);

    const app = this.element;
    const referrals = JSON.parse(app.dataset.referrals);
    // const form = document.querySelector('[data-controller="referral-form"] form');
    // const formData = JSON.parse(form.querySelector('input[name="form_data"]').value);
    // const authenticityToken = formData.authenticity_token;

     const authenticityToken = app.dataset.token;
     const referralsPath = app.dataset.referralsPath;
    createRoot(app).render(<Referral referrals={referrals} authenticityToken={authenticityToken} referralsPath={referralsPath} />);

    //ReactDOM.render(<Referral referrals={referrals} authenticityToken={authenticityToken} />, app);
 

  }
}
