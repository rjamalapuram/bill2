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

      $page.variables.bu_id = data.bu_id;
      $page.variables.bu_name = data.bu_name;
      $flow.variables.bu = data.bu_name;
      $flow.variables.flow_bu_id = data.bu_id;
    }
  }

  return SelectValueItemChangeChain;
});
