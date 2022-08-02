import React from "react";


interface ErrorProps {
    error: string
}

const Error = ({error} : ErrorProps) => {
    return (<p className="text-center">{error}</p>)
}
export default Error;