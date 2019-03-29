/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
<<<<<<< HEAD
const urlRoot = 'https://he.reactjs.org';
const version = '16.8.4';
=======
const urlRoot = 'https://reactjs.org';
const version = '16.8.6';
>>>>>>> d0f2db967a38e358bd59c65e981862cdf38f3d0b
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {babelURL, urlRoot, version};
