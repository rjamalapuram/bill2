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

  class SelectValueItemChangeChain5 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {any} params.data 
     * @param {any} params.metadata 
     */
    async run(context, { key, data, metadata }) {
      const { $page, $flow, $application } = context;

      $page.variables.eventTypeName = data.EventTypeName;
      $page.variables.eventDescription = data.Description;

      const callComponentMethodDescInputRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#desc_input',
        method: 'refresh',
      });
    }
  }

  return SelectValueItemChangeChain5;
});
