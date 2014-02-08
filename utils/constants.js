/**
 * Created by Diego Ramos on 06/02/14.
 */
constants = {
    SELECT_COURSES_ORDENED: 'SELECT name, duration_in_years FROM tbCourses ORDER BY name',
    SELECT_COURSES_UNORDENED: 'SELECT name, duration_in_years FROM tbCourses',

    server: {
        port: '12345'
    },

    header: {
        json: 'application/json; charset=utf-8;'
    },

    error: {
        generic: {error:'Ocorreu um erro durante o processamento'}
    },

    /*
     *  @see: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     */
    http: {
        ok:         {cod:200, msg:'OK'},
        noContent:  {cod:204, msg:'No Content'},
        notFound:   {cod:404, msg:'Not Found'},
        internalError:   {cod:500, msg:'Erro interno'}
    }

}

module.exports = constants;