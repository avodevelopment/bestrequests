interface RequestInput {
    input: RequestInfo | URL,
    init: RequestInit,
} 

const request = async (reqObj: RequestInput) => {
    try {
        let req = await fetch(reqObj.input, reqObj.init);

        reqObj[`on${req.status}`]?.(req);
        return req;
    } catch (error) {
        return error;
    }
}

export {request};
