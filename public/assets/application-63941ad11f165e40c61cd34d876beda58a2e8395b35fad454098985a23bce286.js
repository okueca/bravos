// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

import "controllers"
import Rails from "@rails/ujs"
import "popper"
import "bootstrap"
import "chartkick"
import "Chart.bundle"
import "jquery"

import moment from 'moment'
window.moment = moment

Rails.start();
