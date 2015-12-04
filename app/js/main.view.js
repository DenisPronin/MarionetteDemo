import template from './main.tpl.hbs';

export default Marionette.LayoutView.extend({
    el: '#content',
    template: template,

    regions: {
        content: '.app__content'
    }
});