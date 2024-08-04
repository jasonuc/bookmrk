import { UserButton } from "@clerk/nextjs";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import Dashboard from "@/components/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import FormattedUser from "@/components/formatted-user";
import DotPattern from "@/components/magicui/dot-pattern";

export default async function UserHomePage() {

  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-foreground/10">
      <DotPattern className="-z-10" />
      <FormattedUser />
      <Dashboard />
    </div>
  )
}