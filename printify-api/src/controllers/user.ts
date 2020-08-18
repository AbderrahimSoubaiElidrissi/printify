import { default as User } from "../models/user";
import { Request, Response } from "express";

export let getAll = async (req: Request, res: Response) => {
  try {
    const user = await User.find({})
    return await res.json(user);
  } catch (error) {
    return res.status(500).json({ error });

  }

};

export let get = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: {
        status: 400,
        message: "Bad request."
      }
    });
  }

  try {
    const user = await User.findById(id).exec()
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });

  }

};

export let create = async (req: Request, res: Response) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      error: {
        status: 400,
        message: "Bad request."
      }
    });
  }

  try {
    let user = new User(data);

    user = await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }


};

export let update = async (req: Request, res: Response) => {
  const { id } = req.params;

  const patch = req.body;

  if (!id || !patch) {
    return res.status(400).json({
      error: {
        status: 400,
        message: "Bad request."
      }
    });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { $set: patch }, { new: true }).exec();
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }

};

export let remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: {
        status: 400,
        message: "Bad request."
      }
    });
  }

  try {
    await User.findByIdAndRemove(id).exec();
    return res.status(204).json({})
  } catch (error) {
    return res.status(500).json({ error });
  }

};
