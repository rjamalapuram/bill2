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

  class InputNumberValueChangeChain3 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { value, key, index, current }) {
      const { $page, $flow, $application, $constants, $variables } = context;


      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;
      if($variables.contractSearchscreenRecords.data[index].retainageAmount < value){
        await Actions.fireNotificationEvent(context, {
          summary: 'Bill back Amount less than the Retainage Held',
        });

        return;

      }


           const existingAdjustment = $variables.adjustments.find(adj => adj.index === index && adj.EventTypeName === "Bill Retainage");
          if (existingAdjustment) {
      // If exists, update the `bill_transaction_amount` of the matching object
            existingAdjustment.BillTrnsAmount = value;
        } else {
       const callFunction = await this.createPayload(context, { arg1: $variables.contractSearchscreenRecords.data[index].contractNumber, arg2: $variables.contractSearchscreenRecords.data[index].contractItem, arg3: value, arg4: $variables.CompletionDate, arg5: $variables.contractSearchscreenRecords.data[index].projectNumber, arg6: index });
        $variables.functionReturn = callFunction;
        $variables.adjustments.push($variables.functionReturn );
        }
        console.log('----------------', $variables.adjustments); 
      
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     * @param {number} params.arg3 
     * @param {any} params.arg4 
     * @param {any} params.arg5 
     * @param {number} params.arg6 
     */
    async createPayload(context, { arg1, arg2, arg3, arg4, arg5, arg6 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
const uniqueSourceReference = Date.now(); 
      let payload = {
    "SourceName": "Workbench",
    "SourceReference": 'Workbench_source_'+uniqueSourceReference.toString(),
    "ContractTypeName": 'SFP Contract Type',
    "ContractNumber": arg1,
    "ContractLineNumber": arg2,
    "EventTypeName": "Bill Retainage",
    "EventDescription": "Bill Retainage",
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg3,
    "ProjectNumber":arg5,
    "CompletionDate":arg4,
    "index":arg6
};

return payload;
    }
  }

  return InputNumberValueChangeChain3;
});
