import { Controller } from "@hotwired/stimulus"
import "select2"
// Connects to data-controller="service-calendars"
export default class extends Controller {
  connect() {
    $('.js-example-basic-multiple').select2();
    $("div.digg_pagination > a").attr("data-turbo","false");
    $("a").attr("data-turbo","false");
    $('input[type="submit"]').attr("data-turbo","false");
    //Mostrar ou Nao Mostrar no Custo de deslocacao

    $('.type_of_budget').change(function(){
        if ($(this).val() === "Orçamento por Hora") {
            // Show input1 when "Orçamento por Hora" is selected
            $('.movement_price').show();
            $('.budget_value').show();
            $('.budget_label').text("Valor por Hora");
        } else if($(this).val() === "Orçamento Fixo"){
        // Hide
            $('.budget_label').text("Orçamento");
            $('.budget_value').show();
            $('.movement_price').hide();
        }else{
            $('.budget_value').hide();
            $('.movement_price').hide();
        }
    });
    // Registo do cliente com js
    $('.new_customer_send_form').click(function (e) {
        event.preventDefault();

        var form = document.getElementById("new_customer");
        var actionUrl = form.getAttribute('action');
        
        const data = {
            remote: true,
            customer: {
                name: $('#customer_name').val(),
                email: $('#customer_email').val(),
                nif: $('#customer_nif').val(),
                primary_phone: $('#customer_primary_phone').val(),
                secundary_phone: $('#customer_secundary_phone').val(),
                kind: $('#customer_kind').val()
            }
        };
        $.ajax({
            type: "POST",
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            url: actionUrl + '.json',
            data: data,
            success:function(data){
                // Preencher o campo cliente
                if (data){
                    $('#service_calendar_customer_id')
                    .find('option')
                    .end()
                    .append("<option value='" + data['id'] + "'>" + data['name'] + " " + data['primary_phone'] + "</option>")
                    .val(data['id']);
                    $('#business_visit_customer_id')
                    .find('option')
                    .end()
                    .append("<option value='" + data['id'] + "'>" + data['name'] + " " + data['primary_phone'] + "</option>")
                    .val(data['id']);
                }
                // console.log(data);
            },
            error: function (data) {
                // console.log(data);
            }
        });
    });
  }
};
