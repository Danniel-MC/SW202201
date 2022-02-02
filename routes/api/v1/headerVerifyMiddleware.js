const verifyApiHeaderToken = (req, res, next) => {
  const apitoken = req.get("apitoken");
  if (apitoken) {
    if (apitoken === process.env.API_TOKEN) {
      return next();
    } else {
      sendUnauthorized(res);
    } //end else apitoken === process.env.API_TOKEN
  } else {
    return sendUnauthorized(res);
  } //end else
};
const sendUnauthorized = (res) => {
  return res.status(401).json({ error: "recurso no autorizado" });
}; //end first if

module.exports = { verifyApiHeaderToken, sendUnauthorized };
