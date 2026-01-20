import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("Hello from server");
});
app.listen(3000, () => {
    try {
        console.log("server created succesfully");
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=app.js.map