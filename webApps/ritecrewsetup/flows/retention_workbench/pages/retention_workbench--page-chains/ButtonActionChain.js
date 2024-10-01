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

      const callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result = await Actions.callRest(context, {
        endpoint: 'icsEndpoint/getCONTRACT_SEARCH1_0ExtractContractSearchDetails2',
        uriParams: {
          'p_contract_id': $page.variables.contractId,
          'p_contract_line_id': $page.variables.lineId,
          'p_project_id': $page.variables.projectId,
        },
      });

      $page.variables.contractSearch.data = callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result.body.retValues;
    }
  }

  return ButtonActionChain;
});
