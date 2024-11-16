import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="single-date-for-date-end"
export default class extends Controller {
  connect() {
    console.log("chegou qui date");
    const currentDate = new Date();
    this.element.flatpickr({
      altInput: true,
      minDate: currentDate,
      altFormat: "d-m-Y",
      dateFormat: "d-m-Y",
      mode: "range"
    });
    /*this.element.flatpickr({
      "plugins": [new rangePlugin({ input: "#post_end_date"})]
    });*/
  }
};
