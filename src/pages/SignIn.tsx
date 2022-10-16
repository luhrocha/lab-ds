import { Checkbox } from "../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import {Text} from "../components/Text";
import { TextInput } from "../components/TextInput";
import Logo from "../Logo";
import axios from "axios";

export function SignIn(){
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  async function handleSignIn(event:FormEvent){
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'luana@teste.com',
      password: '12345678'
    });

    setIsUserSignIn(true);
  }
    return(
      <div className="w-screen h-full flex flex-col justify-center items-center  bg-gray-900 text-gray-100">
        <header className='flex flex-col items-center'>
          <Logo/>
          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>
          <Text size='lg' className='text-gray-400 mt-1'>
            Faça login e comece a usar!
          </Text>
        </header>
        { isUserSignIn &&  <Text>Usuário logado!</Text>}        
        <form action="" className="flex flex-col items-stretch gap-4 w-full max-w-[400px] mt-10 ">
          <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id="email" type={'email'} placeholder="Endereço de e-mail" />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id="password" type={'password'} placeholder="********" />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-2">          
            <Checkbox id="remember"/>
            <Text size="sm" className="text-gray-200">
              Lembar de mim por 30 dias
            </Text>
          </label>
          <Button type="submit" className="mt-4" onClick={handleSignIn}>Entrar na plataforma</Button>
        </form>
        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
          </Text>
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </div>
    );
}