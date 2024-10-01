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

  class ButtonActionChain2 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callFunctionResult = await this.createBillingPayload(context, { arg1: $page.variables.SourceName, arg2: $page.variables.sourceRef, arg3: $page.variables.contractTypeName, arg4: $page.variables.contractNumber, arg5: $page.variables.lineNumberDialog, arg6: $page.variables.eventTypeName, arg7: $page.variables.eventDescription, arg8: $page.variables.buName, arg9: $page.variables.completionDate, arg10: $page.variables.billTrnsAmount });

      const callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'createProjectBillingEvent/post11_13_18_05ProjectBillingEvents',
        body: callFunctionResult,
      });

      if (callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult.ok) {
         await Actions.fireNotificationEvent(context, {
           summary: 'Billing Event: '+callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult.body.EventNumber,
           displayMode: 'transient',
           type: 'confirmation',
         });
      
        return;
      }

    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     */
    async createBillingPayload(context, { arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10 }) {
      const { $page, $flow, $application } = context;
   let payload =  {
"SourceName": arg1,
"SourceReference": arg2,
"ContractTypeName": arg3,
"ContractNumber": arg4,
"ContractLineNumber": arg5,
"EventTypeName": arg6,
"EventDescription": arg7,
"BusinessUnitName":arg8,
"CompletionDate":arg9,
"BillTrnsAmount": arg10
};
console.log('-----------',payload);
return payload;
    }

  }

  return ButtonActionChain2;
});
