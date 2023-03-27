import express from "express";
import urlToImageRoutes from "./routes/urlToImage.js";

const app = express();

// middlewares
app.use(express.json());

app.use("/api", urlToImageRoutes);

app.listen(8802, () => {
  console.log("服务已启动： http://localhost:8802");
});
