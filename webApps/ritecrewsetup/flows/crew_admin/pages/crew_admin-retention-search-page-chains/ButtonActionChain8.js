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

  class ButtonActionChain8 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const callFunction = await this.createInvoicePayload(context);

      const response = await Actions.callRest(context, {
        endpoint: 'Saas_Summit/postFscmRestApiResources11_13_18_05Erpintegrations',
        body: callFunction,
      });

      if (!response.ok) {
        await Actions.fireNotificationEvent(context, {
          summary: 'Error while trying to generate Invoice',
        });
      
        return;
      }

      await Actions.fireNotificationEvent(context, {
        summary: 'Process Scheduled with request Id: '+response.body.ReqstId,
        type: 'confirmation',
      });
    }

    /**
     * @param {Object} context
     */
    async createInvoicePayload(context) {
      const { $page, $flow, $application, $constants, $variables } = context;
      let payload = {
        "OperationName": "submitESSJobRequest",
        "JobPackageName": "/oracle/apps/ess/projects/billing/workarea/invoice/",
        "JobDefName": "InvoiceGenerationJob",
        "ESSParameters": 'SFP,300000003891751,EX,Y,Y,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,N,#NULL,#NULL,#NULL,#NULL,#NULL,Y,DETAIL,N,#NULL,#NULL,#NULL,ALL,1,#NULL,#NULL'
    };
    return payload;
    }
  }

  return ButtonActionChain8;
});
