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

  class ojTable19956899651ChangeSelectionChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.invoiceListId
     */
    async run(context, { invoiceListId }) {
      const { $page, $flow, $application } = context;
      $page.variables.oj_table_1995689965_1SelectedId = invoiceListId;
    }
  }

  return ojTable19956899651ChangeSelectionChain;
});
