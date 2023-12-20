export default function ComplexLayout({
    // We have four slots for our layout: children, notifications, revenue, and users.
  children,
  notifications,
  revenue,
  users,
  login
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) 

{
  const loggedIn=false;
  return loggedIn ? (
    <div>
        Hello world...
        {/* The below segment: /complex-dashboard/@children/page.tsx */}
      <div>{children}</div> 
      {/* The below are route segments which do not effect the url structure... */}
        <div className="shadow-md mb-4 h-96 w-96 bg-white">{notifications}</div>
            <div className="shadow-md mb-4 h-96 w-96 bg-white">{users}</div>
            <div className="shadow-md mb-4 h-96 w-96 bg-white">{revenue}</div>
    </div>
  ) : login
}
