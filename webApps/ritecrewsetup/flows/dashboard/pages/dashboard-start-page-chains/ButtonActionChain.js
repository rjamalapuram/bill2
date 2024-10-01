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

      const callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result = await Actions.callRest(context, {
        endpoint: 'getContracts/getCOM_SUMMIT_SUMMIT_ALLCONTRACT_SEARCH_SUMMIT1_0ExtractContractSearchDetails2',
        uriParams: {
          'p_contract_id': $variables.contractId,
        },
      });

      const callFunctionResult = await this.createDataFormat(context, { result: callRestIcsEndpointGetCONTRACTSEARCH10ExtractContractSearchDetails2Result.body.retValues });

      $page.variables.DataADP.data = callFunctionResult;

      const callComponentMethodChartRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#chart',
        method: 'refresh',
      });
    }

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.result 
     * @return {object[]} 
     */
    async createDataFormat(context, { result }) {
      const { $page, $flow, $application } = context;
      var newID = 1;
      if (result && result.length > 0) {
        var items = [];
 
        for (var i = 0; i < result.length; i++) {
            items.push({
                id: newID++,
                group: result[i].contractItem,
                series: "Total Billed Amount",
                value:Number(result[i].totalBilled)
            });
            items.push({
                id: newID++,
                group: result[i].contractItem,  // Using ContractLineNumber as the group
                series: "Retention Withheld",
                value: Number(result[i].retainageHeld)
            });
            items.push({
                id: newID++,
                group: result[i].contractItem,
                series: "Retention Released",
                value: Number(result[i].retainageAmount)
            });
            // Add more series as needed
        }

        console.log('==========',items);
        return items;
    }
    }
  }

  return ButtonActionChain;
});
