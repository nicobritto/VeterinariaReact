const Error = ({children}) => {
    return (
        <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded'>
            <p>{children}</p>
        </div>
    )
}

export default Error