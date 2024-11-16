import { Controller } from "@hotwired/stimulus"
import Toastify from 'toastify-js';

// Connects to data-controller="notifications"
export default class extends Controller {
  static values = {
    message: String,
    color: "",
    background: "",
    duration: { type: Number, default: 3000 }
  }

  connect() {
    this.showToast()
    console.log("Do what you want here. Notifications");

  }

  showToast() {
    Toastify({
      text: this.messageValue || "This is a default toast message!",
      duration: this.durationValue,
      close: true, // adds a close button
      gravity: "top", // toast position: "top" or "bottom"
      position: "center", // left, right, or center
      backgroundColor: this.backgroundValue, // example styling
      style: {
        "max-width": '500px'
      }
    }).showToast()
  }

  
};
