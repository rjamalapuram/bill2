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
      const { $page, $flow, $application } = context;

      $page.variables.EventTypeName = 'Bill Retainage';
      $page.variables.EventDescription = 'AIA Bill Retainage';
      $page.variables.BusinessUnitName = 'Oak USA BU1';
      $page.variables.ContractTypeName = 'OAK_Contract';
      $page.variables.CompletionDate = undefined;

      // ---- TODO: Add your code here ---- //
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;

      if ($page.variables.availableRetainageAmount<$page.variables.billTrnsAmount) {
        await Actions.fireNotificationEvent(context, {
          summary: 'Please enter a transaction amount which is less than the Available retainage amount ',
        });

        return;
      }

      const callFunctionResult = await this.createBillingEventPayload(context, { arg1: $page.variables.SourceName, arg2: $page.variables.SourceReference, arg3: $page.variables.ContractTypeName, arg4: $page.variables.dialogContractNumber, arg5: $page.variables.dialogContractLineNumber, arg6: $page.variables.EventTypeName, arg7: $page.variables.EventDescription, arg9: $page.variables.CompletionDate, arg10: $page.variables.billTrnsAmount, arg8: $page.variables.BusinessUnitName });

      const callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult = await Actions.callRest(context, {
        endpoint: 'createProjectBillingEvent/post11_13_18_05ProjectBillingEvents',
        body: callFunctionResult,
      });

      await Actions.fireNotificationEvent(context, {
        summary: 'Created Billing Event : '+callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult.body.EventNumber,
        type: 'confirmation',
        displayMode: 'transient',
      });

      if (!callRestCreateProjectBillingEventPost11131805ProjectBillingEventsResult.ok) {
        if (true) {
          await Actions.fireNotificationEvent(context, {
            summary: 'Please Try Again',
          });

          const callComponentMethodOjDialog10222942191CloseResult = await Actions.callComponentMethod(context, {
            selector: '#oj-dialog--1022294219-1',
            method: 'close',
          });
        }
      
        return;
      }

      $page.variables.generateInvoice = false;
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     * @param {string} params.arg3 
     * @param {string} params.arg4 
     * @param {string} params.arg5 
     * @param {string} params.arg6 
     * @param {string} params.arg7 
     * @param {string} params.arg8 
     * @param {string} params.arg9 
     * @param {number} params.arg10 
     * @return {payload} 
     */
    async createBillingEventPayload(context, { arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10 }) {
      const { $page, $flow, $application } = context;
      let payload = {
"SourceName": arg1,
"SourceReference":arg2,
"ContractTypeName":arg3,
"ContractNumber": arg4,
"ContractLineNumber": arg5,
"EventTypeName": arg6,
"EventDescription": arg7,
"BusinessUnitName":arg8,
"CompletionDate":arg9,
"BillTrnsAmount": arg10
};
return payload;
    
    }
  }

  return ButtonActionChain1;
});
