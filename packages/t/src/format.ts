import type { FormatText } from "./types";


/**
 * The pattern matching placholders. E.g., "Hello {name}"
 */
const PLACEHOLDER = /\{(.*?)\}/g;

/**
 * Returns a standalone translation function not connected to any store
 */
export const format: FormatText = (text, ...[values]) => {
  if (typeof text !== "string") {
    throw new Error(`format: text should be a string: ${typeof text}`, {
      cause: { text, values },
    });
  }

  return text.replace(PLACEHOLDER, (_, placeholder) =>
    values && (values as any)[placeholder]
      ? String((values as any)[placeholder])
      : `?${placeholder}`
  );
};
