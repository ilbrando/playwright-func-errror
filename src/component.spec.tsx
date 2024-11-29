import { expect, test } from "@playwright/experimental-ct-react";

import { Component } from "./component";

test("callback func is called", async ({ mount }) => {
  const testFunc = () => 42;

  const component = await mount(<Component callbackFunc={testFunc} />);

  const button = component.getByRole("button");
  await button.click();

  await expect(component).toContainText("42");
});
