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

  class IconClickChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      const navigateToPageInvoicesOverviewResult = await Actions.navigateToPage(context, {
        page: 'invoices-overview',
      });

      $flow.variables.selectedIndex = index;
      $page.variables.invoiceNumber = $page.variables.invoicesList.data[index].invoice_number;
    }
  }

  return IconClickChain;
});
