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

  class ButtonActionChain1 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $variables } = context;

      const callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult = await Actions.callRest(context, {
        endpoint: 'getContracts/getCONTRACT_AND_LINE_DETAILS1_0GetContractAndLineDetails',
        uriParams: {
          'p_contract_number': $variables.contractNumber,
          'p_line_number': $variables.contractLineIdDialog,
        },
      });

      $page.variables.dialogContractId = callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult.body.contractId;
      $page.variables.dialogLineId = callRestIcsEndpointGetCONTRACTANDLINEDETAILS10GetContractAndLineDetailsResult.body.lineId;

      const callFunctionResult = await this.createInsertDFFPayload(context, { arg1: $page.variables.maxRetValue, arg2: $page.variables.projectCompletionThreshold, arg3: $page.variables.dialogContractId, arg4: $page.variables.dialogLineId, arg5: $page.variables.retPercentage });

      const callRestIcsEndpointPostINSERTDFFS10InsertDFFValuesResult = await Actions.callRest(context, {
        endpoint: 'getContracts/postCOM_SUMMIT_SUMMIT_ALLINSERTDFFS_SUMMIT1_0InsertDFFValues',
        body: callFunctionResult,
      });

      await Actions.fireNotificationEvent(context, {
        summary: 'Contract Line DFF Updated and Amended Successfully',
        type: 'confirmation',
      });

      const callComponentMethodOjDialog2664976941CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-266497694-1',
        method: 'close',
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {number} params.arg1 
     * @param {number} params.arg2 
     * @param {string} params.arg3 
     * @param {string} params.arg4 
     * @param {number} params.arg5 
     */
    async createInsertDFFPayload(context, { arg1, arg2, arg3, arg4, arg5 }) {
      const { $page, $flow, $application } = context;
    let payload = {
  "mode": "Direct",
  "maxRetention": arg1,
  "projectCompletionThresholdPercentage": arg2,
  "contract_id": arg3,
  "contract_line_id": arg4,
  "retentionPercentage": arg5
};
console.log(payload);
return payload;
    }
  }

  return ButtonActionChain1;
});
