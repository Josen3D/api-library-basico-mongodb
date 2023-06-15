// handle the http errors and send a message error
export const handleHttpError = (
  res,
  message = "Something went wrong",
  code = 403
) => {
  res.status(code);
  res.send({ error: message });
};
