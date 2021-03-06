
import { escapeElement } from "./escape-element.ts";
import { Stringable } from "./stringable.ts";
/**
 * Represents an XML text value.
 */
export class XmlText implements Stringable {
  constructor(private value: string) {}

  toString(): string {
    return escapeElement("" + this.value);
  }
}
