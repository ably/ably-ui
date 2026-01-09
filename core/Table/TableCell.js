import React from"react";const LabelCell=({children,...rest})=>{const classes=`
    ui-text-p1 font-bold pt-6 pb-2 border-light-grey sm:p-6 sm:relative sm:top-0.5 flex sm:table-cell ${rest?.className??""}
  `;return React.createElement("td",{...rest,className:classes},children)};const TableCell=({children,isRowHeader,...rest})=>React.createElement("td",{...rest,className:`
        border-light-grey sm:p-6 leading-none flex sm:table-cell
        ${isRowHeader?"rounded-l-none rounded-r sm:rounded-lg py-5 px-6":"py-1.5"}
        ${rest?.className??""}
      `},children);const HeaderCell=({children,...rest})=>React.createElement("td",{...rest,className:`ui-text-h3 px-6 py-6 hidden sm:table-cell ${rest?.className??""}`},children);const CtaCell=({children,...rest})=>React.createElement("td",{...rest,className:`pt-6 hidden sm:table-cell ${rest?.className??""}`},children);export{TableCell,LabelCell,HeaderCell,CtaCell};
//# sourceMappingURL=TableCell.js.map