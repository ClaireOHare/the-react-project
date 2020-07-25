import { addons } from "@storybook/addons";
import myTheme from "./myTheme";
//import { themes } from "@storybook/theming";

addons.setConfig({
  theme: myTheme, //themes.dark,
});
