import { FaPhoneAlt } from "react-icons/fa";
import { FormContact } from "@/components/formContact";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SvgPerson } from "../../../../public/svg/svgPerson";
import { Buttom } from "@/components/buttom";


export default function Acting() {
  return (
    <div>
      <section className="py-20 px-8 tablet:px-[8.5rem] gap-[8rem] flex flex-col items-center justify-between bg-gray600 relative">

        <div className="cell:flex-row flex flex-col cell:items-start items-center justify-between gap-20 w-full">
          <div className="flex flex-col cell:items-start items-center justify-center gap-10 w-full">
            <div className="cell:items-start flex flex-col items-center gap-3">
              <SvgPerson/>
              <div>
                <span className="text-lg text-white uppercase">Consultoria</span>
                <h1 className="text-[1.75rem] text-white font-bold leading-6">Jurídica</h1>
              </div>
            </div>
            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-justify max-w-[40rem]">
               A LexPro Consultoria Jurídica foi fundada por um grupo de profissionais altamente qualificados e experientes no campo jurídico, 
              unidos por uma visão compartilhada de fornecer serviços jurídicos inovadores e estratégicos para empresas.<br />
              <br />
              A empresa nasceu da necessidade de preencher uma lacuna no mercado, oferecendo consultoria 
              jurídica especializada que vai além da abordagem tradicional, integrando soluções estratégicas e 
              tecnológicas para atender às complexidades do mundo empresarial contemporâneo.<br />
              <br />
              Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas.
            </p>

            <Buttom title="Falar com um especialista"/>
          </div>

          <img src="5.png" alt="mesa do tribunal" className="object-cover w-[50%] h-auto"/>

        </div>

        <div className="cell:flex-row flex flex-col-reverse cell:items-start items-center justify-between gap-12 w-full">

        <img src="6.png" alt="mesa do tribunal" className="object-cover w-[50%] h-auto"/>
          
          <div className="flex justify-end direction-alternate-reverse cell:w-full">
            <div className="flex flex-col cell:items-start items-center justify-center gap-10">
              <div className="cell:items-start flex flex-col items-center gap-3">
                <SvgPerson/>
                <div>
                  <span className="text-lg text-white uppercase">Consultoria</span>
                  <h1 className="text-[1.75rem] text-white font-bold leading-6">Jurídica</h1>
                </div>
              </div>
              <p className="text-base font-normal font-inter text-gray500 cell:text-start text-justify max-w-[40rem]">
                A LexPro Consultoria Jurídica foi fundada por um grupo de profissionais altamente qualificados e experientes no campo jurídico, 
                unidos por uma visão compartilhada de fornecer serviços jurídicos inovadores e estratégicos para empresas.<br />
                <br />
                A empresa nasceu da necessidade de preencher uma lacuna no mercado, oferecendo consultoria 
                jurídica especializada que vai além da abordagem tradicional, integrando soluções estratégicas e 
                tecnológicas para atender às complexidades do mundo empresarial contemporâneo.<br />
                <br />
                Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas.
              </p>

              <Buttom title="Falar com um especialista"/>
            </div>
          </div>

        </div>


        <div className="cell:flex-row flex flex-col cell:items-start items-center justify-between gap-20 w-full">
          <div className="flex flex-col cell:items-start items-center justify-center gap-10 w-full">
            <div className="cell:items-start flex flex-col items-center gap-3">
              <SvgPerson/>
              <div>
                <span className="text-lg text-white uppercase">Consultoria</span>
                <h1 className="text-[1.75rem] text-white font-bold leading-6">Jurídica</h1>
              </div>
            </div>
            <p className="text-base font-normal font-inter text-gray500 cell:text-start text-justify max-w-[40rem]">
               A LexPro Consultoria Jurídica foi fundada por um grupo de profissionais altamente qualificados e experientes no campo jurídico, 
              unidos por uma visão compartilhada de fornecer serviços jurídicos inovadores e estratégicos para empresas.<br />
              <br />
              A empresa nasceu da necessidade de preencher uma lacuna no mercado, oferecendo consultoria 
              jurídica especializada que vai além da abordagem tradicional, integrando soluções estratégicas e 
              tecnológicas para atender às complexidades do mundo empresarial contemporâneo.<br />
              <br />
              Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas.
            </p>

            <Buttom title="Falar com um especialista"/>
          </div>

          <img src="7.png" alt="mesa do tribunal" className="object-cover w-[50%] h-auto"/>

        </div>
      </section>
          
      <section className="py-[7.5rem] px-8 tablet:px-[8.5rem] gap-[6rem] form:flex-row flex flex-col items-center justify-between bg-gray900">
          <div className="flex flex-col form:items-start items-center justify-center gap-14 w-full">
            <div className="form:block flex flex-col items-center">
              <span className="text-2xl font-bold text-brown400 uppercase">conheça nosso</span>
              <h1 className="text-6xl text-gray500 font-light tracking-[.8rem]">Escritório</h1>
            </div>

            <p className="text-base font-normal font-inter text-gray500 form:text-start text-justify max-w-[50rem]">
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
