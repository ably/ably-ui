import { addons } from "storybook/manager-api";
import theme from "./theme";
import "./application.css";

addons.setConfig({
  theme,
});
