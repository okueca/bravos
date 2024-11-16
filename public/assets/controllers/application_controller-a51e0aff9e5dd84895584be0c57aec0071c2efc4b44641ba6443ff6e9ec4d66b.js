import { Controller } from "@hotwired/stimulus"
import "select2"

// Connects to data-controller="application"
export default class extends Controller {
  connect() {
    $('#main').prepend($().alert_message);
    $('.js-example-basic-multiple').select2();
    $('.js-searchable').select2({
      allowClear: true,
      width: 200
      // If you are using Bootstrap, please add　`theme: "bootstrap"` too.
    });
    $(".alert-message").on("click", function() {
      // Your jQuery code here
      let message=$(this).attr("data-message");
      let url=$(this).attr("data-url");
      $("#message_text").text(message)
      $("#route_message").attr("href",url);
      $("#route_message").click(function(event) {
          // Add a class to the link to visually indicate it's disabled
          $(this).addClass("disabled");
      });
    });
    this.add_data_turbo();
  }

  add_data_turbo(){
    $("div.digg_pagination > a").attr("data-turbo","false");
    $("a").attr("data-turbo","false");
    $('input[type="submit"]').attr("data-turbo","false");
  }
  
}



jQuery.fn.extend({

  // check checkboxes
  alert_message: function(){
    let modal_alert_message='<div id="warning-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">';
    modal_alert_message+='<div class="modal-dialog modal-sm">';
    modal_alert_message+='<div class="modal-content">';
    modal_alert_message+='<div class="modal-body p-4">';
    modal_alert_message+='<div class="text-center">';
    modal_alert_message+='<i class="dripicons-warning h1 text-warning"></i>';
    modal_alert_message+='<h4 class="mt-2" id="message_text" >Tem certeza?</h4>';
    modal_alert_message+='<p class="mt-3">Ao clicar sim está ação será executada</p>';
    modal_alert_message+='<a id="route_message" class="btn btn-warning my-2" data-turbo="false" data-disable-with="Processando...">Sim</a>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    modal_alert_message+='</div>';
    return modal_alert_message;
  },

  // uncheck checkboxes
  uncheck: function() {
    return this.each(function() {
      this.checked = false;
    });
  }

});
