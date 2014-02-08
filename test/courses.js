/**
 * Created by ramos on 08/02/14.
 */
var db = require('../utils/connection.js'),
    assert = require('assert')
    constants = require('../utils/constants.js');


//List courses
describe("listCourses",function() {

    it("Get all courses", function() {
        var _connection = db.get;
        _connection.query(constants.SELECT_COURSES_ORDENED,

            function(err, rows, fields) {
                assert.greaterThan(rows.length, 0);

            }
        );

    });

});

