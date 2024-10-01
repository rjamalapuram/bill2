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

  class ButtonActionChain7 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      await Actions.resetVariables(context, {
        variables: [
    '$page.variables.getCOMSUMMITSUMMITALLCONTRACTSLOVSUMMIT1GetContractsListSDP',
    '$page.variables.contractNumber',
    '$page.variables.resourceId',
    '$page.variables.orgId',
    '$page.variables.projectName',
    '$page.variables.managerName',
    '$page.variables.OrganizationName',
    '$page.variables.totalRevisedContractAmount',
    '$page.variables.totalPreviousBilledAmount',
    '$page.variables.totalAmountToBill',
    '$page.variables.totalRetainageAmount',
    '$page.variables.selectedProjectNumber',
    '$page.variables.selectedCustomer',
    '$page.variables.selectedCustomerContact',
    '$page.variables.selectedBillingFreq',
    '$page.variables.selectedBillingPortal',
    '$page.variables.selectedBudgetedcosts',
    '$page.variables.selectedCosts',
    '$page.variables.selectedCommittedCosts',
  ],
      });
 window.location.reload();
      $variables.contractSearchscreenRecords.data = [];
    }
  }

  return ButtonActionChain7;
});
