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

      const callComponentMethodOjDialog7166338151OpenResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-716633815-1',
        method: 'open',
      });

      $page.variables.source_name = 'REST_'+$page.variables.contract_number+$page.variables.invoice_number;
      $page.variables.sourceReference = ''+$page.variables.contract_number+ $page.variables.invoice_number;
      $page.variables.contractTypeName = 'OAK_Contract';
      $page.variables.contractNumberDialog = $page.variables.contract_number;
      $page.variables.businessUnit = $flow.variables.bu?$flow.variables.bu:null;
      $page.variables.taskNumber = '1';
    }
  }

  return ButtonActionChain2;
});
