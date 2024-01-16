import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { SobreMim } from "@/views/sobre_mim";

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