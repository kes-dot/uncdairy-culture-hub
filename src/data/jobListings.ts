export interface JobListing {
  id: string;
  title: string;
  department: string;
  city: string;
  state: string;
  region: string;
  applyUrl: string;
}

export const jobListings: JobListing[] = [
  { id: "unc-001", title: "CDL A Distribution Driver", department: "Operations", city: "Buffalo", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=4ee1a8c5-18d3-49e1-add9-d63ed1231609" },
  { id: "unc-002", title: "Maintenance Supervisor", department: "Maintenance", city: "North Lawrence", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=e76960c8-8cc5-439b-8453-6d8a1651db8c" },
  { id: "unc-003", title: "Plant Manager", department: "Management", city: "West Seneca", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=184b3ec7-a0f9-4cdc-bf95-a133970feb30" },
  { id: "unc-004", title: "Sr. Manager, Learning and Development", department: "Human Resources", city: "Batavia", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=0e394814-14fc-4ddd-bac1-967dadf0b774" },
  { id: "unc-005", title: "Sales Operations Manager", department: "Sales", city: "Lancaster", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=64511d3f-6bdd-4eee-99ec-24fdd7aab2db" },
  { id: "unc-006", title: "QA Line Coordinator", department: "Quality", city: "Batavia", state: "New York", region: "Northeast", applyUrl: "https://recruiting.ultipro.com/UPS1000UPNC/JobBoard/8278ab32-7638-486b-a889-8265d76f85da/OpportunityDetail?opportunityId=1de8adf9-af89-4032-8f22-55da6cc285c5" },
];

export function getUniqueStates(): string[] {
  return [...new Set(jobListings.map((j) => j.state))].sort();
}

export function getUniqueDepartments(): string[] {
  return [...new Set(jobListings.map((j) => j.department))].sort();
}
