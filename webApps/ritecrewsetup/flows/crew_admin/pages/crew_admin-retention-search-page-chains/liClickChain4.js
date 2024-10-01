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

  class liClickChain4 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const toDashboard = await Actions.navigateToFlow(context, {
        target: 'parent',
        flow: 'dashboard',
      });
    }
  }

  return liClickChain4;
});
