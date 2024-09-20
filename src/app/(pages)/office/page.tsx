import { Tag } from "@/app/home/(components)/tag";
import { HeaderHome } from "../../home/(components)/headerHome";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Office() {
  return (
    <div>
      <section className="py-20 px-8 tablet:px-[8.5rem] gap-[8rem] flex flex-col items-center justify-between bg-gray600 relative">
        <div className="absolute top-[1rem] left-[-15rem] w-[20rem] h-[20rem] opacity-50 blur-[125px] rounded-br-[100%] bg-gray500"></div>
        <div className="absolute top-[1rem] right-[-15rem] w-[20rem] h-[20rem] opacity-50 blur-[125px] rounded-br-[100%] bg-gray500"></div>

        <div className="cell:flex-row flex flex-col cell:items-start items-center justify-between gap-20 w-full">
          <div className="flex flex-col cell:items-start items-center justify-center gap-10 w-full">
            <div className="cell:block flex flex-col items-center">
              <span className="text-2xl font-bold text-brown400 uppercase">quem somos</span>
              <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">LexPro</h1>
            </div>
            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-center max-w-[40rem]">
               A LexPro Consultoria Jurídica foi fundada por um grupo de profissionais altamente qualificados e experientes no campo jurídico, 
              unidos por uma visão compartilhada de fornecer serviços jurídicos inovadores e estratégicos para empresas.<br />
              <br />
              A empresa nasceu da necessidade de preencher uma lacuna no mercado, oferecendo consultoria 
              jurídica especializada que vai além da abordagem tradicional, integrando soluções estratégicas e 
              tecnológicas para atender às complexidades do mundo empresarial contemporâneo.<br />
              <br />
              Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas.
            </p>
          </div>

          <img src="3.png" alt="mesa do tribunal" className="object-cover w-[50%] h-auto"/>
        </div>

        <div className="cell:flex-row flex flex-col cell:items-start items-center justify-between gap-12 w-full">
          <img src="4.png" alt="mesa do tribunal" className="object-cover w-[50%] h-auto"/>
          
          <div className="flex justify-end w-full">
            <div className="flex flex-col cell:items-start items-center justify-center gap-12">
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
                  <Tag title="Especialização Profunda" />
                  <Tag title="Especialização Profunda" />
                  <Tag title="Especialização Profunda" />
                  <Tag title="Especialização Profunda" />
                  <Tag title="Especialização Profunda" />
                  <Tag title="Especialização Profunda" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          
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
  )
}
