import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-50 flex", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
))

NavigationMenu.displayName = "NavigationMenu"

export const NavigationMenuList = NavigationMenuPrimitive.List
export const NavigationMenuItem = NavigationMenuPrimitive.Item

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center px-4 py-2 text-gray-800 text-sm font-medium hover:text-blue-600 transition",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="w-4 h-4 ml-1" />
  </NavigationMenuPrimitive.Trigger>
))

NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50",
      className
    )}
    {...props}
  />
))

NavigationMenuContent.displayName = "NavigationMenuContent"

export const NavigationMenuLink = NavigationMenuPrimitive.Link
