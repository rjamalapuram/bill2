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
    if (data) {
        // Assign values if data is available
        $page.variables.contractNumber = data.contractNumber ? data.contractNumber : '';
        $page.variables.contract_id = data.contractId || ''; // You can also set a default value here
    } else {
        // Optionally handle the case where data is undefined
        $page.variables.contractNumber = '';
        $page.variables.contract_id = ''; // Set a default or null if data is not available
    }
    }
  }

  return SelectValueItemChangeChain;
});
