import { Controller } from "@hotwired/stimulus"
import React from "react"
import {createRoot} from "react-dom/client"
import Signup from '../components/Signup';


export default class extends Controller {
  connect() {

    const app = this.element;

     const authenticityToken = app.dataset.token;
     const signupPath = app.dataset.signupPath;
    createRoot(app).render(<Signup authenticityToken={authenticityToken} signupPath={signupPath} />);
 

  }
}
