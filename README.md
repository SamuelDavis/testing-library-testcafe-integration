# @TestingLibrary/TestCafe Breaks TestCafe Navigation

Specifically, the `testController.navigateTo` function throws a `Cannot read property 'destUrl' of null` if the Testing Library TestCafe extension has been loaded. The `fixture.page` method behaves as expected.

### Caveats
* There are 2 .testcaferc.json files: one which attempts to load Testing Library as a module, and one which does not. They both fail with the same underlying error, but one first throws an additional "injecting module" error.

### Steps to Reproduce
1. Clone the repo
```shell
git clone git@github.com:SamuelDavis/testing-library-testcafe-integration.git;
```
2. Change into the created directory
```shell
cd testing-library-testcafe-integration;
```
3. Install dependencies
```shell
npm install;
```

4. Run the test script locally...
```shell
npx testcafe chrome tests.js;
```
...or via docker...
```shell
docker run --rm -it -v $PWD:/mnt -w /mnt --env NODE_PATH=/mnt/node_modules testcafe/testcafe chromium tests.js;
```

### Error output (trying to load Testing Library as a module):

This is as described [in the docs](https://testing-library.com/docs/testcafe-testing-library/intro); see .testcaferc.from-the-docs.json for reference)

> An error occurred in the '@testing-library/dom/dist/@testing-library/dom.umd.js' module injected into the tested page. Make sure that this module can be executed in the browser environment.
>
> Error details:
>
> TypeError: Cannot read property 'destUrl' of null

### Error output (loading Testing Library directly from node_modules):

> An error occurred in a script injected into the tested page:
>
> TypeError: Cannot read property 'destUrl' of null
