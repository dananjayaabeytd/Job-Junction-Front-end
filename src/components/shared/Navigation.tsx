import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navigation() {
  return (
    <nav className="flex items-center justify-between py-12">
      <div>
        <Link to={"/"} className="text-4xl font-medium text-underlay-1">
          Job-Junction
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-8">
        <Link to={"/"}>Home</Link>

        <div className="flex items-center gap-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          <SignedOut>
            <Link to={"/sign-in"}>Sign In</Link>
            <Button asChild>
              <Link to={"/sign-up"}>Sign Up</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
