import { render } from "@testing-library/react-native";

import { ThemedText } from "../ThemedText";

describe("<ThemedText />", () => {
  test("Renders text", () => {
    const { getByText } = render(<ThemedText>Welcome!</ThemedText>);

    getByText("Welcome!");
  });
});
