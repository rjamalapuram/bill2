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

  class liClickChain1 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const toRetentionWorkbench = await Actions.navigateToFlow(context, {
        target: 'parent',
        flow: 'retention_workbench',
      });
    }
  }

  return liClickChain1;
});
