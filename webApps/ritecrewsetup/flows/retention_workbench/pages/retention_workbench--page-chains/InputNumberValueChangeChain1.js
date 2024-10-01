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

  class InputNumberValueChangeChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     */
    async run(context, { value }) {
      const { $page, $flow, $application } = context;

      $page.variables.billTrnsAmount = value;
      $page.variables.percentage = $page.variables.billTrnsAmount/$page.variables.contractSearch.data[$page.variables.selectedIndex].revisedContractAmount;
    }
  }

  return InputNumberValueChangeChain1;
});
