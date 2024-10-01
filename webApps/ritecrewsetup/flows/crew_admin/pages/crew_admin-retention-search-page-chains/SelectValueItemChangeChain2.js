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

  class SelectValueItemChangeChain2 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {any} params.data 
     * @param {any} params.metadata 
     */
    async run(context, { key, data, metadata }) {
      const { $page, $flow, $application, $variables } = context;

      if(data){
      $variables.projectId = data.ProjectId;
      $page.variables.projectNumber = data.ProjectNumber;
      $variables.projectName = data.ProjectName;
      }else{
              $variables.projectId = '';
      $page.variables.projectNumber = '';
      $variables.projectName = '';
      }
    }
  }

  return SelectValueItemChangeChain2;
});
