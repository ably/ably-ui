import React from "react";

type CompanyEntity = {
  label: string;
  logo: string;
};

type CustomerLogosProps = {
  companies: CompanyEntity[];
  additionalCss?: string;
};

const CustomerLogos = ({
  companies,
  additionalCss = "",
}: CustomerLogosProps) => {
  return (
    <section className="w-full bg-white">
      <ul
        className={`py-16 flex flex-row flex-wrap md:flex-nowrap content-between m-auto items-center ${additionalCss}`}
      >
        {companies.map((company) => (
          <li
            key={company.label}
            className="flex-auto text-center sm:w-1/3 w-1/2"
          >
            <img alt={company.label} src={company.logo} className="mx-auto" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomerLogos;
