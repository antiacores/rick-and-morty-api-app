import React, { useState, useEffect} from 'react'

export const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const result = await response.json();
                console.log(result)
                setData(result);
                setLoading(false);
            } catch {
                console.log("Error fetching data", error);
                setLoading(false);
            }
        }

        fetchData();
    }, []); // Este hook solo se ejecutará una vez

    return (
        <div className="bg-white shadow-lg round-lg p-6 max-w-2xl w-full">
            <div className="">
                <h1 className="text-2xl font-bold text-center mb-4">Personajes</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="grid grid-cols-2 gap-4">
                        {data.results.map((item, index) => {
                            return (
                                <li key={index} className="bg-gray-200 p-4 rounded-lg">
                                    <img src={item.image} alt={item.name} className="h-64" />
                                    <h2 className="text-lg font-bold text-center mt-2">{item.name}</h2>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )
            }
            </div>
        </div>
      )
    }