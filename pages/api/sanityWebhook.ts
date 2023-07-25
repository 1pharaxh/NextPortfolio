import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string };
const secret: string =
  process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET || "Error there is no secret";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (req.headers.authorization !== secret) {
    // console.log(req.headers.authorization, secret);
    console.error("Invalid secret");
    return res.status(401).json({ message: "Invalid secret" });
  }

  try {
    // take 5 seconds to revalidate
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await res.revalidate(`/blog`);
    await res.revalidate(`/`);

    console.log("Revalidated");
    return res.json({
      message: `Revalidated "/", "/blog" and Robots`,
    });
  } catch (err) {
    return res.status(500).send({ message: `Error revalidating ${err}` });
  }
}
