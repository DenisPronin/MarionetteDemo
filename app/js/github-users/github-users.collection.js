import userModel from './github-users.model.js';

export default Backbone.Collection.extend({
    url : 'https://api.github.com/users',
    model : userModel,
});
