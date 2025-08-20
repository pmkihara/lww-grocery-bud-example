import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['itemName', 'editForm', 'controls', 'saveBtn']

  deleteItem() {
    this.element.remove()
  }

  editItem() {
    this.controlsTarget.classList.add('d-none');
    this.itemNameTarget.classList.add('d-none');
    this.editFormTarget.classList.remove('d-none')
    this.saveBtnTarget.classList.remove('d-none')
  }

  saveItem() {
    this.controlsTarget.classList.remove("d-none");
    this.itemNameTarget.classList.remove("d-none");
    this.editFormTarget.classList.add("d-none");
    this.saveBtnTarget.classList.add("d-none");
    this.itemNameTarget.innerText = this.editFormTarget.value;
  }
}
