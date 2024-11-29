import { useState } from "react";

export type ComponentProps = {
  callbackFunc: () => number;
};

export const Component = (props: ComponentProps) => {
  const { callbackFunc } = props;

  const [value, setValue] = useState<number>();

  return (
    <div>
      <div>The value is: {value}</div>
      <button
        onClick={() => {
          const result = callbackFunc();
          setValue(result);
        }}
      >
        CLICK THIS
      </button>
    </div>
  );
};
