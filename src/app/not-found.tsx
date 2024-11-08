import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Not Found",
};

const NotFound = () => {
  return (
    <div className="px-2 w-full flex justify-center items-center flex-col my-auto h-screen gap-4">
      <h2 className="text-2xl">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/home">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
