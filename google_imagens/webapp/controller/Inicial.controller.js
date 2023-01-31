sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("googleimagens.controller.Inicial", {
            onInit: function () {
                this.produto = {
                    nome : "margarina",
                    marca : "doriana",
                    peso : 500,
                    uom : 'G',
                    estoque : 12,
                    adicionarEstoque : function(){
                        this.estoque++;
                        return this.estoque + ' Unidade em estoque';
                    }
                } 
            },
            onPressBuscar: function(){
               //instancia objeto input na variavel
               let inputBusca = this.byId("inpBusca");
               // coleta o valor digitado no input
               let query = inputBusca.getValue(); 
               //exibe na tela
               alert(query);
            }
        });
    });
