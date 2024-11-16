// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "controllers"
import Rails from "@rails/ujs"

import moment from 'moment'
window.moment = moment

Rails.start();
