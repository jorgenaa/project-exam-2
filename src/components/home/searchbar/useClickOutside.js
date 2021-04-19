import {useEffect, useRef} from 'react';

export const useClickOutside = (handler) => {
    const domNode = useRef();
    useEffect(() => {
        const maybeHandler = e =>  {
           if(!domNode.current.contains(e.target)) {
            handler();
           }
       }
       document.addEventListener("mousedown", maybeHandler); 

       return () => {
        document.removeEventListener("mousedown", maybeHandler)
       }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return domNode;
}

