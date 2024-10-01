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

  class ButtonActionChain1 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodOjDialog18567348261CloseResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog--1856734826-1',
        method: 'close',
      });

      await Actions.resetVariables(context, {
        variables: [
          '$page.variables.billTrnsAmount',
          '$page.variables.buName',
          '$page.variables.completionDate',
          '$page.variables.SourceName',
          '$page.variables.sourceRef',
          '$page.variables.selectedIndex',
        ],
      });
    }
  }

  return ButtonActionChain1;
});
