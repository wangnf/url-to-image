import express from "express";
import puppeteer from "puppeteer";

import { delay } from "../utils/index.js";

const router = express.Router();

router.post("/urlToImage", async (req, res) => {
  console.log(req.body);
  try {
    const browser = await puppeteer.launch({
      // headless: false,
    });
    const page = await browser.newPage();
    page.setViewport({
      width: 1332,
      height: 800,
    });
    await page.goto(req.body.url);
    await delay(3000);
    await page.screenshot({
      path: `screenshots/${req.body.outputPath}`,
      fullPage: true,
    });
    await browser.close();
    console.log("xxx");
    res.status(200).json("成功！");
  } catch (error) {
    console.log(error, "error");
    res.status(500).json(error);
  }
});

export default router;
