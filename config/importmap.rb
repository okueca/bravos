# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "stimulus-rails-nested-form", to: "https://ga.jspm.io/npm:stimulus-rails-nested-form@4.1.0/dist/stimulus-rails-nested-form.mjs"
pin "jquery", to: "jquery.min.js", preload: true
pin "jquery_ujs", to: "jquery_ujs.js", preload: true
pin "jquery-ui", to: "jquery-ui.min.js", preload: true
pin "select2", to: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"
pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "apexcharts", to: "https://ga.jspm.io/npm:apexcharts@3.41.0/dist/apexcharts.common.js"
pin "@rails/ujs", to: "https://cdn.jsdelivr.net/npm/@rails/ujs@6.1.4/lib/assets/compiled/rails-ujs.js"
pin "popper", to: 'popper.js', preload: true
pin "moment", to: "https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.js"
pin "toastify-js", to: "https://ga.jspm.io/npm:toastify-js@1.12.0/src/toastify.js"
pin_all_from "app/javascript/controllers", under: "controllers"