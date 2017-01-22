module.exports = function (res, err) {
	const message = err.message || err;
	const statusCode = err.statusCode || 500;
	res.status(statusCode).send({ message, statusCode });
};
