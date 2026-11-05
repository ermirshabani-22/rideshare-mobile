import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";
import MeetingPoint from "./MeetingPoint";

describe("MeetingPoint", () => {
  test("does not request location until the user presses the location button", () => {
    const html = renderToStaticMarkup(<MeetingPoint />);

    expect(html).toContain("Përdor vendndodhjen time");
    expect(html).toContain("Ende nuk është konfirmuar.");
    expect(html).not.toContain("Pozicioni u mor.");
  });
});
