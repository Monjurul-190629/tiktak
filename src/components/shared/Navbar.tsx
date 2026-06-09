import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "../../lib/utils";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            S
          </div>
          <span>DevPortal</span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/todo"
                className={navigationMenuTriggerStyle()}
              >
                Todo
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/caching"
                className={navigationMenuTriggerStyle()}
              >
                Caching
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={navigationMenuTriggerStyle()}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Redux Toolkit - Styled as a primary action */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/redux-toolkit"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-purple-600 text-white hover:bg-purple-700 hover:text-white focus:bg-purple-700 ml-2",
                )}
              >
                Redux Toolkit
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Optional Action Button (e.g., Get Started or Github) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:underline underline-offset-4">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
