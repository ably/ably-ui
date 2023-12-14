import React from 'react';
import { useEffect } from 'react';

// Import the compiled component
import Meganav from '../../core/Meganav.jsx';
import loadIcons from './icons.js';

import logo from '../../core/images/ably-logo.png';
import ablyStack from '../../core/images/ably-stack.svg';
import awsLogo from '../core/images/icon-tech-aws.svg';

import {
  fetchSessionData,
  fetchBlogPosts,
  getRemoteDataStore,
  attachStoreToWindow,
  reducerBlogPosts,
  reducerSessionData,
  createRemoteDataStore
} from "../../core/scripts.js";


// Create & attach store before rendering
attachStoreToWindow(
  createRemoteDataStore({
    ...reducerBlogPosts,
    ...reducerSessionData,
  }),
);

export const Page = () => {
  useEffect(() => {
    loadIcons();

    const store = getRemoteDataStore();

    // TODO: mock these services 
    // https://storybook.js.org/docs/writing-stories/build-pages-with-storybook#mocking-api-services
    fetchSessionData(store, "/api/me");
    fetchBlogPosts(store, "/api/blog");
  }, [])

  return <Meganav paths={{
    logo,
    ablyStack,
    awsLogo
  }} />
}
