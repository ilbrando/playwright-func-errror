## Reproduce the error

```shell
# clone this repo
cd playwright-func-error
npm install
npx playwright install

# This will fail
npm run test
```

If you want to see what is happening, you can run the test in UI mode:

```shell
npm run test -- --ui
```

After the test has run you can interact with the UI and click on the button. No number is shown.

If you want to verify the application actually do work, you can run it (not using the 
testing runner) with:

```shell
npm run dev
```

When you click the button now, the value `100` is shown.