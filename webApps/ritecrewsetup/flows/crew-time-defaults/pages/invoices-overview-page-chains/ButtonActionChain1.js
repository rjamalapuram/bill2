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

  class ButtonActionChain1 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodOjDialog7166338151CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-716633815-1',
        method: 'close',
      });
    }
  }

  return ButtonActionChain1;
});
