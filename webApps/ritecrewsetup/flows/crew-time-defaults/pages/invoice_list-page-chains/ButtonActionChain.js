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

  class ButtonActionChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      $page.variables.contractNumberOnly = $page.variables.contract_number.split(':')[0].trim();

      const callRestIcsEndpointGetINVOICESLISTDATA10GetInvoiceList2Result = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getINVOICES_LIST_DATA1_0GetInvoiceList2',
        uriParams: {
          'p_contract_number': $page.variables.contractNumberOnly,
        },
      });

      $page.variables.invoicesList.data = callRestIcsEndpointGetINVOICESLISTDATA10GetInvoiceList2Result.body;
      $flow.variables.invoiceList.data = callRestIcsEndpointGetINVOICESLISTDATA10GetInvoiceList2Result.body;

      const callComponentMethodInvoiceListTableRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#invoiceListTable',
        method: 'refresh',
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.arg1 
     * @param {string} params.arg2 
     * @param {string} params.arg3 
     * @param {string} params.arg4 
     * @return {payload} 
     */
    async generateDraftInvoicePayload(context, { arg1, arg2, arg3, arg4 }) {
      const { $page, $flow, $application } = context;
    }
  }

  return ButtonActionChain;
});
