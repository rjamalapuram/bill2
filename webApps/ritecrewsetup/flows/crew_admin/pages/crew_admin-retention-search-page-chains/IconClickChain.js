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

  class IconClickChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      const callComponentMethodOjDialog10222942191OpenResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog--1022294219-1',
        method: 'open',
      });

      $page.variables.dialogContractNumber = $page.variables.contractSearchscreenRecords.data[index].contractNumber;
      $page.variables.dialogContractLineNumber = $page.variables.contractSearchscreenRecords.data[index].contractItem;
      $page.variables.availableRetainageAmount = $page.variables.contractSearchscreenRecords.data[index].retainageBalance;
      $page.variables.generateInvoice = true;
      $page.variables.selectedIndex = index;
      $page.variables.SourceName = 'AIA Bill Retainage';
    }
  }

  return IconClickChain;
});
