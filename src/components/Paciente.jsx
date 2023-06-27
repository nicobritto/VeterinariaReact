

const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
                <span className="font-normal  normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
                <span className="font-normal  normal-case">Nico</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {' '}
                <span className="font-normal  normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {' '}
                <span className="font-normal  normal-case">10 Diciembre 2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {' '}
                <span className="font-normal  normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugiat adipisci libero pariatur amet eos ad suscipit provident enim minus neque explicabo error et expedita porro fuga quod, a soluta.</span>
            </p>

        </div>
    )
}

export default Paciente