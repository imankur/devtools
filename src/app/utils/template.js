import React, { useEffect } from "react";



const dd = document || {};
const baseSpan = dd.createElement("span");

const base = () => <span></span>

export const createBlankSpan = () => baseSpan.cloneNode(false);

const spanWithClass = (className) => <span className={className}></span>





const KeySpan = (text) => <span className="k">{text}</span>;


const spanWithBoth = (innerText, className) => <span className={className}>{innerText}</span>

const SpanBoth = (innerText, className) => <span className={className}>{innerText}</span>;




const getSpanWithClass = (className) => {
  const span = createBlankSpan();
  span.className = className;
  return span;
};

const getSpanWithBoth = (innerText, className) => {
  const span = createBlankSpan();
  span.className = className;
  span.innerText = innerText;
  return span;
};

export const templates = {
  t_entry: spanWithClass("entry"),
  t_exp: spanWithClass("e"),
  t_key: spanWithClass("k"),
  t_string: spanWithClass("s"),
  t_number: spanWithClass("n"),

  t_null: spanWithBoth("null", "nl"),
  t_true: spanWithBoth("true", "bl"),
  t_false: spanWithBoth("false", "bl"),

  t_oBrace: spanWithBoth("{", "b text-[13px] block"),
  t_cBrace: spanWithBoth("}", "b text-[13px] block"),
  t_oBracket: spanWithBoth("[", "b text-[13px] block"),
  t_cBracket: spanWithBoth("]", "b text-[13px] block"),

  t_sizeComment: spanWithClass("sizeComment"),

  t_ellipsis: spanWithClass("ell"),
  t_blockInner: spanWithClass("blockInner"),

  t_colonAndSpace: spanWithClass("ell"), //document.createTextNode(":\u00A0"),
  t_commaText: <span className="ell">&#44;</span>, //document.createTextNode(","),
  t_dblqText: spanWithClass("ell"), //document.createTextNode('"'),
};
