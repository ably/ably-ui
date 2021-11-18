import React from "react";
import T from "prop-types";

const CustomerLogos = ({ companies }) => {
  return (
    <section className="w-full bg-white">
      <ul className="py-64 flex flex-row flex-wrap md:flex-nowrap content-between m-auto items-center">
        {companies.map((company) => (
          <li key={company.label} className="flex-auto text-center sm:w-1/3 w-1/2">
            <img alt={company.label} src={company.logo} className="mx-auto" />
          </li>
        ))}
      </ul>
    </section>
  );
};

CustomerLogos.propTypes = {
  companies: T.arrayOf(
    T.shape({
      label: T.string,
      logo: T.string,
    })
  ),
};

export default CustomerLogos;
