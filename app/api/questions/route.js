import Question from "@/models/questions";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const Allquestions = await Question.find({});

    return new Response(JSON.stringify(Allquestions), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all questions", { status: 500 });
  }
};
