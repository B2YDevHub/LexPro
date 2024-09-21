'use client'

import { useForm } from "react-hook-form";
import { Buttom } from "../buttom";
import Input from "../input";
import TextArea  from "../textArea";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { toast } from "sonner";

const formSchema = yup.object({
    name: yup.string().required('Informe o seu nome'),
    email: yup.string().email().required('Informe o seu email'),
    phone: yup.number().integer().min(8, 'Tem que haver no minimo 8 caracteres').typeError('Informe o seu telefone').required('Informe o seu telefone'),
    subject: yup.string().required('Informe o assunto'),
    message: yup.string().required('Informe uma mensagem'),
  });
  
  type FormSchema = yup.InferType<typeof formSchema>


export function FormContact () {
    const { handleSubmit, register, formState: {isSubmitting, errors} } = useForm<FormSchema>({
        resolver: yupResolver(formSchema),
    })

    function handleSendEmail(data: FormSchema) {
        console.log(data)
      try {
        toast.success('Email enviado com sucesso');
      } catch (error) {
        toast.success('Infelizmente ocorreu um erro');
      }
    }

    return (
        <form onSubmit={handleSubmit(handleSendEmail)}  className="flex flex-col justify-center bg-gray700 p-14 gap-6 w-full rounded-[1.25rem]">

          <h1 className="text-2xl text-brown400 font-bold uppercase">Formulário de Contato</h1>
  
          <div className="flex flex-col justify-center gap-5">
            <div className="space-y-1">
              <Input type="text" {...register('name')} placeholder="Nome completo"/>
              {errors.name?.message && <p className={`text-sm text-brown400`}>{errors.name?.message}</p>}  
            </div>

            <div className="cell:flex-row flex flex-col items-center justify-between gap-[1rem] w-full">
                <div className="space-y-1 w-full">
                  <Input type="number" {...register('phone')} placeholder="Telefone/Whatsapp"/>
                  {errors.phone?.message && <p className={`text-sm text-brown400`}>{errors.phone?.message}</p>}  
                </div>

                <div className="space-y-1 w-full">
                  <Input type="email" {...register('email')} placeholder="E-mail"/>
                  {errors.email?.message && <p className={`text-sm text-brown400`}>{errors.email?.message}</p>}  
                </div>
            </div>
            
            <div className="space-y-1 w-full">
              <Input type="text" {...register('subject')} placeholder="Assunto"/>
              {errors.subject?.message && <p className={`text-sm text-brown400`}>{errors.subject?.message}</p>}  
            </div>
            
            <div className="space-y-1 w-full">
              <TextArea placeholder="Mensagem" {...register('message')}/>
              {errors.message?.message && <p className={`text-sm text-brown400`}>{errors.message?.message}</p>}  
            </div>
          </div>
          
          <Buttom disabled={isSubmitting} className="disabled:cursor-not-allowed opacity-70" type="submit" variant="PRIMARY" title="enviar mensagem"/>
        </form>
    )
}