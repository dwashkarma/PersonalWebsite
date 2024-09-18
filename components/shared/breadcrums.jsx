"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BreadCrumb() {
  const pathname = usePathname();
  return (
    <div className="p-4" aria-label="Breadcrumb">
      <Link href={"/"} className="text-textSecondary hover:underline">
        Home
      </Link>
      {pathname}
    </div>
  );
}

export default BreadCrumb;
