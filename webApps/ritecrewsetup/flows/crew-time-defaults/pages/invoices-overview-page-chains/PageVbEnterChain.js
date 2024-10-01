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

  class PageVbEnterChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      $page.variables.sIndex = $flow.variables.selectedIndex ? $flow.variables.selectedIndex: 0;
      $page.variables.invoice_number = $flow.variables.invoiceList.data[$page.variables.sIndex]?.invoice_number      ? $flow.variables.invoiceList.data[$page.variables.sIndex].invoice_number: null;
      $page.variables.contract_number = $flow.variables.invoiceList.data[$page.variables.sIndex].contract_number? $flow.variables.invoiceList.data[$page.variables.sIndex].contract_number: null;
      $page.variables.invoice_status = $flow.variables.invoiceList.data[$page.variables.sIndex].status? $flow.variables.invoiceList.data[$page.variables.sIndex].status: null;
      $page.variables.invoice_amount = $flow.variables.invoiceList.data[$page.variables.sIndex].invice_amount?$flow.variables.invoiceList.data[$page.variables.sIndex].invice_amount: null;
      $page.variables.project_number = $flow.variables.invoiceList.data[$page.variables.sIndex].project_number? $flow.variables.invoiceList.data[$page.variables.sIndex].project_number:null;
      $page.variables.bill_to = $flow.variables.invoiceList.data[$page.variables.sIndex].bill_to? $flow.variables.invoiceList.data[$page.variables.sIndex].bill_to:null;
      $page.variables.project_name = $flow.variables.invoiceList.data[$page.variables.sIndex].project_name? $flow.variables.invoiceList.data[$page.variables.sIndex].project_name:null;
      $page.variables.org_name = $flow.variables.invoiceList.data[$page.variables.sIndex].organization_name? $flow.variables.invoiceList.data[$page.variables.sIndex].organization_name:null;

      const callRestIcsEndpointGetINVOICELINESDATA10GetInvoiceLines2Result = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getINVOICE_LINES_DATA1_0GetInvoiceLines2',
        uriParams: {
          'p_contract_name': $page.variables.contract_number,
          'p_invoice_number': $page.variables.invoice_number,
        },
      });

      if (!callRestIcsEndpointGetINVOICELINESDATA10GetInvoiceLines2Result.ok) {
        await Actions.fireNotificationEvent(context, {
          summary: 'Encountered an error while trying to fetch details.',
          displayMode: 'transient',
        });
      
        return;
      }

      $flow.variables.invoiceLinesADP.data = callRestIcsEndpointGetINVOICELINESDATA10GetInvoiceLines2Result.body;
    }
  }

  return PageVbEnterChain;
});
