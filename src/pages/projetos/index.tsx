import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { MeusProjetos } from "@/views/projetos"


function projetos() {
  
  return (
    <div>
      <Header />
      <MeusProjetos />
      <Footer />
    </div>
  );
}

export default projetos;