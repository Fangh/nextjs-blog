import { NextApiRequest, NextApiResponse } from "next";

// req = HTTP incoming message, res = HTTP server response
export default (req: NextApiRequest, res: NextApiResponse) =>
{
    res.status(200).json({ text: 'Hello' });
}