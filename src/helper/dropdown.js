import { pluralize } from "./pluralize";

const createSelectOptions = (length, label) => {
  return [...Array(length).keys()].map(n => n + 1).map(
    n => (<option key={n} value={n}>{pluralize(n, label)}</option>)
  )
};

export { createSelectOptions };
