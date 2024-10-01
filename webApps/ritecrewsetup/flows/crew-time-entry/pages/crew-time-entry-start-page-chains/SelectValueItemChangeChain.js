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

  class SelectValueItemChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {any} params.data 
     * @param {any} params.metadata 
     */
    async run(context, { key, data, metadata }) {
      const { $page, $flow, $application } = context;

      if (data.value) {
        if (data.value === "WEEK") {
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.searchobj.crewdate',
            ],
          });
        } else {
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.searchobj.dateRange',
            ],
          });
        }
      }
    }
  }

  return SelectValueItemChangeChain;
});
