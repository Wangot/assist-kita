/**
 * Created by gigadevs-jcc on 12/30/15.
 */

var _ = require('underscore');

function CoreObjectUtilities() {

}

_.extend(CoreObjectUtilities.prototype, {

    /*
     * Utility to for inheritance
     * @param {function object} Child - The object to inherit
     * @param {function object} Parent - The object to be inherited
     */
    inherit: function(Child, Parent) {

        Child.prototype = new Parent();
        Child.prototype.constructor = Child;
        Child.prototype.parent = Parent.prototype;

    },

});

module.exports = new CoreObjectUtilities();