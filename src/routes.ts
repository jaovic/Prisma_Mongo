import express, { json } from "express";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

const routes = Router();

app.use(json());

routes.post("/", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({ data: { email, name } });
  return res.json({ user });
});

export { routes };
