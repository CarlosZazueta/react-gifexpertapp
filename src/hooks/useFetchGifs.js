import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    const fetchGifs = async () => {
      const res = await getGifs(category);
      setState({
          data: res,
          lading: false
      });
    };

    useEffect(() => {
        
        fetchGifs();
        
    }, [category]);

    return state; // {data: [], loading: true}

}