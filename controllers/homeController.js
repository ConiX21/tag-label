var HomeController = function () {
    var index = function (request, response) {
        response.title = 'Hello World my love';
        response.layout = 'main';
        response.render('home/index', response);
    };

    var result = function (request, response) {
        response.title = 'Hello World my love';
        response.layout = 'layout';
        response.render('home/result', response);
    };

    return {
        index: index, result : result
    }
}();

exports.Index = HomeController.index;
exports.Result = HomeController.result;
// exports.Other = function (request, response) {
//     response.render('home/Other');
// };
