"use client";
import React, { useEffect } from "react";
import { buildDom } from "../utils/buildDom";
import { SAMPLE } from "../utils/sample";

export default function PricingPage() {
  //useEffect(() => {

      const Res = buildDom(SAMPLE, false);
      console.log("ankur: ", Res);
 // })


  return (
    <div className="pl-5 pt-5">
      
        {Res}

      

    </div>
  );
}
