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

  class ButtonActionChain9 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const response = await Actions.callRest(context, {
        endpoint: 'getContracts/getCOM_SUMMIT_SUMMIT_ALLGENERATE_AIA_REPORT_SUMMIT1_0GetG702Report',
        uriParams: {
          'p_contract_number': $variables.contractNumber,
          'p_period_name': 'Sep-24',
        },
      });

      const callFunction = await this.downloadFileNew(context, { base64: response.body.fileBase64Content, fileName: $variables.contractNumber, mimeType: 'application/pdf' });
    }

    /**
     * @param {Object} context
     */
    async downloadFileNew(context,{base64 ,fileName, mimeType}) {
      const { $page, $flow, $application, $constants, $variables } = context;
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

  return ButtonActionChain9;
});
