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

  class ButtonActionChain6 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callRestIcsEndpointGetGENERATEAIAREPORT10GetG702Report2Result = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getGENERATE_AIA_REPORT1_0GetG702Report2',
        uriParams: {
          'p_contract_number': $page.variables.contract_number,
          'p_period_name': 'JUL-24',
        },
      });

      await $page.functions.downloadFileNew(callRestIcsEndpointGetGENERATEAIAREPORT10GetG702Report2Result.body.fileBase64Content, $page.variables.contract_number + '.pdf', 'application/pdf');
}
    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.content 
     * @param {string} params.fileName 
     * @param {string} params.mimeType 
     */
  
/*
    
    async downloadFile(context, { content, fileName, mimeType }) {
      const { $page, $flow, $application } = context;
    

      let blob;
      blob = this.base64ToArrayBuffer(content);

      const file = new Blob([blob],{type:mimeType});

      const fileUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.gref = fileUrl;
      link.download =fileName;
      link.click();
      
    }*/

    


  }

  return ButtonActionChain6;
});
