import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const comment = comments.find((comment) => comment.id === Number(params.id));
  if(parseInt(params.id) > comments.length) {
    redirect("/comments")
  }

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const indx = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );
  if (indx == -1) {
    return new Response("Not found", { status: 404 });
  }

  const data = await request.json();

  comments[indx] = {
    id: Number(params.id),
    text: data.text,
  }
  return new Response("Updated", { status: 201 });
}


export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const indx = comments.findIndex((comment) => comment.id === Number(params.id));
  if (indx == -1) {
    return new Response("Not found", { status: 404 });
  }

  comments.splice(indx, 1);
  return new Response("Deleted", { status: 201 });

}