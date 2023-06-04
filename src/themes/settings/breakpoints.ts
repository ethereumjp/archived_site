const devices = ['mobile', 'tablet', 'laptop', 'desktop', 'monitor'];
const breakpoints = [480, 768, 1024, 1440, 2560];

export const mq = Object.fromEntries(
  devices.map((_, i) => [
    devices[i],
    `@media (min-width: ${breakpoints[i]}px)`,
  ]),
);
