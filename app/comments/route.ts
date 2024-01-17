import { comments } from "./data";
import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
// We can define an api folder to dump the api routes in
export async function GET(request: NextRequest) {
  // This is the request object from the server and we can grab headers from this..
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();
  const referer = headersList.get("authorization");
  // This section is for request headers
  console.log(requestHeaders.get("authorization"), "requestHeaders");

  // This section is for searchParams
  const searchParams = request.nextUrl.searchParams;
  const comment = searchParams.get("comment");
  console.log(comment, "comment");

  // accessing the cookie native way
  const cookies1=request.cookies.get("test");
  console.log(cookies1, "cookies1");


  // accessing the cookie using next/headers
  const cookieStore = cookies()
  const test = cookieStore.get('test')
  console.log("test", "Second way", test)



  if (comment) {
    const singleComment = comments.filter((comm: any) =>
      comm.text.includes(comment)
    );
    console.log(singleComment);
    return Response.json(singleComment, {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "test=123",
      },
    
    });
  }
  return Response.json(comments, {
    // here we are setting cookie..
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "test=123",
    },
  });
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
