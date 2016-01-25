(function ()
{
    'use strict';

    angular
        .module('app.dashboards.proposta', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_proposta', {
            url      : '/dashboard-proposta',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/proposta/dashboard-proposta.html',
                    controller : 'PropostaController as vm'
                }
            },
            bodyClass: 'forms'
        });
    }

})();