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

      const callFunctionResult = await this.createGenrateInvoicePayload(context, { arg1: $page.variables.buName, arg2: '300000301911646', arg3: $page.variables.contractId, arg4: $page.variables.contractNumber });

      const callRestGenerateDraftInvoiceGet11131805ErpintegrationsResult = await Actions.callRest(context, {
        endpoint: 'GenerateDraftInvoice/get11_13_18_05Erpintegrations',
        body: callFunctionResult,
      });

      await Actions.fireNotificationEvent(context, {
        summary: 'Draft invoice request processed with Request ID : '+callRestGenerateDraftInvoiceGet11131805ErpintegrationsResult.body.ReqstId,
        type: 'confirmation',
      });

      const callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getCONTRACT_AND_LINE_DETAILS1_0GetContractAndLineDetails',
        uriParams: {
          'p_contract_number': $page.variables.contractNumber,
          'p_line_number': $page.variables.lineNumberDialog,
        },
      });

      $page.variables.contract_id_for_update = 'callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult.body.contractId';
      $page.variables.lineIdForUpdate = 'callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult.body.lineId';

      const retPayload = await this.dffPayload(context);

      const callRestIcsEndpointPostINSERTDFFS10InsertDFFValuesResult = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/postINSERTDFFS1_0InsertDFFValues',
        body: retPayload,
      });

      if (!callRestIcsEndpointPostINSERTDFFS10InsertDFFValuesResult.ok) {
        if (true) {
          await Actions.fireNotificationEvent(context, {
            summary: 'Please Try Again',
          });
        }
      
        return;
      }
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     * @param {string} params.arg3 
     * @param {string} params.arg4 
     */
    async createGenrateInvoicePayload(context, { arg1, arg2, arg3, arg4 }) {
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

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     */
    async dffPayload(context, { arg1, arg2 }) {
      const { $page, $flow, $application } = context;
     let payload={
  "mode": "Calc",
  "maxRetention": 100,
  "projectCompletionThresholdPercentage": 50,
  "contract_id": arg1,
  "contract_line_id": arg2,
  "retentionPercentage": 10
};
return payload;
    }
  }

  return ButtonActionChain3;
});
