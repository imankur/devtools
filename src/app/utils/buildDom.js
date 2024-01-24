import {
  TYPE_ARRAY,
  TYPE_BOOL,
  TYPE_NULL,
  TYPE_NUMBER,
  TYPE_OBJECT,
  TYPE_STRING,
} from "./constants";
import React from "react";
import { assert } from "./assert";
import { getValueType } from "./getValueType";
import { createBlankSpan, templates } from "./template";

/**
 * Recursively builds a style-able DOM tree of nested spans, based on a JSON value (or key-value pair).
 *
 * If a string `keyName` is provided, the output span represents full object entry (a key-value pair). Otherwise the output span just represents a simple value.
 *
 * If the passed value is an object property (as when this fn is called recursively), the returned DOM tree includes the key you pass in.
 *
 * @param value Any JSON-compatible value (object, array, or primitive)
 * @param keyName The key for this value if it's an object entry, or `false` if it's not
 * @returns The generated DOM tree
 */
const pp = "asd";
const SpanBoth = ({ innerText, className }) => (
  <span className={className}> {innerText} </span>
);
const SpanOne = (className) => <span className={className}></span>;

export const buildDom = (value, keyName) => {
  // Establish what type this value is
  const type = getValueType(value);

  // Create root node for this entry
  const entry = [];
  //templates.t_entry.cloneElement();

  // Establish the size (number of entries) if it's an object or array
  let collectionSize = 0;
  if (type === TYPE_OBJECT) {
    // @ts-ignore
    collectionSize = Object.keys(value).length;
  } else if (type === TYPE_ARRAY) {
    // @ts-ignore
    collectionSize = value.length;
  }

  // Establish if this is an array/object with non-zero size, and add an expander button if so
  let nonZeroSize = false;
  if (type === TYPE_OBJECT || type === TYPE_ARRAY) {
    // @ts-ignore - TODO
    for (const objKey in value) {
      // @ts-ignore - TODO
      if (value.hasOwnProperty(objKey)) {
        nonZeroSize = true;
        break; // no need to keep counting; only need one
      }
    }
    //if (nonZeroSize) entry.push(<SpanOne className="e" />);
  }

  // If there's a key, add that before the value
  if (keyName !== false) {
    // NB: "" is a legal keyname in JSON
    // This entry must be an object property
    //entry.classList.add("objProp");

    // Create a span for the key name
    const textContent = JSON.stringify(keyName); // remove quotes

    const keySpan = (
      <SpanBoth
        innerText={textContent}
        className={"e text-white text-[13px] font-mono bl"}
      />
    );

    // Add it to entry, with quote marks
    //entry.push(React.cloneElement(templates.t_dblqText));
    entry.push(keySpan);
    console.log("aaaa1 ", entry);
    //entry.push(React.cloneElement(templates.t_dblqText));

    // Also add ":&nbsp;" (colon and non-breaking space)
    entry.push(<span>{":\u00A0"}</span>);
  } else {
    // This is an array element instead
    //entry.classList.add("arrElem");
  }

  // Generate DOM for this value
  let blockInner;
  let childEntry;

  switch (type) {
    case TYPE_STRING: {
      assert(typeof value === "string");

      // If string is a URL, get a link, otherwise get a span
      const innerStringEl = createBlankSpan();

      let escapedString = JSON.stringify(value);
      escapedString = escapedString.substring(1, escapedString.length - 1); // remove outer quotes
      const valueElement = (
        <span>
          <span>&quot;</span>
          <span className="text-[#12b300] text-[13px] font-mymono">
            {escapedString}
          </span>
          <span>&quot;</span>
        </span>
      );
      entry.push(valueElement);
      break;
    }

    case TYPE_NUMBER: {
      // Simply add a number element (span.n)
      const valueElement = <SpanBoth className="n" innerText={String(value)} />;
      entry.push(valueElement);
      console.log("aaaa", entry);
      break;
    }

    case TYPE_OBJECT: {
      assert(typeof value === "object");

      // Add opening brace
      entry.push(React.cloneElement(templates.t_oBrace));

      // If any properties, add a blockInner containing k/v pair(s)
      if (nonZeroSize) {
        // Add ellipsis (empty, but will be made to do something when entry is collapsed)
        entry.push(React.cloneElement(templates.t_ellipsis));
        // Create blockInner, which indents (don't attach yet)
        blockInner = [];
        // For each key/value pair, add as a entry to blockInner

        let lastComma;
        for (let k in value) {
          if (value.hasOwnProperty(k)) {
            // count++
            // @ts-ignore - TODO
            childEntry = buildDom(value[k], k);
          

            // Add comma (before sizeComment if present, otherwise at end)
            const comma = React.cloneElement(templates.t_commaText);
            blockInner.push(childEntry);
            blockInner.push(comma);
            lastComma = comma;
          }
        }
                 entry.push(
                   <span className="block pl-8">
                     <span className="border-l-2 border-indigo-500 block">
                       {blockInner}
                     </span>
                   </span>
                 );

        // Now remove the last comma
        assert(
          // @ts-ignore
          typeof childEntry !== "undefined" && typeof lastComma !== "undefined"
        );
      }

      // Add closing brace
      entry.push(React.cloneElement(templates.t_cBrace));

      //   // Add data attribute to indicate size @todo: wdswe
      //   entry.dataset.size = ` // ${collectionSize} ${
      //     collectionSize === 1 ? "item" : "items"
      //   }`;

      break;
    }

    case TYPE_ARRAY: {
      assert(Array.isArray(value));

      // Add opening bracket
      entry.push(React.cloneElement(templates.t_oBracket));

      // Unless it's empty, add blockInner containing inner vals
      if (nonZeroSize) {
        // Add ellipsis
          entry.push(React.cloneElement(templates.t_ellipsis));
          blockInner = [];
        // For each key/value pair, add the markup
        for (
          let i = 0, length = value.length, lastIndex = length - 1;
          i < length;
          i++
        ) {
          childEntry = buildDom(value[i], false);
            blockInner.push(childEntry);
          // If not last one, add comma
          if (i < lastIndex) {
            const comma = React.cloneElement(templates.t_commaText);
                blockInner.push(comma)
          } 
        }
                      entry.push(
                        <span className="block pl-8">
                          <span className="border-l-2 border-indigo-500 block">
                            {blockInner}
                          </span>
                        </span>
                      );
      }
      // Add closing bracket
      entry.push(React.cloneElement(templates.t_cBracket));

      // Add data attribute to indicate size
      //   entry.dataset.size = ` // ${collectionSize} ${
      //     collectionSize === 1 ? "item" : "items"
      //   }`;

      break;
    }

    case TYPE_BOOL: {
      if (value) entry.push(templates.t_true.cloneNode(true));
      else entry.push(templates.t_false.cloneNode(true));
      break;
    }

    case TYPE_NULL: {
      entry.push(templates.t_null.cloneNode(true));
      break;
    }
  }

  return entry;
};
