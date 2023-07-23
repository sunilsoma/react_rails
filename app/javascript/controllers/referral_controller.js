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
    createRoot(app).render(<Referral referrals={referrals} />);

  }
}
