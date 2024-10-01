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

      const callComponentMethodOjDialog2664976941CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-266497694-1',
        method: 'close',
      });

      await Actions.resetVariables(context, {
        variables: [
          '$page.variables.dialogContractLineNumber',
          '$page.variables.retPercentage',
          '$page.variables.maxRetValue',
          '$page.variables.projectCompletionThreshold',
          '$page.variables.dialogRetentionPercentage',
        ],
      });
    }
  }

  return ButtonActionChain2;
});
