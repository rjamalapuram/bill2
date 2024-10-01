define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class ButtonActionChain5 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callRestIcsEndpointGetGENERATEAIAREPORT10GetG702Report2Result = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getGENERATE_AIA_REPORT1_0GetG702Report2',
        uriParams: {
          'p_contract_number': $page.variables.contractNumber,
          'p_period_name': 'JUL-24',
        },
      });

      const callFunctionResult = await this.downloadFileNew(context);
    }

    /**
     * @param {Object} context
     */
    async downloadFileNew(context) {
      const { $page, $flow, $application } = context;

      var binaryString = window.atob(base64);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      var blob = new Blob([bytes], { type: mimeType });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName + '.pdf';
      link.click();

    }
    
    }

    /**
     * @param {Object} context
     */


      /**
       * @param {Object} context
       * @param {Object} params
       * @param {string} params.base64 
       * @param {string} params.fileName 
       * @param {string} params.mimeType 
       */

  }

  return ButtonActionChain5;
});
