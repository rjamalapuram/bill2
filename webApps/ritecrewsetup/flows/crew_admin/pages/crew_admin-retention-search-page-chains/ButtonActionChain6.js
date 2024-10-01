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

  class ButtonActionChain6 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const customDrawerClose = await Actions.callComponentMethod(context, {
        selector: '#custom-drawer',
        method: 'close',
      });
    }
  }

  return ButtonActionChain6;
});
