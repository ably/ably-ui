import React, { Fragment } from "react";

import Tooltip from "../../Tooltip/component";
import { Supported, Unsupported } from "../TableCell";
import Table from "..";

const testRow = (index) => ({
  label: `Label ${index + 1}`,
  cells: [
    { label: "text", content: "Cell content", column: "Free" },
    {
      label: "yes",
      content: (
        <div className="flex items-center sm:flex-col sm:items-start">
          <span className="sm:order-1 px-6 sm:py-6 sm:px-0">Supported</span>
          <span className="sm:order-0">
            <Supported />
          </span>
        </div>
      ),
      column: "PAYG",
    },
    {
      label: "no",
      content: (
        <div className="flex items-center  sm:flex-col sm:items-start">
          <span className="sm:order-1 px-6 sm:py-6 sm:px-0">Unsupported</span>
          <span className="sm:order-0">
            <Unsupported />
          </span>
        </div>
      ),
      column: "Custom",
    },
  ],
});

const sections = ["Features", "Support", "Technical Support"].map((label) => ({
  label,
  rows: [...Array(5)].map((_, i) => testRow(i)),
}));

export const PricingPageTable = () => {
  return (
    <div className="ui-standard-container">
      <h2 className="ui-text-h2 text-center m-32">Pricing Page Table</h2>
      <p className="text-center m-32">Example content</p>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              <span className="ui-text-h3 hidden sm:block">Free</span>
            </Table.Cell>
            <Table.Cell>
              <span className="ui-text-h3 hidden sm:block">PAYG</span>
            </Table.Cell>
            <Table.Cell>
              <span className="ui-text-h3 hidden sm:block">Custom</span>
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sections.map((section) => (
            <Fragment key={section.label}>
              <Table.RowHeader>
                <Table.Cell colSpan={4}>{section.label}</Table.Cell>
              </Table.RowHeader>
              {section.rows.map((row) => (
                <Table.Row key={row.label}>
                  <Table.LabelCell
                    key={row.label}
                    className="border-t border-light-grey"
                  >
                    <a className="ui-link" href="#">
                      {row.label}
                    </a>
                    <Tooltip>Example tooltip</Tooltip>
                  </Table.LabelCell>
                  {row.cells.map((cell) => (
                    <Table.Cell key={cell.label} className="last:mb-16 sm:mb-0">
                      <div className="flex-1 sm:hidden !text-dark-grey ui-text-overline2">
                        {cell.column}
                      </div>
                      {cell.content}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Fragment>
          ))}
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.CtaCell>
              <a href="#" className="ui-btn-secondary">
                Get started
              </a>
            </Table.CtaCell>
            <Table.CtaCell>
              <a href="#" className="ui-btn-secondary">
                Get started
              </a>
            </Table.CtaCell>
            <Table.CtaCell>
              <a href="#" className="ui-btn">
                Contact sales
              </a>
            </Table.CtaCell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};
