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
      const { $page, $flow, $application, $variables } = context;

      await Actions.resetVariables(context, {
      });

      const loadDialogOpen = await Actions.callComponentMethod(context, {
        selector: '#loadDialog',
        method: 'open',
      });

      const callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result = await Actions.callRest(context, {
        endpoint: 'getContracts/getCOM_SUMMIT_SUMMIT_ALLCONTRACT_SEARCH_SUMMIT1_0ExtractContractSearchDetails2',
        uriParams: {
          'p_contract_id': $variables.contract_id?$variables.contract_id:'',
          'p_contract_line_id': $variables.lineId?$variables.lineId:'',
          'p_org_id': $variables.orgId?$variables.orgId:'',
          'p_project_id': $variables.projectId?$variables.projectId:'',
          'p_resource_id': $variables.resourceId?$variables.resourceId:'',
          'p_service_type': $variables.valueName?$variables.valueName:'',
        },
      });

      const loadDialogClose = await Actions.callComponentMethod(context, {
        selector: '#loadDialog',
        method: 'close',
      });

      if (callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result.body.totalRetCount === 0) {

        await Actions.fireNotificationEvent(context, {
          summary: 'No records exist for this search criteria',
          displayMode: 'persist',
        });

        $variables.contractSearchscreenRecords.data = [];

        console.log('+++++++++++',$variables.contractSearchscreenRecords);
        return;
      }

      $page.variables.contractSearchscreenRecords.data = callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result.body.retValues;

    }
  }

  return ButtonActionChain;
});
