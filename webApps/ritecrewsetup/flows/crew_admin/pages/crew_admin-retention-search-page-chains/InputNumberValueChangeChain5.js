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

  class InputNumberValueChangeChain5 extends ActionChain {

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

      $variables.values[index] = value;
      console.log($variables.values);

      
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;

      if ((value-$variables.contractSearchscreenRecords.data[index].amountToBillThisPeriod)!==0) {
          const existingAdjustment = $variables.adjustments.find(adj => adj.index === index && adj.EventTypeName === "Retention Withhold");
          if (existingAdjustment) {
      // If exists, update the `bill_transaction_amount` of the matching object
            existingAdjustment.BillTrnsAmount = value - $variables.contractSearchscreenRecords.data[index].amountToBillThisPeriod;
        } else {
        const callFunction = await this.createPayload(context, { arg1: $variables.contractSearchscreenRecords.data[index].contractNumber, arg2: $variables.contractSearchscreenRecords.data[index].contractItem, arg3: value-$variables.contractSearchscreenRecords.data[index].amountToBillThisPeriod, arg4: $variables.CompletionDate, arg5: $variables.contractSearchscreenRecords.data[index].projectNumber, arg6: index });
        $variables.functionReturn = callFunction;
        $variables.adjustments.push($variables.functionReturn );
        }
        $variables.totalAmountToBill = $variables.totalAmountToBill+(value-$variables.contractSearchscreenRecords.data[index].amountToBillThisPeriod);

        console.log('----------------', $variables.adjustments);
      }
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.arg1 
     * @param {any} params.arg2 
     * @param {number} params.arg3 
     * @param {any} params.arg4 
     * @param {any} params.arg5 
     * @param {number} params.arg6 
     * @return {object} 
     */
    async createPayload(context, { arg1, arg2, arg3, arg4, arg5, arg6 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
      const uniqueSourceReference = Date.now(); 
       let payload = {
"SourceName": "Rest_new_adjustment",
"SourceReference":"Rest_new_adjustment"+uniqueSourceReference.toString(),
"ContractTypeName":"SFP Contract Type",
    "ContractNumber": arg1,
    "ContractLineNumber": arg2,
    "EventTypeName": "Retention Withhold",
    "EventDescription": "Retention Withhold",
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg3,
    "ProjectNumber":arg5,
    "CompletionDate":arg4,
    "index":arg6
};
return payload;
    }
  }

  return InputNumberValueChangeChain5;
});
