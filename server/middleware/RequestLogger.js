const requestLogger = (req, res, next) => {
    console.log("new request made:");
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
}
export default requestLogger;