// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "controllers"
import * as Rails from "@rails/ujs";

import * as moment from 'moment';
window.moment = moment

Rails.start()
