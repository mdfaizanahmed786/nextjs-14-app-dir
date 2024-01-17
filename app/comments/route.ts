import { comments } from "./data";
import { type NextRequest } from "next/server";
// We can define an api folder to dump the api routes in
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const comment = searchParams.get("comment");
  console.log(comment, "comment")
  if (comment) {
    const singleComment = comments.filter((comm: any) => comm.text.includes(comment));
    console.log(singleComment)
    return Response.json(singleComment);
  }
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return Response.json(newComment, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
