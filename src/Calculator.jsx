import React, { useState } from 'react';
import Axios from 'axios';

function Calculator() {
    const [pincode, setpincode] = useState(411014);
    const [result, setResult] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.get(`http://localhost:3000/getPincodeData?pincode=${pincode}`);
            console.log(response.data[0].PostOffice);
            setResult(response.data[0].PostOffice);

            alert("Response Recived")
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <>
            <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                <div className="bg-white p-10 w-7xl ml-10 rounded border-2 border-gray-600">
                    <h2 className="text-2xl font-bold mb-10">Post Office Finder WebApp:</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                            <p>Location ZipCode:</p>
                            <input
                                type="number"
                                value={pincode}
                                onChange={(e) => setpincode(e.target.value)}
                                className="px-4 py-2 max-w-40 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                placeholder="Enter Pincode"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>




                <>
                    {result.length === 0 ?
                        <div className='mt-10'>
                            Enter Pincode value
                        </div>
                        :
                        <div className='mt-10'>
                            <h2 className="text-lg font-semibold mb-4">Postal Pincode Data</h2>
                            <table className="border-collapse border border-gray-400">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2">Name</th>
                                        <th className="border border-gray-400 px-4 py-2">Branch Type</th>
                                        <th className="border border-gray-400 px-4 py-2">District</th>
                                        <th className="border border-gray-400 px-4 py-2">Division</th>
                                        <th className="border border-gray-400 px-4 py-2">Region</th>
                                        <th className="border border-gray-400 px-4 py-2">Block</th>
                                        <th className="border border-gray-400 px-4 py-2">Pincode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-400 px-4 py-2">{item.Name}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.BranchType}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.District}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.Division}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.Region}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.Block}</td>
                                            <td className="border border-gray-400 px-4 py-2">{item.Pincode}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    }

                </>

            </div>



        </>

    );
}

export default Calculator;
