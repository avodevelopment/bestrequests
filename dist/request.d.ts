interface RequestInput {
    input: RequestInfo | URL;
    init: RequestInit;
}
declare const request: (reqObj: RequestInput) => Promise<any>;
export { request };
