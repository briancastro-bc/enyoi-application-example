import { useState, useEffect, useCallback, } from 'react';
import { get, } from 'idb-keyval';

import { useForm } from 'react-hook-form';

const Example = () => {
  const [isLoading, setIsLoading,] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, },
  } = useForm({
    defaultValues: {
      from: '',
      to: '',
      subject: '',
      cc: '',
      html: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const sendEmail = (data) => {
    console.log('data', data);
    setIsLoading(true);

    fetch('http://localhost:4000/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    }).then(res => {
      // const response = res.json();
      console.log('response', res);
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  };

  return (
    <form className='h-full py-8 px-6 flex flex-col gap-4'>
      <div className='flex items-center'>
        <h2 className='text-2xl font-bold text-gray-800'>
          Enviar email
        </h2>
      </div>
      <div className='h-full flex flex-col gap-4 max-w-[768px] mx-auto w-full'>
        <div className='flex flex-col justify-center'>
          <div className='min-w-[250px] border border-gray-300 flex flex-col py-2 px-4 rounded-md'>
            <label htmlFor='from'>
              Correos electr&oacute;nicos 
            </label>
            <input type='text' id='from' className='focus:outline-none' placeholder='example@mail.com' {...register('to', {
              required: { value: true, message: 'El campo es requerido' }
            })}/>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='min-w-[250px] border border-gray-300 flex flex-col py-2 px-4 rounded-md'>
            <label htmlFor='subject'>
              Asunto
            </label>
            <input type='text' id='subject' className='focus:outline-none' {...register('subject')}/>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='min-w-[250px] border border-gray-300 flex flex-col py-2 px-4 rounded-md'>
            <label htmlFor='cc'>
              Correos en copia
            </label>
            <input type='text' id='cc' className='outline-none' placeholder='example@mail.com, example2@mail.com' {...register('cc')}/>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='min-w-[250px] border border-gray-300 flex flex-col py-2 px-4 rounded-md'>
            <label htmlFor='body'>
              Cuerpo
            </label>
            <input type='text' id='body' className='outline-none' placeholder='Contenido' {...register('html')}/>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          {isLoading ? 
            <p>Cargando...</p> : 
            <button className='px-3 py-2 w-[120px] bg-orange-500 text-white' onClick={handleSubmit(sendEmail)}>
              Enviar
            </button>
          }
        </div>
      </div>
    </form>
  );
};

export default Example;