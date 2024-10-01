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

      const callComponentMethodOjDialog18567348261OpenResult = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog--1856734826-1',
        method: 'open',
      });

      $page.variables.buName = 'Oak USA BU1';
      $page.variables.SourceName = 'AIA Bill Adjustments';
      $page.variables.contractTypeName = 'OAK_Contract';
      $page.variables.selectedIndex = index;
      $page.variables.lineNumberDialog = $page.variables.contractSearch.data[index].contractItem;
    }
  }

  return IconClickChain;
});
