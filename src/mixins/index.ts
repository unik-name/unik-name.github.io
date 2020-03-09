import merge from "lodash/merge";

/* tslint:disable:no-var-requires */
const mixins = [
  require("./crypto").default,
  require("./currency").default,
  require("./misc").default,
  require("./network").default,
  require("./strings").default,
  require("./transaction-types").default,
  require("./unik").default,
];

export default merge([], ...mixins);
