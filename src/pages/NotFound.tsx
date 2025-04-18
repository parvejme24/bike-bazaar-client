import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-7xl px-6 lg:px-0">
      <div className="flex justify-center items-center min-h-screen">
        <Empty>
          <EmptyImage>
            <img
              src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
              height={234}
              width={350}
              alt="404"
            />
          </EmptyImage>
          <EmptyTitle className="mb-[14px] mt-5">404 Not Found</EmptyTitle>
          <EmptyDescription className="mb-8">
            Oops! The page you're looking for isn't available. It might have
            been moved, renamed, or removed. Hop back to the garage and continue
            exploring the best bikes on Bike Bazaar.
          </EmptyDescription>
          <Link to="/" className={buttonVariants({ color: "primary" })}>
            Go to home
          </Link>
        </Empty>
      </div>
    </div>
  );
}
