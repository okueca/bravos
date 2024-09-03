import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="service-calendar-close"
export default class extends Controller {
  connect() {
    calc_total_product();
    calc_total();
    // Calculo en tempo real do preco total de cada Produto de embalamento
    $(".product_price").on("keyup",function(){
      var cod_product = $(this).data("product"); 
      var product_qtd = parseInt($(this).val());
      var product_price = parseFloat($(this).data("price"));
      if(isNaN(product_qtd*product_price)) {
        $("#"+cod_product).text(0);
      }else{
        $("#"+cod_product).text(product_qtd*product_price);
      }
      calc_total_product();
      calc_total();
    });
    // Calcular o total do meterial de embalamento
    function calc_total_product(){
      var total_price_of_materials = 0;
      $(".sub_total").each(function(){
        total_price_of_materials += parseFloat($(this).text());
      });

      $('#total_material_prices').text(total_price_of_materials);
    }
    // Calcular o total com e sem iva soma do service.price e total de materiais
    function calc_total(){
      var price_of_service = parseFloat($("#service_price").text());
      var price_of_movement = parseFloat($("#movement_price").text());
      var total_price_of_materials = parseFloat($("#total_material_prices").text());
      var service_hours = parseInt($("#service_hours").text());
      var service_budget_by_hour = Boolean($("#service_hours").data("payment-by-hour"));
      if(service_budget_by_hour==true){
        price_of_service=price_of_service*service_hours;
      }else{
        price_of_movement=0;
        total_price_of_materials=0;
      }
      
      if(isNaN(price_of_movement)) {
        price_of_movement=0;
      }
      var total = price_of_service+price_of_movement+total_price_of_materials;
      total = Math.floor(total * 100) / 100;
      total = total.toFixed(2);
      var total_with_iva = parseFloat(total)+parseFloat(total*0.23);
      total_with_iva= Math.floor(parseFloat(total_with_iva) * 100) / 100;
      total_with_iva= total_with_iva.toFixed(2);
      $('#total_without_iva').text(total);
      $("#service_calendar_close_finalPrice").val(total);
      $('#total_with_iva').text(total_with_iva);
    }

  }
}
