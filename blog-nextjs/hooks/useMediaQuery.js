// Taken from https://github.com/vercel/next.js/discussions/14810

import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (minWidth, minHeight) => {

    const [ matchesQuery, setMatchesQuery ] = useState(false);

    // Wrap the update function in useCallback to prevent rerenderings.
    const updateTarget = useCallback( e => {
        if (e.matches) setMatchesQuery(true);
        else setMatchesQuery(false);
    }, [])

    useEffect (() => {

        if (minWidth || minHeight) { // Check that at least one param was passed

            // Build media query
            const query = "";
            if (minWidth) query = `(min-width: ${minWidth}px)`;
            if (minHeight) {
                if (query !== "") query += ` and (min-height: ${minHeight}px)`;
                else query = `(min-height: ${minHeight}px)`;
            }

            const media = window.matchMedia(query);
            media.addEventListener("change", e => updateTarget(e));

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) setMatchesQuery(true);


        }

        return () => media.removeEventListener("change", updateTarget);

    }, [])

    return matchesQuery;
};


export default useMediaQuery;