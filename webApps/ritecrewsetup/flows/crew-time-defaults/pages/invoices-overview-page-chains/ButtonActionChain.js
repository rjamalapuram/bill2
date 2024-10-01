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

  class ButtonActionChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callFunctionResult = await this.formBillingPayload(context, { arg1: $page.variables.source_name, arg2: $page.variables.sourceReference, arg3: $page.variables.contractTypeName, arg4: $page.variables.contract_number, arg5: $page.variables.contract_line_number, arg6: $page.variables.BillTrnsAmount, arg7: $page.variables.eventTypeName, arg8: $page.variables.eventDescription, arg9: $page.variables.businessUnit, arg10: $page.variables.project_number, arg11: $page.variables.taskNumber });

      $page.variables.payload = callFunctionResult;

      const callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'createProjectBillingEvent/post11_13_18_05ProjectBillingEvents',
        body: callFunctionResult,
      });



      $page.variables.eventId = callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult.body.EventId;

      const callFunction2Result = await this.createEventOrds(context, { arg1: $page.variables.source_name, arg2: $page.variables.sourceReference, arg3: $page.variables.contractTypeName, arg4: $page.variables.contractNumberDialog, arg5: $page.variables.contract_line_number, arg6: $page.variables.eventTypeName, arg7: $page.variables.eventDescription, arg8: $page.variables.businessUnit, arg9: $page.variables.BillTrnsAmount });

      const callRestGetBillingDetailsByContractNumberPostBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'getBillingDetailsByContractNumber/postBillingEvents',
        body: callFunction2Result,
      });

      const callFunction3Result = await this.putEventId(context, { arg1: $page.variables.eventId, arg2: $page.variables.sourceReference });

      const callRestGetBillingDetailsByContractNumberPutGetBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'getBillingDetailsByContractNumber/putGetBillingEvents',
        body: callFunction3Result,
      });

      const callRestGetBillingDetailsByContractNumberGetGetBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'getBillingDetailsByContractNumber/getGetBillingEvents',
        uriParams: {
          'p_contract_number': $page.variables.contract_number,
        },
      });

      $page.variables.pendingAdjustmentsADP.data = callRestGetBillingDetailsByContractNumberGetGetBillingEventsResult.body.items;

      const callComponentMethodAdjustmentTableRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#adjustmentTable',
        method: 'refresh',
      });

      $page.variables.showGenerateInvoice = true;

      const callComponentMethodOjDialog7166338151CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-716633815-1',
        method: 'close',
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {any} params.arg2 
     * @param {any} params.arg3 
     * @param {any} params.arg4 
     * @param {any} params.arg5 
     * @param {number} params.arg6 
     * @param {any} params.arg7 
     * @param {any} params.arg8 
     * @param {any} params.arg9 
     * @param {string} params.arg10 
     * @return {object} 
     */
    async formBillingPayload(context, { arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10 }) {
      const { $page, $flow, $application } = context;
      let payload = {
"SourceName":arg1,
"SourceReference":arg2,
"ContractTypeName": arg3,
"ContractNumber": arg4,
"ContractLineNumber":arg5,
"BillTrnsAmount": arg6,
"EventDescription":arg7,
"EventTypeName":arg8,
"BusinessUnitName":arg9,
"CompletionDate":arg10
};
return payload;

    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.arg1 
     * @param {any} params.arg2 
     * @param {any} params.arg3 
     * @param {any} params.arg4 
     * @param {any} params.arg5 
     * @param {any} params.arg6 
     * @param {any} params.arg7 
     * @param {any} params.arg8 
     * @param {number} params.arg9 
     * @return {object} 
     */
    async createEventOrds(context, { arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 }) {
      const { $page, $flow, $application } = context;
           let payload = {
            "p_source_name": arg1,
            "p_source_reference": arg2,
            "p_contract_type_name": arg3,
            "p_contract_number": arg4,
            "p_contract_line_number": arg5,
            "p_event_type_name": arg6,
            "p_event_description": arg7,
            "p_business_unit_name": arg8,
            "p_bill_trns_amount":arg9
        };
console.log(payload);
return payload;
    
    }

        /**
         * @param {Object} context
         * @param {Object} params
         * @param {number} params.arg1 
         * @param {any} params.arg2 
         * @return {object} 
         */
        async putEventId(context, { arg1, arg2 }) {
      const { $page, $flow, $application } = context;
           let payload = {
            "p_event_id":arg1,
            "p_source_reference": arg2
        };
console.log(payload);
return payload;
    
    }
  }

  return ButtonActionChain;
});
