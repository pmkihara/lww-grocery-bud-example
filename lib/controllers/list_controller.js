import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "itemsList"];

  addItem(event) {
    event.preventDefault();
    this.addToList(this.inputTarget.value);
    this.inputTarget.value = "";
  }

  addToList(itemName) {
    const tag = `
      <li class="list-group-item d-flex justify-content-between align-items-center" data-controller="list-item">
        <div data-list-item-target="itemName">${itemName}</div>
        <input type="text" class="form-control d-none" value="${itemName}" data-list-item-target="editForm">
        <button type="button" class="btn btn-sm btn-light d-none" data-list-item-target="saveBtn" data-action="click->list-item#saveItem">Save</button>

        <div data-list-item-target="controls">
          <button type="button" class="btn btn-sm btn-light" data-action="click->list-item#editItem">edit</button>
          <button type="button" class="btn btn-sm btn-danger" data-action="click->list-item#deleteItem">remove</button>
        </div>
      </li>
    `;
    this.itemsListTarget.insertAdjacentHTML("beforeend", tag);
  }
}
