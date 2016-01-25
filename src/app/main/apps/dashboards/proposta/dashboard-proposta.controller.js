   /**
     * Proposta
     */
    function Proposta(id, seguro, titular, menor, 
            condutorPrincipal, veiculo, cobertura,
            situacao, dtVigencia, isTransmitida){
        this.id = id;
        this.seguro = seguro;
        this.titular = titular;
        this.menor = menor;
        this.condutorPrincipal = condutorPrincipal;
        this.veiculo = veiculo;
        this.cobertura = cobertura;
        this.situacao = situacao;
        this.dtVigencia = dtVigencia;
        this.isTransmitida = isTransmitida;
    }

    /**
     * Situacao da Proposta
     */
    function SituacaoProposta(id, nome){
        this.id = id;
        this.nome = nome;
    }
    
    function Tipo(id, nome){
        this.id = id;
        this.nome = nome;
    }

    /**
     * Seguro
     */ 
    function Seguro(id, tipo, ci, seguradora, dtVigenciaDe, dtVigenciaAte, apolice, bonus, isSinistro){
        this.id = id;
        this.tipo = tipo;
        this.ci = ci;
        this.seguradora = seguradora;
        this.dtVigenciaDe = dtVigenciaDe;
        this.dtVigenciaAte = dtVigenciaAte;
        this.apolice = apolice;
        this.bonus = bonus;
        this.isSinistro = isSinistro;
    }

    /**
     * Pessoa
     **/
    function Pessoa(id, nome, dtEmissao, dtNascimento, sexo, orgEmissor,  
            profissao, estadoCivil, endereco, cep, bairro, cidade, telefone, email, 
            habilitacao, dtValidade, dtPrimeiraHabilitacao){
        this.id = id;
        this.nome = nome;
        this.rg = rg;
        this.dtEmissao = dtEmissao;
        this.dtNascimento = dtNascimento;
        this.sexo = sexo;
        this.orgEmissor = orgEmissor;
        this.profissao = profissao;
        this.estadoCivil = estadoCivil;
        this.endereco = endereco;
        this.cep = cep;
        this.bairro = bairro;
        this.cidade = cidade;
        this.telefone = telefone;
        this.email = email;
        this.habilitacao = habilitacao;
        this.dtValidade = dtValidade;
        this.dtPrimeiraHabilitacao = dtPrimeiraHabilitacao;
    }

    /**
     * Titular
     */
    function Titular(id, pessoa, isGaragem, dadosBancarios, isCondutorPrincipal){
        this.id = id;
        this.pessoa = pessoa;
        this.isGaragem = isGaragem;
        this.dadosBancarios = dadosBancarios;
        this.isCondutorPrincipal = isCondutorPrincipal;
    }

    /**
     * Menor
     */
    function Menor(id, pessoa){
        this.id = id;
        this.pessoa = pessoa;
    }

    /**
     * Dados Bancarios
     */
    function DadosBancarios(id){
        this.id = id;
        this.nomeBanco = nomeBanco;
        this.agencia = agencia;
        this.dvAgencia = dvAgencia;
        this.conta = conta;
        this.dvConta = dvConta;
    }

    /**
     * Dados do Condutor Principal
     */
    function CondutorPrincipal(id, pessoa, perfil){
        this.id = id;
        this.pessoa = pessoa;
        this.perfil = perfil;
    }

    /**
     * Perfil do Condutor Principal
     */
    function Perfil(id, enderecoTrabalho, isGaragem, cep, cidade, uf){
        this.id = id;
        this.enderecoTrabalho = enderecoTrabalho;
        this.isGaragem = isGaragem;
        this.cep = cep;
        this.cidade = cidade; 
        this.uf = uf;
    }

    /**
     * Dados do Veículo
     */
    function Veiculo(id, fabricante, fipe, modelo, anoFabricacao, combustivel,
            cor, cambio, placa, chassi, renavan, situacao, banco){
        this.id = id;
        this.fabricante = fabricante;
        this.fipe = fipe;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.combustivel = combustivel;
        this.cor = cor;
        this.cambio = cambio;
        this.placa = placa;
        this.chassi = chassi;
        this.renavan = renavan;
        this.situacao = situacao;
        this.banco = banco;
    }

    /**
     * Dados da Cobertura
     */
    function Cobertura(id, danosMateriais, danosPessoais, app, isAssistencia, assistenciaKm,
            isCarroReserva, prazoCarroReserva, isProtecaoVidros, isParabrisa,
            isTraseiro, isLaterais, isFarois, isLanterna, isRetrovisores, kmPorMes){
        this.id = id;
        this.danosMateriais = danosMateriais;
        this.danosPessoais = danosPessoais;
        this.app = app;
        this.isAssistencia = isAssistencia;
        this.assistenciaKm = assistenciaKm;
        this.isCarroReserva = isCarroReserva;
        this.prazoCarroReserva = prazoCarroReserva;
        this.isProtecaoVidros = isProtecaoVidros;
        this.isParabrisa = isParabrisa;
        this.isTraseiro = isTraseiro;
        this.isLaterais = isLaterais;
        this.isFarois = isFarois;
        this.isLanterna = isLanterna;
        this.isRetrovisores = isRetrovisores;
        this.kmPorMes = kmPorMes;
    }


(function ()
{
    'use strict';

    angular
        .module('app.dashboards.proposta')
        .controller('PropostaController', PropostaController);

    /** @ngInject */
    function PropostaController($mdDialog)
    {
        var vm = this;

        // Data
        var nova = new Proposta();

        vm.basicForm = {};
        vm.formWizard = {
            title: 'Proposta de Seguro'
        };

        vm.formWizard.tipoSeguroList = ('Novo Renovação').split(' ').map(function (tipo)
        {
            return {nome: tipo};
        });

        vm.formWizard.tipoSeguroList.selectedIndex = 1;
        vm.formWizard.seguradoraList = ('Bradesco Seguros;Porto Seguros;Itaú Seguros;Azul Seguros').split(';').map(function (tipo)
        {
            return {nome: tipo};
        });

        vm.formWizard.houveSinistro = ('Sim Não').split(' ').map(function (houve)
        {
            return {nome: houve};
        });

        vm.formWizard.estadoCivilList = ('Casado Solteiro').split(' ').map(function (estadoCivil)
        {
            return {nome: estadoCivil};
        });

        vm.formWizard.sexoList = ('Masculino Feminino').split(' ').map(function (sexo)
        {
            return {nome: sexo};
        });

        vm.formWizard.situacaoList = ('Quitado Financiado').split(' ').map(function (situacao)
        {
            return {nome: situacao};
        });

        // Methods
        vm.sendForm = sendForm;

        //////////

        /**
         * Send form
         */
        function sendForm(ev)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }
    }
})();