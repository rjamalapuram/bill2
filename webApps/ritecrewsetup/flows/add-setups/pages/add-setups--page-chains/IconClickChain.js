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

  class IconClickChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodOjDialog2664976941OpenResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-266497694-1',
        method: 'open',
      });

      $page.variables.dialogContractLineNumber = undefined;
    }
  }

  return IconClickChain;
});
