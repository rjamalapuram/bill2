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

  class liClickChain3 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const toAddSetups = await Actions.navigateToFlow(context, {
        target: 'parent',
        flow: 'add-setups',
      });
    }
  }

  return liClickChain3;
});
