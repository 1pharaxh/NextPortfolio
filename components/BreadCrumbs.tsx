"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BreadCrumbs({ className, ...props }: { className?: string }) {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    // get the current page
    const currPath: string = window.location.pathname;
    let pathArray: string[] = currPath.split("/");

    if (pathArray[0] === "post" || pathArray[1] === "post") {
      const end: string = pathArray[pathArray.length - 1];
      pathArray = ["Home", "Blog", end];
      setPath(pathArray);
      return;
    }
    if (pathArray[0] === "blog" || pathArray[1] === "blog") {
      pathArray = ["Home", "Blog"];
      setPath(pathArray);
      return;
    }
    setPath(pathArray);
  }, []);
  return (
    <div
      className={cn(
        "text-gray-200 text-lg flex items-center justify-start flex-row gap-4",
        className
      )}
    >
      {path.map((p, i) => {
        if (i === path.length - 1) {
          return (
            <span key={i} className="font-semibold">
              {p}
            </span>
          );
        }
        return (
          <>
            <span
              className="cursor-pointer hover:text-gray-400 hover:underline"
              onClick={() => {
                if (p === "Home") {
                  window.location.href = "/";
                  return;
                } else {
                  window.location.href = "/" + p.toLowerCase();
                  return;
                }
              }}
              key={i}
            >
              {p}
            </span>
            <ChevronRight size={16} className="inline" />
          </>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
