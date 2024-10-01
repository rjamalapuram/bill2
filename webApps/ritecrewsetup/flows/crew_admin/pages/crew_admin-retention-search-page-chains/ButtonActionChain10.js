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

  class ButtonActionChain10 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      //console.log(formattedDate); // Output: YYYY-MM-DD
      $page.variables.CompletionDate= formattedDate;  


      if ($variables.adjustments.length>0) {

        const loadDialogOpen = await Actions.callComponentMethod(context, {
          selector: '#loadDialog',
          method: 'open',
        });

        const results = await ActionUtils.forEach($variables.adjustments, async (item, index) => {

          const callFunction = await this.createPayload(context, { arg1: item.ContractNumber, arg2: item.ContractLineNumber, arg3: item.BillTrnsAmount, arg4: item.CompletionDate, arg5: item.ProjectNumber, arg6: item.SourceReference, arg7: item.ContractTypeName, arg8: item.EventTypeName, arg9: item.EventDescription });

          const response = await Actions.callRest(context, {
            endpoint: 'Saas_Summit/postFscmRestApiResources11_13_18_05ProjectBillingEvents2',
            body: callFunction,
          });

          if (!response.ok) {
            $variables.erroredObjects.push(item);
          }
          const loadDialogClose = await Actions.callComponentMethod(context, {
            selector: '#loadDialog',
            method: 'close',
          });
        }, { mode: 'parallel' });
      } else {
        await Actions.fireNotificationEvent(context, {
          summary: 'No Details Changed',
        });
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
     * @return {object} 
     */
    async createPayload(context, { arg1, arg2, arg3, arg4, arg5,arg6,arg7,arg8,arg9 }) {
      const { $page, $flow, $application, $constants, $variables } = context;
            const uniqueSourceReference = Date.now(); 
       let payload = {
"SourceName": "Rest_new_adjustment",
"SourceReference":arg6,
"ContractTypeName":arg7,
    "ContractNumber": arg1,
    "ContractLineNumber": arg2,
    "EventTypeName": arg8,
    "EventDescription": arg9,
    "BusinessUnitName": 'SFP',
    "BillTrnsAmount": arg3,
    "ProjectNumber":arg5,
    "CompletionDate":arg4
};
return payload;
    
    }
  }

  return ButtonActionChain10;
});
