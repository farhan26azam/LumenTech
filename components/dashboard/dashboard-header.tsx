"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-2">
            <h1 className="text-3xl font-bold tracking-tight">Project Dashboard (Solana based)</h1>
            <p className="mt-1 text-muted-foreground">Manage your projects and view AI-driven insights</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

