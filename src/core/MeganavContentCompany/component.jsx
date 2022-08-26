import React from "react";
import T from "prop-types";

import MeganavBlogPostsList from "../MeganavBlogPostsList/component.jsx";
import ConnectStateWrapper from "../ConnectStateWrapper/component.jsx";

import { selectRecentBlogPosts } from "../remote-blogs-posts";

import Icon from "../Icon/component.jsx";

const MeganavContentCompany = ({ paths, absUrl }) => {
  const BlogPostsList = ConnectStateWrapper(MeganavBlogPostsList, { recentBlogPosts: selectRecentBlogPosts });

  return (
    <div className="flex max-w-screen-xl mx-auto">
      <div className="ui-meganav-content-spacer"></div>
      <section className="grid grid-cols-12 ui-grid-gap-x w-full">
        <div className="col-span-full md:col-span-4 pt-24 md:py-24 lg:py-32 px-24 sm:px-32 md:pl-0 md:pr-24">
          <h3 className="ui-meganav-overline" id="meganav-company-panel-list-why-companies">
            Why companies choose Ably
          </h3>
          <ul aria-labelledby="meganav-company-panel-list-why-companies">
            <li>
              <a href={absUrl("/customers")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-customers-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Customers</p>
                  <p className="ui-meganav-media-copy">Ably supports customers across multiple industries.</p>
                </div>
              </a>
            </li>
            <li>
              <a href={absUrl("/case-studies")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-case-studies-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Case studies</p>
                  <p className="ui-meganav-media-copy">Discover how customers are benefitting from Ably.</p>
                </div>
              </a>
            </li>
            <li>
              <a href={absUrl("/compare")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-compare-tech-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Compare our tech</p>
                  <p className="ui-meganav-media-copy">Choose the right realtime service.</p>
                </div>
              </a>
            </li>
            <li>
              <a href={absUrl("/aws")} className="ui-meganav-media-with-image group">
                <img src={paths.awsLogo} alt="AWS logo" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Partners</p>
                  <p className="ui-meganav-media-copy">Ably collaborates and integrates with AWS.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full md:col-span-4 pb-8 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0">
          <ul className="md:mt-40" aria-labelledby="meganav-company-panel-list-why-companies">
            <li>
              <a href={absUrl("/resources")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-resources-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Resources</p>
                  <p className="ui-meganav-media-copy">Learn more about realtime with our handy resources.</p>
                </div>
              </a>
            </li>
            <li>
              <a href={absUrl("/about")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-about-ably-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">About Ably</p>
                  <p className="ui-meganav-media-copy">Find out more about Ably’s mission.</p>
                </div>
              </a>
            </li>
            <li>
              <a href={absUrl("/careers")} className="ui-meganav-media-with-image group">
                <Icon name="icon-display-careers-col" size="2.5rem" />
                <div className="flex flex-col justify-center">
                  <p className="ui-meganav-media-heading">Careers</p>
                  <p className="ui-meganav-media-copy">Discover our open roles and core Ably values.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <BlogPostsList absUrl={absUrl} />
      </section>
      <div className="ui-meganav-content-spacer"></div>
    </div>
  );
};

MeganavContentCompany.propTypes = {
  absUrl: T.func,
  paths: T.shape({
    awsLogo: T.string,
  }),
};

export default MeganavContentCompany;
