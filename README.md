# React Native TypeScript Boilerplate -- Training
This is a version of the boilerplate app that is geared for training and
introducing new developers to React Native.

* For the app base you should use for projects, see the `master` branch.
* For an example app with standard dependencies and other examples, see the
 `example` branch.

## Installation
Requirements:
* `yarn` 1.3.2
* `node` 9

> You can also install the `react-native-cli`, but it's not necessary and you
can use `yarn react-native` relative to this project instead. This documentation
will refer to all commands run using the command name. If you don't have the
command globally installed, using `yarn <command>` or `npx command` should
do the same thing in most cases.  
> For Example if you don't have `react-native` on your path and the docs tell
you to do `react-native start` you can replace it with `yarn react-native
start`. In some cases, `yarn` _is_ the base command.

You can create a base project by cloning this or by using `react-native init`
and copying over the relevant content / files that you need. Copying the
boilerplate is recommended at this time.

Once you have your base project, run `yarn install`.

Now run `npx react-native-rename $PROJECT` with your app name, bundle
identifier, and other information that needs to be changed from the boilerplate.
See: https://github.com/junedomingo/react-native-rename

## Development
The easiest way to develop locally is to start the local development server and
run the app in an iOS and/or Android emulator.

```
react-native start
react-native run-ios
react-native run-android
```

If you have a simulator open for a platform, React Native will use it
automatically with the `run-<platform>` command. Otherwise you can specify a
device or simulator with the options for `react-native run-<platform>`.

You can reload the app with <kbd>Cmd-r</kbd> on iOS or <kbd>r r</kbd> on
Android. You can also open the menu with <kbd>Cmd-d</kbd> on iOS or
<kbd>Cmd-m</kbd> in Android. This will give you options to enable live reloading
and hot reloading.

Remember that the React Native server must be running for `run-<platform>` to
work. This is done with `react-native start`. You may want to use
`react-native start --reset-cache` in some cases.

### Debugging
Install the third party React Native Debugger: https://github.com/jhen0409/react-native-debugger

```sh
brew update && brew cask install react-native-debugger
```

This is a standalone app. In order to use it, open it via:

```sh
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

Once the app is running in your simulator/emulator, type <kbd>Cmd-d</kbd> and
select "Debug JS Remotely" if it is not already selected. Now you should see
logging in the debugger.

You can also set the debugger at React Native server start time using the
`REACT_DEBUGGER` environment variable. For example:

```sh
REACT_DEBUGGER="open -g 'rndebugger://set-debugger-loc?port=8081' || ''" react-native start
```

This should open the debugger automatically in the background when you turn on
"Debug JS Remotely." You can remove the `-g` flag if you want it to pop to the
foreground when it opens.

The project setup should allow Redux devtools to work out of the box.

**Note:** You can only use the debugger with one emulator/simulator/device at
a time.

To debug network requests, you can right-click the debugger and select "Enable
Network Inspect." There are some limitations. See:
https://github.com/jhen0409/react-native-debugger/blob/master/docs/network-inspect-of-chrome-devtools.md

### Hot Reloading
Hot reloading reloads the current view / screen with changes you've made to that
file or any dependent files in real time. This is different than live reloading
which will restart the app automatically when you make changes. Using hot
reloading is highly recommended at least in cases where you are developing
screens.

Hot reloading should be supported with our base modules. Some hot reloading will
cause errors or not work properly. In this case, you can manually reload the
app with <kbd>Cmd-r</kbd> on iOS or <kbd>r r</kbd> on Android. If hot reloading
is causing too many issues while you're developing something, you can also turn
it off and turn live reloading on (or just handle reloading on your own).

If you are running multiple simulators or devices, hot/live reloading changes
will propagate to all of them at once.

If working from the base or example app, try enabling hot reloading and then
making a change to a component on your screen to see it in action.

### Unit Testing
Write unit tests relative to the files they are testing in corresponding
`__tests__` directories (per jest standards). A working sample is given in
`src/__tests__/App.test.tsx`. You should be able to create any `__tests__/*.test.tsx`
files and they will be picked up by jest.

`yarn test` will run the unit tests. You can also use `yarn test --coverage`
to generate a coverage report in the `coverage/` directory.

### Formatting
Formatting is handled by [`prettier`](https://github.com/prettier/prettier).
`prettier` will run automatically on `git commit` to format all files.

You should add a prettier plugin for your editor so you can see the changes
ahead of time. This is not strictly necessary, but will help normalize the
output files and your changes as you develop.

### Linting
`yarn lint` will run the linter. Linting is also run at commit time, and any
automatic fixes are applied. If there are linter errors, the commit will fail.

You should add a TypeScript and tslint plugin to your editor so you can catch
any errors in real time.

### Path Aliases
In order to make importing more convenient, absolute imports can be done from
the `src` directory. For example:

```ts
// App.tsx
import { API_HOST } from 'src/Config.ts';
```

This will work instead of having to do `../src/Config.ts` or `./Config.ts` or
finding a relative path for a given module/file.

This works by having `tsconfig.json#compilerOptions.baseUrl: "."` and also
having `src/package.json#name: "src"`.

You can create more path aliases in a similar fashion by adding a
`package.json` to a given path with a name that corresponds to the path alias.

#### For Tests
This is handled via `package.json@jest.moduleNameMapper: "src(.*)": "<rootDir>/src/$1"`.
This maps any imports from `src/` to the root of the project.

## Environment Variables
*Do not set secret configuration in version control or the environment*.

Configuration of the app is handled through environment variables. When running
the development server, or bundling, the environment variables must be set.

```
API_HOST=test react-native start
```

In order to add a new environment variable, update `src/Config.ts`:

```ts
+ export const NAME = get(process.env['NAME'], 'default value');
```

Now you can `import { NAME } from 'src/Config.ts` wherever it's needed.
