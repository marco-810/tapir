import DeployKeyElement from "./DeployKeyElement";
import { render } from "@testing-library/react";

describe("<DeployKeyElement /> spec", () => {
  it("renders the DeployKeyElement", () => {
    const container = render(
      <DeployKeyElement
        deployKey={{
          id: "foo/bar/baz",
          key: "sdlshdfkjlf",
          lastModifiedAt: "2021-10-10T10:10:10.000Z",
        }}
        onCopy={() => {}}
        onDelete={() => {}}
        onRegenerate={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});