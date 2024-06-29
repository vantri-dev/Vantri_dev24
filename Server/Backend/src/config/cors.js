exports.configCors = (req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
  ];

  const origin = req.headers.origin;
  // if (!origin && env.BUILD_MODE === "dev") {
  //   res.setHeader("Access-Control-Allow-Origin", origin);
  // }
  // Kiểm tra xem origin của yêu cầu có trong danh sách allowedOrigins không
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};
