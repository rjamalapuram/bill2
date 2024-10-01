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
      const { $page, $flow, $application, $variables } = context;

      $page.variables.contractNumber = data.contractNumber;
      $page.variables.contractId = data.contractId;

      const callRestIcsEndpointGetRETENTIONCONTRACT10ExtractRevenueAmounts2Result = await Actions.callRest(context, {
        endpoint: 'getContracts/getCOM_SUMMIT_SUMMIT_ALLRETENTIONCONTRAC_SUMMIT1_0ExtractRevenueAmounts',
        uriParams: {
          'p_contract_id': $variables.contractId,
        },
      });

      $page.variables.setupList.data = callRestIcsEndpointGetRETENTIONCONTRACT10ExtractRevenueAmounts2Result.body.retValues;

      const callComponentMethodSetupTableRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#setupTable',
        method: 'refresh',
      });
    }
  }

  return SelectValueItemChangeChain;
});
