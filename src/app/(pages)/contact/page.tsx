import { Card } from "./(components)/card";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FormContact } from "@/components/formContact";

export default function Contact () {
    return (
        <div>
            <section className="py-20 px-28 tablet:px-[8.5rem] gap-[8rem] flex flex-col items-center justify-between bg-gray600">
              <p className="text-gray500 text-center">
                Estamos prontos para ser a bússola que guiará sua empresa por águas jurídicas complexas. 
                Entre em contato conosco agora para descobrir como a LexPro pode impulsionar o sucesso e a 
                segurança jurídica de sua empresa. Sua jornada para o sucesso começa aqui.
              </p>
              
              <div className="cell:flex-row flex flex-col justify-between items-center gap-8 w-full mb-[14%]">
                <Card svgChildren={<FaLocationDot className="size-12 fill-brown400"/>} title="Endereço" subTitle="Rua 987, St. Pedro, Goiânia-GO."/>
                <Card svgChildren={<FaPhoneAlt className="size-12 fill-brown400"/>} title="Telefone" subTitle="+55 (62) 9876-54321"/>
                <Card svgChildren={<MdEmail className="size-12 fill-brown400"/>} title="E-mail" subTitle="contato@lexpro.adv.br"/>
              </div>
            </section>
            <section className="gap-[8rem] flex flex-col items-center justify-center bg-gray900">
                <div className="mt-[-14rem]">
                  <FormContact />
                </div>

                <div className="w-full">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7642.492097067225!2d-49.260964367508244!3d-16.71457063564283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1726801791824!5m2!1sen!2sbr"
                        width="100%" height="450">
                    </iframe>
                </div>
            </section>
        </div>
    )
}