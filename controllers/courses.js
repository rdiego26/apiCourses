/**
 * Created by dramos on 02/12/13.
 */
var _  = require('underscore');
var constants = require('../utils/constants');
var connection = require('../utils/connection');

var _result = {status:{}, date:new Date(), data:[]};

exports.getData = function(req, res, callback) {

    //Reset previous data
    _result.data = [];

    var _connection = connection.get;
    var _query = constants.SELECT_COURSES_ORDENED;

    //Decide query to use
    if(req.params.years) {

        try {
            _query = constants.SELECT_COURSES_UNORDENED + ' WHERE duration_in_years <= ' + parseInt(req.params.years);
        } catch(ex) {
            _query = constants.SELECT_COURSES_ORDENED;
        }
    }

    _connection.query(_query,

        function(err, rows, fields) {

            if(err) {

                _result.status = constants.http.internalError;
                _result.data = []; _result.data.push(err);
                res.writeHead(_result.status);
                callback(req, res);


            } else {

                _result.status = constants.http.ok;

                //Populate object
                _.each(rows, function(d) {
                    _result.data.push(d);
                });

                callback(req, res);

            }

        }
    );


}

exports.setData = function(req, res) {

    res.end( JSON.stringify(_result) );

}

/*
courses = {

    connection: require('../utils/connection'),

    getData: function(req, res, callback) {

        //Reset previous data
        _result.data = [];

        var _connection = courses.connection.get;
        var _query = constants.SELECT_COURSES_ORDENED;

        //Decide query to use
        if(req.params.years) {

            try {
                _query = constants.SELECT_COURSES_UNORDENED + ' WHERE duration_in_years <= ' + parseInt(req.params.years);
            } catch(ex) {
                _query = constants.SELECT_COURSES_ORDENED;
            }
        }

        _connection.query(_query,

            function(err, rows, fields) {

                if(err) {

                    _result.status = constants.http.internalError;
                    _result.data = []; _result.data.push(err);
                    res.writeHead(_result.status);
                    callback(req, res);


                } else {

                    _result.status = constants.http.ok;

                    //Populate object
                    _.each(rows, function(d) {
                        _result.data.push(d);
                    });

                    callback(req, res);

                }

            }
        );
    },

    setData: function(req, res) {

        if(_result.data.length <= 0) {
            console.log('courses: Não foram obtidos dados, mantendo dados antigos.');
            _result.status = constants.http.noContent;
            _result.data = undefined;
        } else {
            console.log('courses: Atualizando dados');
        }

        res.end( JSON.stringify(_result) );

    }

}

module.exports = courses
 */