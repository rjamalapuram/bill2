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

  class InputNumberValueChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     */
    async run(context, { value }) {
      const { $page, $flow, $application } = context;

      $page.variables.percentage = value;

      if ($page.variables.percentage > 100) {

        await Actions.fireNotificationEvent(context, {
          summary: 'Please Enter Correct Percentage',
        });
      } else {
         $page.variables.billTrnsAmount = ($page.variables.percentage )*$page.variables.contractSearch.data[$page.variables.selectedIndex].revisedContractAmount;
      }

    }
  }

  return InputNumberValueChangeChain;
});
