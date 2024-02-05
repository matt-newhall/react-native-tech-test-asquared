import { renderHook } from "@testing-library/react";
import { useHomeScreen } from "../useHomeScreen";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
) as jest.Mock;

describe("[Hook] useHomeScreen", () => {
  it("check fetch is being called", async () => {
    renderHook(() => useHomeScreen());

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
