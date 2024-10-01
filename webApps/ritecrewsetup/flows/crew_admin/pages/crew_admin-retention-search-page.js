define(["ojs/ojconverter-number"], function(numberConverter) {
  'use strict';

   let PageModule = function PageModule() { };

  PageModule.prototype.convertNumberToStr = function(amount) {
      let numberConvertor = new numberConverter.IntlNumberConverter({
        maximumFractionDigits: 2,
        useGrouping: true,
        currency: "USD",
        currencyDisplay: "symbol",
        style: "currency",
      });

      return numberConvertor.format(amount);
    };

    PageModule.prototype.convertNumberToPercent = function(amount) {

      if (amount===null){
        return null;
      }
      let numberConvertor = new numberConverter.IntlNumberConverter({
        
      "maximumFractionDigits": 2,
      "useGrouping": false,
      "style": "percent",

      });

      return numberConvertor.format(amount/100);
    };

  return PageModule;
});

