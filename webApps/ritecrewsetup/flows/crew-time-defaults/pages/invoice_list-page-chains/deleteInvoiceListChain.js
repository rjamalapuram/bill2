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

  class deleteInvoiceListChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.invoiceListId 
     */
    async run(context, { invoiceListId }) {
      const { $page, $flow, $application } = context;

      const callRestResult = await Actions.callRest(context, {
        endpoint: 'businessObjects/delete_InvoiceList',
        uriParams: {
          'InvoiceList_Id': invoiceListId,
        },
      }, { id: 'deleteInvoiceList' });

      if (!callRestResult.ok) {
        await Actions.fireNotificationEvent(context, {
          summary: 'Delete failed',
          message: `Could not delete data: status ${callRestResult.status}`,
          displayMode: 'persist',
          type: 'error',
        }, { id: 'fireErrorNotification' });

        return;
      }

      // Resets selection variable
      await Actions.resetVariables(context, {
        variables: [
          '$page.variables.oj_table_1995689965_1SelectedId',
        ],
      }, { id: 'resetSelection' });

      await Actions.fireDataProviderEvent(context, {
        target: $page.variables.invoiceListListSDP,
        refresh: null,
      }, { id: 'refreshDataProvider' });

      await Actions.fireNotificationEvent(context, {
        summary: 'InvoiceList deleted',
        message: `InvoiceList [${invoiceListId}] successfully deleted`,
        displayMode: 'transient',
        type: 'confirmation',
      }, { id: 'fireSuccessNotification' });
    }
  }

  return deleteInvoiceListChain;
});
