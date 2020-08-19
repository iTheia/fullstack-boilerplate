import React, { createContext, useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
export var AuthContext = createContext({
    currentUser: null,
});
export var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), currentUser = _b[0], setCurrentUser = _b[1];
    var setIsLoading = useContext(AppContext).setIsLoading;
    useEffect(function () {
        setIsLoading(true);
        /* authentificar */
        setIsLoading(false);
    }, [setIsLoading]);
    return (React.createElement(AuthContext.Provider, { value: { currentUser: currentUser } }, children));
};
//# sourceMappingURL=index.js.map