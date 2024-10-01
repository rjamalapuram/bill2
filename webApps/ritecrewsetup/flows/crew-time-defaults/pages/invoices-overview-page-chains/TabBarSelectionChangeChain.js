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

  class TabBarSelectionChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.selection 
     */
    async run(context, { selection }) {
      const { $page, $flow, $application } = context;

      $page.variables.selectedVal = selection;
    }
  }

  return TabBarSelectionChangeChain;
});
