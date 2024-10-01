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

  class IconClickChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      await Actions.resetVariables(context, {
        variables: [
          '$page.variables.tableADP',
        ],
      });

      $page.variables.selectInvoiceLineId = $flow.variables.invoiceLinesADP.data[index].INVOICE_LINE_ID;

      const callRestIcsEndpointGetINVOICELINESDISTRIBUTI10GetInvoiceDistributionsResult = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getINVOICE_LINES_DISTRIBUTI1_0GetInvoiceDistributions',
        uriParams: {
          'p_invoice_line_id': $page.variables.selectInvoiceLineId,
        },
      });

      $page.variables.tableADP.data = callRestIcsEndpointGetINVOICELINESDISTRIBUTI10GetInvoiceDistributionsResult.body;

      const callRestIcsEndpointGetEVENTDISTRIBUTIONS10GetEventDistributionsResult = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getEVENT_DISTRIBUTIONS1_0GetEventDistributions',
        uriParams: {
          'p_invoice_line_id': $page.variables.selectInvoiceLineId,
        },
      });

      $page.variables.eventDists.data = callRestIcsEndpointGetEVENTDISTRIBUTIONS10GetEventDistributionsResult.body;
    }
  }

  return IconClickChain1;
});
