import V3Shell, { metadata } from "./v3/layout";
import V3Home from "./v3/page";

export { metadata };

export default function Home() {
  return (
    <V3Shell>
      <V3Home />
    </V3Shell>
  );
}
