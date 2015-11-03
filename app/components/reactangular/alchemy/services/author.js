/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlAuthor', Author);

    Author.$inject = ['Alchemyapi', 'RectHelper'];

    function Author(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Author',
            url: url,
            html: html
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function url(params){
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.author.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(postData, params){
            var config = {
                endpointType: 'html',
                endpoint: RectHelper.alchemy.api.author.html,
                queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();