import { Controller } from "@hotwired/stimulus"
import React from "react"
import {createRoot} from "react-dom/client"
import Login from '../components/Login';


export default class extends Controller {
  connect() {

    const app = this.element;

     const authenticityToken = app.dataset.token;
     const loginPath = app.dataset.loginPath;
    createRoot(app).render(<Login authenticityToken={authenticityToken} loginPath={loginPath} />);
 

  }
}
