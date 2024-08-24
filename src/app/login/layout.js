"use client";
import Link from "next/link";
import "./index.css";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathName = usePathname();

  return (
    <div>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-menu">
          <li>
            <h4>Login NavBar</h4>
          </li>
          <li>
            <Link href="/login">Login Page</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to Main Login Page</Link>
      )}
      {children}
    </div>
  );
}

export default Layout;
