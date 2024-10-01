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

  class TableFirstSelectedRowChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.rowKey 
     * @param {any} params.rowData 
     */
async run(context, { rowKey, rowData }) {
  const { $page, $flow, $application, $variables } = context;

  // Set panelContractItem
  if ($page.variables.contractSearchscreenRecords.data[rowKey].description) {
    $page.variables.panelContractItem = $page.variables.contractSearchscreenRecords.data[rowKey].description;
  } else {
    $page.variables.panelContractItem = '';
  }

  // Set selectedContractNumber
  if ($variables.contractSearchscreenRecords.data[rowKey].contractNumber) {
    $variables.selectedContractNumber = $variables.contractSearchscreenRecords.data[rowKey].contractNumber;
  } else {
    $variables.selectedContractNumber = '';
  }

  // Set selectedProjectNumber
  if ($variables.contractSearchscreenRecords.data[rowKey].projectNumber) {
    $variables.selectedProjectNumber = $variables.contractSearchscreenRecords.data[rowKey].projectNumber;
  } else {
    $variables.selectedProjectNumber = '';
  }

  // Set selectedCustomer
  if ($variables.contractSearchscreenRecords.data[rowKey].customer) {
    $variables.selectedCustomer = $variables.contractSearchscreenRecords.data[rowKey].customer;
  } else {
    $variables.selectedCustomer = '';
  }

  // Set selectedCustomerContact
  if ($variables.contractSearchscreenRecords.data[rowKey].customerContact) {
    $variables.selectedCustomerContact = $variables.contractSearchscreenRecords.data[rowKey].customerContact;
  } else {
    $variables.selectedCustomerContact = '';
  }

  // Set selectedBillingFreq
  if ($variables.contractSearchscreenRecords.data[rowKey].billingFreq) {
    $variables.selectedBillingFreq = $variables.contractSearchscreenRecords.data[rowKey].billingFreq;
  } else {
    $variables.selectedBillingFreq = '';
  }

  // Set selectedBillingPortal
  if ($variables.contractSearchscreenRecords.data[rowKey].billingPortal) {
    $variables.selectedBillingPortal = $variables.contractSearchscreenRecords.data[rowKey].billingPortal;
  } else {
    $variables.selectedBillingPortal = '';
  }

  // Set selectedCosts
  if ($variables.contractSearchscreenRecords.data[rowKey].totalCostToDate) {
    $variables.selectedCosts = $variables.contractSearchscreenRecords.data[rowKey].totalCostToDate;
  } else {
    $variables.selectedCosts = 0;
  }

  // Set selectedBudgetedCosts
  if ($variables.contractSearchscreenRecords.data[rowKey].totalBudgetedcosts) {
    $variables.selectedBudgetedcosts = $variables.contractSearchscreenRecords.data[rowKey].totalBudgetedcosts;
  } else {
    $variables.selectedBudgetedcosts = 0;
  }

  // Set selectedCommittedCosts
  if ($variables.contractSearchscreenRecords.data[rowKey].totalCommittedCosts) {
    $variables.selectedCommittedCosts = $variables.contractSearchscreenRecords.data[rowKey].totalCommittedCosts;
  } else {
    $variables.selectedCommittedCosts = 0;
  }

  // Set totalRevisedContractAmount
  if ($variables.contractSearchscreenRecords.data[rowKey].totalRevisedContractAmount) {
    $variables.totalRevisedContractAmount = $variables.contractSearchscreenRecords.data[rowKey].totalRevisedContractAmount;
  } else {
    $variables.totalRevisedContractAmount = 0;
  }

  // Set totalPreviousBilledAmount
  if ($variables.contractSearchscreenRecords.data[rowKey].totalPreviouslyBilledAmount) {
    $variables.totalPreviousBilledAmount = $variables.contractSearchscreenRecords.data[rowKey].totalPreviouslyBilledAmount;
  } else {
    $variables.totalPreviousBilledAmount = 0;
  }

  // Set totalAmountToBill
  if ($variables.contractSearchscreenRecords.data[rowKey].totalAmountToBeBilled) {
    $variables.totalAmountToBill = $variables.contractSearchscreenRecords.data[rowKey].totalAmountToBeBilled;
  } else {
    $variables.totalAmountToBill = 0;
  }

  // Set totalRetainageAmount
  if ($variables.contractSearchscreenRecords.data[rowKey].totalRetainageBalance) {
    $variables.totalRetainageAmount = $variables.contractSearchscreenRecords.data[rowKey].totalRetainageBalance;
  } else {
    $variables.totalRetainageAmount = 0;
  }
}

  }

  return TableFirstSelectedRowChangeChain;
});
