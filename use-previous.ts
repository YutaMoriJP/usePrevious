import * as React from "react";

/**
 * Inspired from:
 * @see https://x.com/buildsghost/status/1799123403192017084
 *
 * Forking this won't work as `react` and other packages to use run aren't installed.
 * Just copy-paste the file.
 */

export const usePrevious = <TState>(initialValue: TState) => {
  const [[previous, current], setState] = React.useState<[null | TState, TState]>([null, initialValue]);

  const updateState = (newValue: (prevState: TState) => TState) => {
    if (typeof newValue === "function") {
      setState(([_, current]) => [current, newValue(current)]);
    } else {
      setState(([_, current]) => [current, newValue as TState]);
    }
  };

  return [[previous, current], updateState] as const;
};
