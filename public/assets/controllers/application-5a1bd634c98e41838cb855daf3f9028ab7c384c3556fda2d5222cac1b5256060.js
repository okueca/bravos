import { Application } from "@hotwired/stimulus"
import RailsNestedForm from '@stimulus-components/rails-nested-form'
import Notification from '@stimulus-components/notification'

const application = Application.start()
application.register('nested-form', RailsNestedForm)
application.register('notification', Notification)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application };
