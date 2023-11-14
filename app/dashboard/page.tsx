// the below component can be safely colocated
function ThisComponentIsNotVisible() {
  return <div>Server side rendered</div>;
}

// only function with default export is seen on the screen which is also called a file colocation....

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ThisComponentIsNotVisible />
    </div>
  );
}
