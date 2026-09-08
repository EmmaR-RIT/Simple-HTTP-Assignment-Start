const hello = 'Hello, World!';

const getTimeString = () => {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};


const getTime = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(getTimeString());
    res.end();
}

const getHello = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(hello);
    res.end();
}

module.exports = { hello, getTimeString, getTime, getHello };