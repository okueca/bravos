import NestedForm from 'stimulus-rails-nested-form'

export default class extends NestedForm {

  static targets = [ "links", "template" ]
  
  connect() {

  }

  add_association(event) {
    event.preventDefault()
    console.log('Mais Um.----------------------')
    var content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime())
    this.linksTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_association(event) {
    event.preventDefault()

    let wrapper = event.target.closest(".nested-form-vehicles")
    if (wrapper.dataset.newRecord == "true") {
      wrapper.remove()
    } else {
      wrapper.querySelector("input[name*='_destroy']").value = 1
      wrapper.style.display = 'none'
    } 
  }
}
