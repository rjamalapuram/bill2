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

  class SelectValueItemChangeChain5 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {any} params.data 
     * @param {any} params.metadata 
     */
    async run(context, { key, data, metadata }) {
      const { $page, $flow, $application, $constants, $variables } = context;
          if (data) {
      $variables.valueId = data.ValueId;
      $variables.valueName = data.Value;
    }else{
            $variables.valueId = '';
      $variables.valueName = '';
    }
    }
  }

  return SelectValueItemChangeChain5;
});
