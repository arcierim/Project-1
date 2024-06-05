function mockRequest(data) {
    return {
        body: data.body || {},
        params: data.params || {},
        query: data.query || {},
    };
}

function mockResponse() {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
}

module.exports = { mockRequest, mockResponse };
