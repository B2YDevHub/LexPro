import { Buttom } from "@/components/buttom";
import { HeaderHome } from "../components/viewComponents/headerHome";
import { Card } from "../components/viewComponents/cardHome";
import { SvgPerson } from "../../public/svg/svgPerson";
import { SvgList } from "../../public/svg/svgList";
import { SvgDocument } from "../../public/svg/svgDocument";
import { Tag } from "../components/viewComponents/tag";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt  } from "react-icons/fa";
import { Carousel } from "../components/viewComponents/carousel";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FormContact } from "@/components/formContact";


export default function Home() {
  return (
    <div>
      <section className="cell:flex-row py-20 px-8 tablet:px-[8.5rem] gap-20 flex flex-col items-center justify-between bg-gray800 bg-[url('/bgImage1.png')] bg-no-repeat bg-cover">
        <div className="cell:block flex flex-col items-center space-y-[2.125rem]">

          <h1 className="text-5xl text-white content-start flex justify-end cell:text-start text-center items-center content font-semibold gap-2 before:bg-brown400 before:w-2 cell:before:h-24 before:mr-3 before:flex">
            Sua Empresa protegida,  crescimento garantido!
          </h1>

          <p className="cell:text-start text-center text-brown400 max-w-[50rem] text-[1.25rem] font-medium font-inter">
            Alavanque seus negócios com nossa expertise jurídica  
            sob medida.Simplificamos a conformidade legal para 
            que você possa focar no crescimento.
          </p>

          <Buttom variant="PRIMARY" title="Nossos Serviços"/>
        </div>
        <div className="cell:block flex flex-col items-center cell:pl-0 pl-14 w-full cell:w-[34rem] h-auto relative">
          <div className="flex h-[10rem] w-[10rem] flex-col items-center justify-start rounded absolute bottom-0 px-3 left-[-1rem] cell:left-[-4rem] bg-gradient-to-br from-brown400  via-brown500 via-70% to-brown300 to-100%">
            <h1 className="text-[5.6rem] h-[7rem] text-white font-light">20</h1>
            <span className="text-center text-brown300 text-sm font-bold uppercase">anos de experiência</span>
          </div>
          <img className="object-cover h-auto w-full" src="1.png" alt="Imagem de um advogado sorridente" />
        </div>
      </section>

      <section className="py-12 w-full cell:block flex flex-col items-center justify-center px-8 tablet:px-[8.5rem] bg-gray600 relative">
        <div className="absolute top-[5rem] left-[-15rem] w-[30rem] h-[30rem] opacity-50 blur-[125px] rounded-br-[100%] bg-gray500"></div>
        <HeaderHome title="Atuação" subTitle="áreas de"/>

        <div className="cell:flex-row flex flex-col w-full items-center justify-between mt-20 gap-[1.87rem]">
          <Card subTitle="Consultoria" title="Jurídica" svgChildren={<SvgPerson/>}>
            <>
              <p>Análise e aconselhamento jurídico para tomadas de decisões estratégicas.</p>
              <p>Desenvolvimento de estratégias legais alinhadas aos objetivos de negócios.</p>
            </>
          </Card>

          <Card subTitle="assessoria em" title="contratos" svgChildren={<SvgList/>}>
            <p>
              Revisão, elaboração e negociação de
              contratos complexos. Garantia de que 
              acordos contratuais atendam aos
              interesses e requisitos legais.
            </p>
          </Card>

          <Card subTitle="Gestão dE" title="riscos" svgChildren={<SvgDocument/>}>
            <>
              <p>Identificação proativa e gestão de riscos legais.</p>
              <p>Desenvolvimento de estratégias para mitigar potenciais impactos legais.</p>
            </>
          </Card>
        </div>

        <div className="cell:flex grid grid-cols-1 items-center justify-between gap-11 mt-24">
          <img className="object-cover cell:w-auto w-full h-auto" src="2.png" alt="Imagem de um advogado" />

          <div className="flex flex-col cell:items-start items-center justify-center  gap-12">
            <div className="cell:block flex flex-col items-center">
              <span className="text-2xl font-bold text-brown400 uppercase">conheça nosso</span>
              <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">Escritório</h1>
            </div>

            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-center max-w-[50rem]">
              A LexPro destaca-se por oferecer uma gama abrangente de serviços jurídicos, personalizados para atender 
              às demandas exclusivas de seus clientes corporativos. A abordagem estratégica e a especialização 
              em áreas cruciais para as empresas estabelecem a LexPro como parceira confiável na jornada 
              de crescimento e sucesso de seus clientes.
            </p>

            <div className="flex flex-col items-center cell:items-start gap-6">
              <span className="text-2xl font-bold text-brown400 uppercase relative">nossos Diferenciais:</span>

              <div className="flex flex-wrap justify-center cell:justify-start gap-6 max-w-[50rem]">
                <Tag title="Especialização Profunda"/>
                <Tag title="Especialização Profunda"/>
                <Tag title="Especialização Profunda"/>
                <Tag title="Especialização Profunda"/>
                <Tag title="Especialização Profunda"/>
                <Tag title="Especialização Profunda"/>
              </div>
            </div>

            <Buttom title="fale com um especialista" variant="PRIMARY"/>
          </div>

        </div>
      </section>

      <section className="py-12 px-8 tablet:px-[8.5rem] gap-12 flex flex-col items-center justify-center bg-[url('/bgImage2.png')] bg-no-repeat bg-cover">
         <HeaderHome title="Profissionais" subTitle="conheça nossos"/>

         <div className="flex cell:flex-row flex-col items-center justify-between gap-[1.875rem] w-full">

           <div className="flex flex-col items-center justify-center gap-9 flex-1">
            <img src="dr1.png" alt="Foto de um advogado" className="object-cover w-full"/>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.75rem] text-brown400 font-semibold">Dr. Mário Sérgio</h2>
              <span className="text-base text-gray500">Direito Trabalhista</span>
            </div>

            <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] w-full">
              <a href="">
                <FaWhatsapp className="size-6"/>
              </a>
              <a href="">
                <FaInstagram className="size-6"/>
              </a>
              <a href="">
                <FaLinkedin className="size-6"/>
              </a>
              <a href="">
                <FaFacebook className="size-6"/>
              </a>
            </nav>  
           </div>

           <div className="flex flex-col items-center justify-center gap-9 flex-1">
            <img src="dr2.png" alt="Foto de um advogado" className="object-cover w-full"/>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.75rem] text-brown400 font-semibold">Dra. Anna Cruise</h2>
              <span className="text-base text-gray500">Direito Previdenciário</span>
            </div>

            <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] w-full">
              <a href="">
                <FaWhatsapp className="size-6"/>
              </a>
              <a href="">
                <FaInstagram className="size-6"/>
              </a>
              <a href="">
                <FaLinkedin className="size-6"/>
              </a>
              <a href="">
                <FaFacebook className="size-6"/>
              </a>
            </nav>  
           </div>

           <div className="flex flex-col items-center justify-center gap-9 flex-1">
            <img src="dr3.png" alt="Foto de um advogado" className="object-cover w-full"/>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.75rem] text-brown400 font-semibold">Dr. Nicole Sanches</h2>
              <span className="text-base text-gray500">Direito Empresarial</span>
            </div>

            <nav className="flex items-center justify-center gap-[10%] bg-brown400 rounded h-[3.188rem] w-full">
              <a href="">
                <FaWhatsapp className="size-6"/>
              </a>
              <a href="">
                <FaInstagram className="size-6"/>
              </a>
              <a href="">
                <FaLinkedin className="size-6"/>
              </a>
              <a href="">
                <FaFacebook className="size-6"/>
              </a>
            </nav>  
           </div>

         </div>
      </section>

      <section className="py-12 px-8 tablet:px-[8.5rem] gap-[4.375rem] flex flex-col items-center justify-center bg-gray600">
        <HeaderHome title="Clientes" subTitle="o que dizem nossos"/>
        
        <Carousel>
          <div className="flex">
            <div className='flex flex-col items-center justify-center gap-6 min-w-full'>
              <p className="text-[1.75rem] text-center w-[60%]">
                “A LexPro foi essencial para nossa empresa, 
                oferecendo consultoria jurídica estratégica impecável. 
                Profissionais dedicados e soluções personalizadas fazem 
                da LexPro nossa escolha confiável em questões legais.”
              </p>

              <div className="flex flex-col items-center justify-center">
                 <h2 className="text-[1.75rem] font-semibold">Eduardo Silva</h2>
                 <span className="text-xl text-brown600 ">CEO, Tech Innovate Solutions</span>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-6 min-w-full'>
              <p className="text-[1.75rem] text-center w-[60%]">
                “A LexPro foi essencial para nossa empresa, 
                oferecendo consultoria jurídica estratégica impecável. 
                Profissionais dedicados e soluções personalizadas fazem 
                da LexPro nossa escolha confiável em questões legais.”
              </p>

              <div className="flex flex-col items-center justify-center">
                 <h2 className="text-[1.75rem] font-semibold">Eduardo Silva</h2>
                 <span className="text-xl text-brown600 ">CEO, Tech Innovate Solutions</span>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-6 min-w-full'>
              <p className="text-[1.75rem] text-center w-[60%]">
                “A LexPro foi essencial para nossa empresa, 
                oferecendo consultoria jurídica estratégica impecável. 
                Profissionais dedicados e soluções personalizadas fazem 
                da LexPro nossa escolha confiável em questões legais.”
              </p>

              <div className="flex flex-col items-center justify-center">
                 <h2 className="text-[1.75rem] font-semibold">Eduardo Silva</h2>
                 <span className="text-xl text-brown600 ">CEO, Tech Innovate Solutions</span>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="py-[7.5rem] px-8 tablet:px-[8.5rem] gap-[6rem] cell:flex-row flex flex-col items-center justify-between bg-gray900">
          <div className="flex flex-col cell:items-start items-center justify-center gap-14 w-full">
            <div className="cell:block flex flex-col items-center">
              <span className="text-2xl font-bold text-brown400 uppercase">conheça nosso</span>
              <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">Escritório</h1>
            </div>

            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-center max-w-[50rem]">
              A LexPro destaca-se por oferecer uma gama abrangente de serviços jurídicos, personalizados para atender 
              às demandas exclusivas de seus clientes corporativos. A abordagem estratégica e a especialização 
              em áreas cruciais para as empresas estabelecem a LexPro como parceira confiável na jornada 
              de crescimento e sucesso de seus clientes.
            </p>

            <div className="flex flex-col justify-center gap-5">
                <span className="flex text-nowrap items-center space-x-2.5">
                    <FaLocationDot className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">Rua 987, St. Pedro, Goiânia-GO.</p>
                </span>
                <span className="text-nowrap flex items-center space-x-2.5">
                    <FaPhoneAlt className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">+55 62 98765-4321</p>
                </span>
                <span className="text-nowrap flex items-center space-x-2.5">
                    <MdEmail className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">contato@lexpro.adv.br</p>
                </span>
            </div>
          </div>

          <FormContact />
      </section>
    </div>
  )
}