const exists = (data) => {
  return data !== null && data !== undefined && data !== "" ? data : false;
}

const formatError = (requiredFields = [], res) => {
  requiredFields.forEach(field => {
    if (field === false) return res.status(404).json({ error: "Missing required parameters" });
  });
}

module.exports = {
  exists,
  formatError,
}
