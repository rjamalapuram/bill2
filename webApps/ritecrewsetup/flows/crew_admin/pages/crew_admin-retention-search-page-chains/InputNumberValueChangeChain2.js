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

  class InputNumberValueChangeChain2 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { value, key, index, current }) {
      const { $page, $flow, $application, $variables } = context;

      $variables.storedMaterials[index] = value;

      $variables.totalStoredMaterials = $variables.totalStoredMaterials + value;

   const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;

       const existingAdjustment = $variables.adjustments.find(adj => adj.index === index && adj.EventTypeName === "Stored Material");
          if (existingAdjustment) {
      // If exists, update the `bill_transaction_amount` of the matching object
            existingAdjustment.BillTrnsAmount = value;
        } else {
        const callFunction = await this.createPayload(context, { arg1: $variables.contractSearchscreenRecords.data[index].projectNumber, arg2: $variables.contractSearchscreenRecords.data[index].contractNumber, arg3: $variables.contractSearchscreenRecords.data[index].contractItem, arg4: $variables.CompletionDate, arg5: value, arg6: index });
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
     * @param {string} params.arg3 
     * @param {number} params.arg5 
     * @param {string} params.arg4 
     * @param {number} params.arg6 
     */
    async createPayload(context, { arg1, arg2, arg3, arg5, arg4, arg6 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
    const uniqueSourceReference = Date.now(); 
      let payload = {
    "SourceName": "Workbench",
    "SourceReference": 'Workbench_source_'+uniqueSourceReference.toString(),
    "ContractTypeName": 'SFP Contract Type',
    "ContractNumber": arg2,
    "ContractLineNumber": arg3,
    "EventTypeName": "Stored Material",
    "EventDescription": "Stored Material",
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg5,
    "ProjectNumber":arg1,
    "CompletionDate":arg4,
    "index":arg6
};
return payload;

    }
  }

  return InputNumberValueChangeChain2;
});
