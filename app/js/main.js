import Router from './router/router';
import LayoutView from './main.view';


let Application = Marionette.Application.extend({
    initialize(options) {
        this.layout = new LayoutView();
        this.layout.render();
    }
});

let app = new Application();

const router = new Router();

Backbone.history.start();
