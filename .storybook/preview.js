/** @type { import('@storybook/react').Preview } */

import { withScreenshot } from "storycap";

const preview = {
  decorators: [withScreenshot],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      // viewport: "iPhone 5",
    },
  },
};

export default preview;
