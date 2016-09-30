import {
  default as AsyncGettingStartedExample,
} from "./AsyncGettingStartedExample";

import {
  default as PageWithIframeEntry,
} from "./PageWithIframeEntry";

PageWithIframeEntry.__raw = require(`!raw!./AsyncGettingStartedExample`);

export {
  AsyncGettingStartedExample,
  PageWithIframeEntry,
};
