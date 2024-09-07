'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample data
const applications = [
  { id: 1, company: "Tech Co", position: "Frontend Developer", status: "Applied", dateSaved: "2023-06-01", dateApplied: "2023-06-03" },
  { id: 2, company: "Startup Inc", position: "Full Stack Engineer", status: "First Interview", dateSaved: "2023-05-28", dateApplied: "2023-05-30" },
  { id: 3, company: "Big Corp", position: "React Developer", status: "Technical Test", dateSaved: "2023-06-05", dateApplied: "2023-06-07" },
  { id: 4, company: "Innovative Labs", position: "UI Engineer", status: "Bookmarked", dateSaved: "2023-06-10", dateApplied: null },
]

const contacts = [
  { id: 1, name: "John Doe", company: "Tech Giants", position: "Senior Developer", status: "Sent First Message", type: "LinkedIn", dateSaved: "2023-06-02", dateContacted: "2023-06-04" },
  { id: 2, name: "Jane Smith", company: "Startup Hub", position: "CTO", status: "Coffee Accepted", type: "Email", dateSaved: "2023-05-29", dateContacted: "2023-06-01" },
  { id: 3, name: "Bob Johnson", company: "Network Inc", position: "HR Manager", status: "Invited", type: "LinkedIn", dateSaved: "2023-06-06", dateContacted: null },
  { id: 4, name: "Alice Brown", company: "Connect Co", position: "Tech Lead", status: "Offered a Referral", type: "Email", dateSaved: "2023-06-08", dateContacted: "2023-06-09" },
]

const applicationStatuses = [
  "Bookmarked", "Applied", "First Interview", "Technical Test", "Second Interview", "Accepted", "Refused", "I Withdrew"
]

const contactStatuses = [
  "Bookmarked", "Invited", "Sent First Message", "Responded", "Coffee Accepted", "Offered a Referral", "Offered a Job", "Didn't Respond", "Need Reminder"
]

const getStatusColor = (status: string) => {
  const colorMap: { [key: string]: string } = {
    "Bookmarked": "bg-blue-500",
    "Applied": "bg-yellow-500",
    "First Interview": "bg-purple-500",
    "Technical Test": "bg-orange-500",
    "Second Interview": "bg-indigo-500",
    "Accepted": "bg-green-500",
    "Refused": "bg-red-500",
    "I Withdrew": "bg-gray-500",
    "Invited": "bg-pink-500",
    "Sent First Message": "bg-cyan-500",
    "Responded": "bg-teal-500",
    "Coffee Accepted": "bg-green-400",
    "Offered a Referral": "bg-indigo-400",
    "Offered a Job": "bg-green-600",
    "Didn't Respond": "bg-red-400",
    "Need Reminder": "bg-yellow-400",
  }
  return colorMap[status] || "bg-gray-500"
}

const formatDate = (dateString: string | null) => {
  if (!dateString) return "N/A"
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("applications")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Application Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="applications">Regular Applications</TabsTrigger>
          <TabsTrigger value="contacts">Social Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Saved</TableHead>
                <TableHead>Date Applied</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>{app.company}</TableCell>
                  <TableCell>{app.position}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(app.status)} text-white`}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(app.dateSaved)}</TableCell>
                  <TableCell>{formatDate(app.dateApplied)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="contacts">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date Saved</TableHead>
                <TableHead>Date Contacted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>{contact.position}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(contact.status)} text-white`}>
                      {contact.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {contact.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(contact.dateSaved)}</TableCell>
                  <TableCell>{formatDate(contact.dateContacted)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}