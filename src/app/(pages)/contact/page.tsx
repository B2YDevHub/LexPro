import { Card } from "../../../components/viewComponents/cardContact";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FormContact } from "@/components/formContact";

export default function Contact () {
    return (
        <div className="relative">
          <div className="absolute top-[1rem] left-[-15rem] w-[20rem] h-[20rem] opacity-50 blur-[125px] rounded-br-[100%] bg-gray500"></div>
          <div className="absolute top-[1rem] right-[-15rem] w-[20rem] h-[20rem] opacity-50 blur-[125px] rounded-br-[100%] bg-gray500"></div>
          
            <section className="py-20 px-8 tablet:px-[8.5rem] gap-[8rem] flex flex-col items-center justify-between bg-gray600">
              <p className="text-gray500 text-center">
                Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas. 
                Entre em contato conosco agora para descobrir como a LexPro pode impulsionar o sucesso e a 
                segurança jurídica de sua empresa. Sua jornada para o sucesso começa aqui.
              </p>
              
              <div className="cell:flex-row flex flex-col justify-between items-center gap-8 w-full mb-[14%] max-[1700px]:mb-[16%] max-[1000px]:mb-[20%] max-[700px]:mb-[30%] max-[600px]:mb-[35%]">
                <Card svgChildren={<FaLocationDot className="size-12 fill-brown400"/>} title="Endereço" subTitle="Rua 987, St. Pedro, Goiânia-GO."/>
                <Card svgChildren={<FaPhoneAlt className="size-12 fill-brown400"/>} title="Telefone" subTitle="+55 (62) 9876-54321"/>
                <Card svgChildren={<MdEmail className="size-12 fill-brown400"/>} title="E-mail" subTitle="contato@lexpro.adv.br"/>
              </div>
            </section>
            <section className="gap-[8rem] flex flex-col items-center justify-center bg-gray900">
                <div className="px-8 tablet:px-[8.5rem] mt-[-14rem] max-[600px]:w-full">
                  <FormContact />
                </div>

                <div className="w-full">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.431109095239!2d-49.25802506329394!3d-16.71609317818158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1b45cc742f5%3A0x3541e3297a0952e4!2sResidencial%20Porto%20Ludovico!5e0!3m2!1sen!2sbr!4v1726803413569!5m2!1sen!2sbr" 
                    width="100%" 
                    height="500" 
                    loading="lazy">
                    </iframe>
                </div>
            </section>
        </div>
    )
}