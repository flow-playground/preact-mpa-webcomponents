import register from "preact-custom-element";

const Slot = ({ children }: any) => (
  <div style="background-color: #ddd">{children}</div>
);
// childrenはshadowじゃないと使えない
register(Slot, "x-slot", [], { shadow: true });
