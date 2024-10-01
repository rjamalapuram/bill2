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

  class IconClickChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      $page.variables.dialogContractLineNumber = $page.variables.setupList.data[index].lineNumber;
      $page.variables.currency = 'USD';
      $page.variables.contractLineIdDialog = $page.variables.setupList.data[index].lineNumber;
      $page.variables.maxRetValue = parseFloat($page.variables.setupList.data[index].workCompleted);
      $page.variables.retPercentage = parseInt($page.variables.setupList.data[index].retentionPercentage);
      $page.variables.projectCompletionThreshold = parseInt($page.variables.setupList.data[index].totalCompleted);

      const callComponentMethodOjDialog2664976941OpenResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-266497694-1',
        method: 'open',
      });
    }
  }

  return IconClickChain1;
});
