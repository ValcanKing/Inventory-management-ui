"use client"
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"

export const Heading =() =>{
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-3xl md:text-6xl">
                Your inventory data managed with ease, Welcome to&nbsp;
                <span className="font-bold underline">IMS</span>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Inventory Management System (IMS) is a management system for inventories where workspace is better,faster and easy to use.
            </h3>
            <Button asChild>
                <Link href="/login">
                Enter IMS
                <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
                </Link>
            </Button>
            </h1>
        </div>
    )
}