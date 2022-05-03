import React from "react";
import List from "./List";

export default function Main() {
  return (
    <main>
      <List header="Todo" />
      <List header="Doing" />
      <List header="Done" />
    </main>
  );
}
