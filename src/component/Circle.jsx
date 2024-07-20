import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios"

function Circle() {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_SERVER);
                setData(response.data);
            } catch (error) {
                setIsError(true);
                setErrorMessage(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {isError ? (<h1 className="text-center h-screen text-white">{errorMessage}</h1>) : (<div className='relative w-[910px] h-[910px] justify-center items-center flex rounded-full border-2 border-white animate-circular-rotate'>
                <div className='relative w-[690px] h-[690px] justify-center items-center flex rounded-full border-2 border-white '>
                    <div className='relative w-[380px] h-[380px] rounded-full border-2 flex justify-center items-center border-white animate-circular-rotate'>
                        <div className='absolute w-[150px] h-[150px] flex justify-center items-center rounded-full  bg-radient' >
                            <p className='fixed w-[30%] text-white text-[0.5rem] text-center '>
                                <span className="text-[0.9rem] font-bold text-blue-900 ">Income Proof</span>
                                <br />
                                <span className="text-blue-700">{data[0]?.["Income Proof"]}</span>
                            </p >
                        </div >
                        <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full bottom-0 right-[60%] bg-radient animate-circular-rotate ml-[50%]' >
                            <p className='fixed w-full text-white text-[0.5rem] text-center'>
                                <span className="text-[0.9rem] font-bold text-blue-900">Photographs</span>
                                <br />
                                <span className="text-blue-700">{data[0]?.["Photographs"]}</span>
                            </p>
                        </div>
                        <div className='absolute w-[120px] h-[120px] rounded-full bottom-[40%] right-[90%]  bg-radient animate-circular-rotate flex justify-center items-center' >
                            <p className='fixed w-full text-white text-[0.5rem] text-center'>
                                <span className="text-[0.9rem] font-bold text-blue-900">Academic Records</span>
                                <br />
                                <span className="text-blue-700">{data[0]?.["Academic Records"]}</span>
                            </p>
                        </div>
                        <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full top-[60%] right-[0%] bg-radient animate-circular-rotate'>
                            <p className='fixed w-full text-white text-[0.5rem] text-center'>
                                <span className="text-[0.9rem] font-bold text-blue-900">Bank Statements</span>
                                <br />
                                <span className="text-blue-700">{data[0]?.["Bank Statements"]}</span>
                            </p>
                        </div>
                        <div className='absolute w-[120px] h-[120px] flex justify-center items-center left-[70%] top-0  rounded-full bg-radient animate-circular-rotate'>
                            <p className='fixed w-full text-white text-[0.5rem] text-center'>
                                <span className="text-[0.9rem] font-bold text-blue-900">Property Documents</span>
                                <br />
                                <span className="text-blue-700">{data[0]?.["Property Documents"]}</span>
                            </p>
                        </div>
                    </div >
                    <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full -bottom-[10%] left-[50%]  bg-radient animate-circular-rotate' >
                        <p className='fixed w-full text-white text-[0.5rem] text-center'>
                            <span className="text-[0.9rem] font-bold text-blue-900">Application Form</span>
                            <br />
                            <span className="text-blue-700">{data[0]?.["Application Form"]}</span>
                        </p>
                    </div>
                    <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full top-[80%] left-[10%] bg-radient animate-circular-rotate' >
                        <p className='fixed w-full text-white text-[0.5rem] text-center'>
                            <span className="text-[0.9rem] font-bold text-blue-900">Residence Proof</span>
                            <br />
                            <span className="text-blue-700">{data[0]?.["Residence Proof"]}</span>
                        </p>
                    </div>
                    <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full -right-[10%] bg-radient animate-circular-rotate' >
                        <p className='fixed w-full text-white text-[0.5rem] text-center'>
                            <span className="text-[0.9rem] font-bold text-blue-900">Additional Documents</span>
                            <br />
                            <span className="text-blue-700">{data[0]?.["Additional Documents"]}</span>
                        </p>
                    </div>
                    <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full ml-0 top-0 left-[20%] bg-radient animate-circular-rotate' >
                        <p className='fixed w-full text-white text-[0.5rem] text-center'>
                            <span className="text-[0.9rem] font-bold text-blue-900">Identity Proof</span>
                            <br />
                            <span className="text-blue-700">{data[0]?.["Identity Proof"]}</span>
                        </p>
                    </div>
                </div >
                <div className='absolute w-[120px] h-[120px] flex justify-center items-center rounded-full top-0 left-[20%] bg-radient animate-circular-rotate' >
                    <p className=' w-full text-white text-[0.5rem] text-center'>
                        <span className="text-[0.9rem] font-bold text-blue-900">Guarantor Form</span>
                        <br />
                        <span className="text-blue-700">{data[0]?.["Guarantor Form"]}</span>
                    </p>
                </div>
            </div >)}
        </div>
    )
}

export default Circle;