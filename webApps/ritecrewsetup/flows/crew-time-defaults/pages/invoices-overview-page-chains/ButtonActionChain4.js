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

  class ButtonActionChain4 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodOjDialog7166338152CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog-716633815-2',
        method: 'close',
      });
    }
  }

  return ButtonActionChain4;
});
