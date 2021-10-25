import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "src/myScript.js";
        script.type ="text/babel"

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;