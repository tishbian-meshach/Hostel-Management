"use client"

import { useState } from "react"
import { DollarSign, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExpensesTable } from "@/components/expenses/expenses-table"
import { AddExpenseDialog } from "@/components/expenses/add-expense-dialog"
import { YearPicker } from "@/components/ui/year-picker"

export default function ExpensesPage() {
    const currentDate = new Date()
    const [year, setYear] = useState(currentDate.getFullYear().toString())
    const [month, setMonth] = useState((currentDate.getMonth() + 1).toString())
    const [refreshKey, setRefreshKey] = useState(0)
    const [addDialogOpen, setAddDialogOpen] = useState(false)

    const handleExpenseAdded = () => {
        setRefreshKey(prev => prev + 1)
        setAddDialogOpen(false)
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Expenses</h1>
                    <p className="text-muted-foreground mt-1">Track and manage hostel operational expenses.</p>
                </div>
                <Button onClick={() => setAddDialogOpen(true)} className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Expense
                </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
                <YearPicker 
                    value={year} 
                    onValueChange={setYear} 
                    className="w-32" 
                />

                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">Month:</label>
                    <Select value={month} onValueChange={setMonth}>
                        <SelectTrigger className="w-32 bg-background">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">January</SelectItem>
                            <SelectItem value="2">February</SelectItem>
                            <SelectItem value="3">March</SelectItem>
                            <SelectItem value="4">April</SelectItem>
                            <SelectItem value="5">May</SelectItem>
                            <SelectItem value="6">June</SelectItem>
                            <SelectItem value="7">July</SelectItem>
                            <SelectItem value="8">August</SelectItem>
                            <SelectItem value="9">September</SelectItem>
                            <SelectItem value="10">October</SelectItem>
                            <SelectItem value="11">November</SelectItem>
                            <SelectItem value="12">December</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Expenses Table */}
            <ExpensesTable key={`${year}-${month}-${refreshKey}`} year={year} month={month} />

            {/* Add Expense Dialog */}
            <AddExpenseDialog
                open={addDialogOpen}
                onOpenChange={setAddDialogOpen}
                onSuccess={handleExpenseAdded}
            />
        </div>
    )
}
