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

  class CloseTimeDlgAction extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodTimesDialogCloseResult = await Actions.callComponentMethod(context, {
        selector: '#timesDialog',
        method: 'close',
      });
    }
  }

  return CloseTimeDlgAction;
});
