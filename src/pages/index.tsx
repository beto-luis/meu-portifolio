import { Header } from "@/pages/components/header";
import { Footer } from "@/pages/components/footer";
import { SobreMim } from "./sobre_mim";

function _app() {
  
  return (
    <div>
      <Header />
      <SobreMim />
      <Footer />
    </div>
  );
}

export default _app;