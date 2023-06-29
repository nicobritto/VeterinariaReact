import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ( {pacientes,setPacientes,paciente,setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);

        }
    },[paciente])

    const generarId =() =>{
        const random=Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random+fecha;
    }

    const handleSubmit = (e) => {//validar el formulario
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio');
            setError(true);
            return;
        } 
            setError(false);

            const objetoPaciente={
                nombre,
                propietario,
                email,
                fecha,
                sintomas
            }
            if (paciente.id){
                //editando actualiznado  el registro 
                objetoPaciente.id=paciente.id;
                const pacientesActualizados=pacientes.map(pacienteSta=>
                    pacienteSta.id===paciente.id ? objetoPaciente:pacienteSta
                );

                setPacientes(pacientesActualizados);
                setPaciente({})

            }else{
                //nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes,objetoPaciente]);

            }
            
         
           //reiniciamos el formulario para que no quede setiado los datos
           setNombre('');
           setPropietario('');
           setEmail('');
           setFecha('');
           setSintomas('');
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounder-lg py-10 px-5  mb-10">
               
                {error && <Error> Todos los campos son obligatorios</Error> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>

                    <input id="mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md" type="text" placeholder="Nombre Mascota" />

                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">Nombre Propietario</label>

                    <input id="propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md" type="text" placeholder="Nombre Propietario" />

                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Email</label>

                    <input id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md" type="email" placeholder="Email de contacto" />

                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">Alta</label>

                    <input id="alta"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md" type="date" />

                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">Sintomas</label>
                    <textarea
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)} id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md" placeholder="Describe los sintomas" />
                </div>

                <input type="submit" value={paciente.id ? 'Editar Paciente':'Agregar Paciente'}  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                 hover:bg-indigo-700 cursor-pointer"/>
            </form>

        </div>
    )
}



export default Formulario