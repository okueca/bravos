// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
import "controllers"
import "chartkick"
import "Chart.bundle"
import "trix"
import "@rails/actiontext"

import "jquery"

function add_modal_info(message){
    let modal_alert_message='<div id="warning-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">';
    modal_alert_message+='<div class="modal-dialog modal-sm">';
    modal_alert_message+='<div class="modal-content">';
    modal_alert_message+='<div class="modal-body p-4">';
    modal_alert_message+='<div class="text-center">';
    modal_alert_message+='<i class="dripicons-warning h1 text-warning"></i>';
    modal_alert_message+='<h4 class="mt-2">Incorrect Information</h4>';
    modal_alert_message+='<p class="mt-3">'+message+'</p>';
    modal_alert_message+='<button type="button" class="btn btn-warning my-2" data-bs-dismiss="modal">Yes</button>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    return modal_alert_message;
}
console.log("De novo")
document.getElementById("digg_pagination").setAttribute("", "false");

// Para desabilitar o data-turbo="false"
Turbo.setFormMode("optin");
