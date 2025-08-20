import { Application, Controller } from '@hotwired/stimulus';
import ListController from './controllers/list_controller.js'
import ListItemController from './controllers/list_item_controller.js'

window.Stimulus = Application.start()
Stimulus.register('list', ListController)
Stimulus.register('list-item', ListItemController)
