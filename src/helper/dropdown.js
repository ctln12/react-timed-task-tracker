import { MenuItem } from "@mui/material";
import { pluralize } from "./pluralize";

const createSelectOptions = (length, label) => {
  return [...Array(length).keys()].map(n => n + 1).map(
    n => (<MenuItem key={n} value={n}>{pluralize(n, label)}</MenuItem>)
  )
};

export { createSelectOptions };
