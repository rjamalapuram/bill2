define([], () => {
  'use strict';

  class PageModule {


    downloadFileNew(base64, fileName, mimeType) {

      var binaryString = window.atob(base64);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      var blob = new Blob([bytes], { type: mimeType });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName + '.pdf';
      link.click();

    }
  }
  
  return PageModule;
});
