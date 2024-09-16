import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  closeDrawer: () => void;
}

export function NavLink({ href, children, closeDrawer }: NavLinkProps) {
  return (
    <Link href={href} onClick={closeDrawer} className="text-lg py-2 w-full">
      {children}
    </Link>
  );
}
