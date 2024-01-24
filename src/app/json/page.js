"use client";
import React, { useEffect } from "react";
import { buildDom } from "../utils/buildDom";
import { SAMPLE } from "../utils/sample";

export default function PricingPage() {
  //useEffect(() => {

      const res = buildDom(SAMPLE, false);
      console.log("ankur: ", res, document);
 // })


  return (
    <div>
      <h1>Pricing</h1>
      <div dangerouslySetInnerHTML={{ __html: res }}>

      </div>

    </div>
  );
}
