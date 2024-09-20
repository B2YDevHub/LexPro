
import { useForm } from "react-hook-form";
import { Buttom } from "../buttom";
import { Input } from "../input";
import { TextArea } from "../textArea";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const formSchema = yup.object({
    name: yup.string().required('Informe o seu nome'),
    email: yup.string().email().required('Informe o seu telefone'),
    phone: yup.number().integer().min(8).required('Informe o seu email'),
    Subject: yup.string().required('Informe o assunto'),
    message: yup.string().required('Informe uma mensagem'),
  });
  
  type FormSchema = yup.InferType<typeof formSchema>

export function FormContact () {

      async function handleSendEmail(data: FormSchema) {
        try {
          
        } catch (error) {
          
        }
      }

    return (
        <form  className="flex flex-col justify-center bg-gray700 p-14 gap-6 w-full rounded-[1.25rem]">

          <h1 className="text-2xl text-brown400 font-bold uppercase">Formulário de Contato</h1>
  
          <div className="flex flex-col justify-center gap-5">
            <Input type="text" placeholder="Nome completo"/>

            <div className="cell:flex-row flex flex-col items-center justify-between gap-[1rem] w-full">
                <Input type="tel" placeholder="Telefone/Whatsapp"/>
                <Input type="email" placeholder="E-mail"/>
            </div>

            <Input type="text" placeholder="Assunto"/>

            <TextArea placeholder="Mensagem" />
          </div>
          
          <Buttom variant="PRIMARY" title="enviar mensagem"/>
        </form>
    )
}