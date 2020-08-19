import React, { createContext, useState } from 'react';
export var AppContext = createContext({
    isLoading: false,
    setIsLoading: function () { return null; },
});
export var AppProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    return (React.createElement(AppContext.Provider, { value: { isLoading: isLoading, setIsLoading: setIsLoading } }, children));
};
//# sourceMappingURL=index.js.map