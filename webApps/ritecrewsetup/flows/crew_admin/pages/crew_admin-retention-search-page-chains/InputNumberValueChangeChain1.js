define([
  'vb/action/actionChain',
  'vb/act{
  summary: $variables.contractSearchscreenRecords.data[index].projectNumber,
}/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class InputNumberValueChangeChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { value, key, index, current }) {
      const { $page, $flow, $application, $current, $variables } = context;


      await Actions.fireNotificationEvent(context, {
        summary: 'Hello',
      });

         const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;
      $page.variables.values[index] = value;

      const callFunction = await this.create(context, { arg1: $variables.contractSearchscreenRecords.data[index].contractNumber, arg2: $variables.contractSearchscreenRecords.data[index].contractItem, arg3: value, arg4: $variables.CompletionDate });

      await Actions.callRest(context, {
        endpoint: 'Saas_Summit/postFscmRestApiResources11_13_18_05ProjectBillingEvents2',
        body: callFunction,
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     * @param {number} params.arg3 
     */
    async create(context, { arg1, arg2, arg3,arg4 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
          const uniqueSourceReference = Date.now(); 
      let payload = {
    "SourceName": "Workbench",
    "SourceReference": 'Workbench_source_'+uniqueSourceReference.toString(),
    "ContractTypeName": 'SFP Contract Type',
    "ContractNumber": arg1,
    "ContractLineNumber": arg2,
    "EventTypeName": "Bill Retainage",
    "EventDescription": "AIA Bill Retainage",
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg3,
    "ProjectNumber":"60000366",
    "CompletionDate":arg4
};
return payload;
    }
  }

  return InputNumberValueChangeChain1;
});
