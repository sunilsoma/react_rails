import { Controller } from "@hotwired/stimulus"
import React from "react"
//import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import Test from '../components/Test';

// Connects to data-controller="test"
export default class extends Controller {
  connect() {
    const app = document.getElementById("app");
    //ReactDOM.render(<App />, app);
    createRoot(app).render(<Test />);
  }
}
