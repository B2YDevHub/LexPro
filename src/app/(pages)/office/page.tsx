// import { Buttom } from "@/components/buttom";
// import { HeaderHome } from "./(components)/headerHome";
// // import { Card } from "./(components)/card";
// import { SvgPerson } from "./(components)/svg/svgPerson";
// import { SvgList } from "./(components)/svg/svgList";
// import { SvgDocument } from "./(components)/svg/svgDocument";
// import { Tag } from "./(components)/tag";
import { HeaderHome } from "../../home/(components)/headerHome";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Office() {
  return (
    <div>
      <section className="cell:flex-row py-20 px-8 tablet:px-[8.5rem] gap-10 flex flex-col items-center justify-between bg-gray800  bg-no-repeat bg-cover">
        <div className="cell:block flex flex-col items-center space-y-[2.125rem]">

          <h1 className="text-5xl text-white content-start flex justify-end cell:text-start text-center items-center content font-semibold gap-2 before:bg-brown400 before:w-2 cell:before:h-24 before:mr-3 before:flex">
            Sua Empresa protegida,  crescimento garantido!
          </h1>

          <p className="cell:text-start text-center text-brown400 text-[1.25rem] font-medium font-inter">
            Alavanque seus negócios com nossa expertise jurídica <br />
            sob medida.Simplificamos a conformidade legal para <br />
            que você possa focar no crescimento.
          
          </p>

          {/* <Buttom variant="PRIMARY" title="Nossos Serviços"/> */}
        </div>
        <div className="cell:block flex flex-col items-center cell:pl-0 pl-14 w-full cell:w-[34rem] h-[32rem] relative">
          <div className="flex h-[10rem] w-[10rem] flex-col items-center justify-start rounded absolute bottom-0 px-3 left-[-1rem] cell:left-[-4rem] bg-gradient-to-br from-brown400  via-brown500 via-70% to-brown300 to-100%">
            <h1 className="text-[5.6rem] h-[7rem] text-white font-light">20</h1>
            <span className="text-center text-brown300 text-sm font-bold uppercase">anos de experiência</span>
          </div>
          <img className="object-cover h-[32rem] w-full" src="1.png" alt="Imagem de um advogado sorridente" />
        </div>
      </section>
      <div className="nav">
        <h1>Office</h1>
        <div className="nav-info 1">
          <div className="flex flex-col cell:items-start items-center justify-center  gap-12">
            <div className="cell:block flex flex-col items-center">
              <span className="text-2xl font-bold text-brown400 uppercase">conheça nosso</span>
              <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">Diferenciais</h1>
            </div>
            <img src='3.png' alt="" />
            <h3>quem somos</h3>
            <h1>LexPro</h1>
            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-center max-w-[40rem]">A LexPro Consultoria Jurídica foi fundada por um grupo de profissionais altamente qualificados e experientes no campo jurídico, unidos por uma visão compartilhada de fornecer serviços jurídicos inovadores e estratégicos para empresas.<br />

              A empresa nasceu da necessidade de preencher uma lacuna no mercado, oferecendo consultoria jurídica especializada que vai além da abordagem tradicional, integrando soluções estratégicas e tecnológicas para atender às complexidades do mundo empresarial contemporâneo.<br />

              Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas.</p>
          </div>
        </div>
        <div className="flex flex-col cell:items-start items-center justify-center  gap-12">
          <div className="cell:block flex flex-col items-center">
            <span className="text-2xl font-bold text-brown400 uppercase">conheça nosso</span>
            <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">Escritório</h1>
          </div>

          <p className="text-base font-normal font-inter text-gray500 cell:text-start text-center max-w-[40rem]">
            A LexPro destaca-se por oferecer uma gama abrangente de serviços jurídicos, personalizados para atender
            às demandas exclusivas de seus clientes corporativos. A abordagem estratégica e a especialização
            em áreas cruciais para as empresas estabelecem a LexPro como parceira confiável na jornada
            de crescimento e sucesso de seus clientes.
          </p>

          <div className="flex flex-col items-center cell:items-start gap-6">
            <span className="text-2xl font-bold text-brown400 uppercase relative">nossos Diferenciais:</span>

            <div className="flex flex-wrap justify-center cell:justify-start gap-6 max-w-[50rem]">
              {/* <Tag title="Especialização Profunda" />
            <Tag title="Especialização Profunda" />
            <Tag title="Especialização Profunda" />
            <Tag title="Especialização Profunda" />
            <Tag title="Especialização Profunda" />
            <Tag title="Especialização Profunda" /> */}
            </div>
          </div>
          {/* 
        <Buttom title="fale com um especialista" variant="PRIMARY" /> */}
          <section className="py-12 px-8 tablet:px-[8.5rem] gap-12 flex flex-col items-center justify-center bg-[url('/bgImage2.png')] bg-no-repeat bg-cover">
            <HeaderHome title="Profissionais" subTitle="conheça nossos" />

            <div className="flex cell:flex-row flex-col items-center justify-between gap-[1.875rem] w-full">

              <div className="flex flex-col items-center justify-center gap-9 flex-1">
                <img src="dr1.png" alt="Foto de um advogado" className="object-cover w-full" />

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[1.75rem] text-brown400 font-semibold">Dr. Mário Sérgio</h2>
                  <span className="text-base text-gray500">Direito Trabalhista</span>
                </div>

                <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] w-full">
                  <a href="">
                    <FaWhatsapp className="size-6" />
                  </a>
                  <a href="">
                    <FaInstagram className="size-6" />
                  </a>
                  <a href="">
                    <FaLinkedin className="size-6" />
                  </a>
                  <a href="">
                    <FaFacebook className="size-6" />
                  </a>
                </nav>
              </div>

              <div className="flex flex-col items-center justify-center gap-9 flex-1">
                <img src="dr2.png" alt="Foto de um advogado" className="object-cover w-full" />

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[1.75rem] text-brown400 font-semibold">Dra. Anna Cruise</h2>
                  <span className="text-base text-gray500">Direito Previdenciário</span>
                </div>

                <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] px-24 w-full">
                  <a href="">
                    <FaWhatsapp className="size-6" />
                  </a>
                  <a href="">
                    <FaInstagram className="size-6" />
                  </a>
                  <a href="">
                    <FaLinkedin className="size-6" />
                  </a>
                  <a href="">
                    <FaFacebook className="size-6" />
                  </a>
                </nav>
              </div>

              <div className="flex flex-col items-center justify-center gap-9 flex-1">
                <img src="dr3.png" alt="Foto de um advogado" className="object-cover w-full" />

                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-[1.75rem] text-brown400 font-semibold">Dr. Nicole Sanches</h2>
                  <span className="text-base text-gray500">Direito Empresarial</span>
                </div>

                <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] px-24 w-full">
                  <a href="">
                    <FaWhatsapp className="size-6" />
                  </a>
                  <a href="">
                    <FaInstagram className="size-6" />
                  </a>
                  <a href="">
                    <FaLinkedin className="size-6" />
                  </a>
                  <a href="">
                    <FaFacebook className="size-6" />
                  </a>
                </nav>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>

  )
}
