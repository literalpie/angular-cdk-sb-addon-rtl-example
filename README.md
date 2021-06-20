# Angular CDK and storybook-addon-rtl

This is a project that shows how to make the Directionality service of angular CDK work with the storybook-addon-rtl.
The most important code is [here](./.storybook/directionality/storybook-directionality.service.ts)

Normally, CDK expects you to use the `[dir]` directive, which provides itself as a `Directionality` provider and notifies of changes to direction.
storybook-addon-rtl is meant to be platform agnostic, so it will not directly coordinate with CDK, but this project shows how you can hook it in yourself.

While this example is specifically for CDK, similar fixes could be used in other cases.
For example, you could watch for changes from the addon and reload the story each time there is a direction change.

See it work by running `npm run storybook` looking at the button story.
