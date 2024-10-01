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

  class InputNumberValueChangeChain4 extends ActionChain {

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

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;

      const callFunction = await this.createPayload(context, { arg1: $variables.contractNumber, arg2: $variables.contractSearchscreenRecords.data[index].contractItem, arg3: $variables.contractSearchscreenRecords.data[index].projectNumber, arg4: $variables.formattedDate, arg5: value });

      const response = await Actions.callRest(context, {
        endpoint: 'Saas_Summit/postFscmRestApiResources11_13_18_05ProjectBillingEvents2',
        body: callFunction,
      });

    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {any} params.arg2 
     * @param {any} params.arg3 
     * @param {any} params.arg4 
     * @param {number} params.arg5 
     * @return {object} 
     */
    async createPayload(context, { arg1, arg2, arg3, arg4, arg5 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
          const uniqueSourceReference = Date.now(); 
      let payload = {
    "SourceName": "Workbench",
    "SourceReference": 'Workbench_source_'+uniqueSourceReference.toString(),
    "ContractTypeName": 'SFP Contract Type',
    "ContractNumber": arg1,
    "ContractLineNumber": arg2,
    "EventTypeName": "Retention Withhold",
    "EventDescription": "Retention Withhold",
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg5,
    "ProjectNumber":arg3,
    "CompletionDate":arg4
};
  return payload;

    }
  }

  return InputNumberValueChangeChain4;
});
