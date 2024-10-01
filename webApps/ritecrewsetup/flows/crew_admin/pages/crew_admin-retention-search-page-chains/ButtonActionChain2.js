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

      const callComponentMethodOjDialog10222942191CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog--1022294219-1',
        method: 'close',
      });
    }
  }

  return ButtonActionChain2;
});
