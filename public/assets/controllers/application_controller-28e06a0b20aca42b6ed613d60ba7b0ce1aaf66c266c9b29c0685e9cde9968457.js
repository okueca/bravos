import { Controller } from "@hotwired/stimulus"
import "select2"

// Connects to data-controller="application"
export default class extends Controller {
  connect() {
    console.log("teste");
  }
  
};
