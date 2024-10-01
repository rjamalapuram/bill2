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

  class ButtonActionChain3 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $variables } = context;

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

  return ButtonActionChain3;
});
