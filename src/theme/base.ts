import { vars } from "../ui/css/vars.css";
import { breakpoints, mediaQueries } from "../ui/css/breakpoints"

export default {
  siteWidth: 1200,
  breakpoints: Object.values(breakpoints).map((bp) => `${bp}px`),
  mediaQueries,
  spacing: vars.space,
  shadows: vars.shadows,
  radii: vars.radii,
  zIndices: { ribbon: 9, dropdown: 10, modal: 100 },
};
