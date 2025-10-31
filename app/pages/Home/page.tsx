"use client";
import React from "react";

import Equipe from "./Equipe/page";
import HeaderPage from "../Header/page";
import Footerpage from "../Footer/page";

import Sectionone from "./section-one/page";
import Sectiontwo from "./section-two/page";
import Sectionthree from "./section-three/page";
import Sobrepage from "./Sobre/page";
import Form from "./section-abree/formulario";
import AbraaeCard from "./section-abree/page";

export default function EcoRecicla() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeaderPage />

      <Sectionone />

      <Sectiontwo />

      <Sectionthree />

      <Sobrepage />

      <AbraaeCard />

      <Form />

      <Equipe />

      <Footerpage />
    </div>
  );
}
