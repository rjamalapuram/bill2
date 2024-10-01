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

  class ButtonActionChain3 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callFunctionResult = await this.createPayload(context, { arg1: $flow.variables.bu, arg3: $flow.variables.contract_id_selected, arg4: $page.variables.contract_number, arg2: $flow.variables.flow_bu_id });

      const callRestGenerateDraftInvoiceGet11131805ErpintegrationsResult = await Actions.callRest(context, {
        endpoint: 'GenerateDraftInvoice/get11_13_18_05Erpintegrations',
        body: callFunctionResult,
      });

      if (!callRestGenerateDraftInvoiceGet11131805ErpintegrationsResult.ok) {
        await Actions.fireNotificationEvent(context, {
          summary: 'Rest API Error',
          displayMode: 'transient',
        });
      
        return;
      }

      $page.variables.requestId = callRestGenerateDraftInvoiceGet11131805ErpintegrationsResult.body.ReqstId;

      await Actions.fireNotificationEvent(context, {
        type: 'confirmation',
        displayMode: 'persist',
        summary: "Generate Invoice Process Scheduled with request id: "+ $page.variables.requestId,
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     */
    async createPayload(context, { arg1 , arg2, arg3, arg4}) {
      const { $page, $flow, $application } = context;
     let payload = {
        "OperationName": "submitESSJobRequest",
        "JobPackageName": "/oracle/apps/ess/projects/billing/workarea/invoice/",
        "JobDefName": "InvoiceGenerationJob",
        "ESSParameters": `${arg1},${arg2},EX,Y,Y,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,${arg3},${arg4},#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,#NULL,N,#NULL,#NULL,#NULL,#NULL,#NULL,Y,DETAIL,N,#NULL,#NULL,#NULL,ALL,1,#NULL,#NULL`
    };

    console.log('ESS',payload);
    return payload;

    }
  }

  return ButtonActionChain3;
});
