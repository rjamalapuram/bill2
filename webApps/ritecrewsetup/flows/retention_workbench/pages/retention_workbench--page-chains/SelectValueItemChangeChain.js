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
     * @param {string} params.value 
     */
    async run(context, { key, data, metadata, value }) {
      const { $page, $flow, $application } = context;

      $page.variables.contractNumber = data.contractNumber;
      $page.variables.contractId = data.contractId;
    }
  }

  return SelectValueItemChangeChain;
});
