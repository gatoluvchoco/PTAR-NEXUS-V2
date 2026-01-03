export interface User {
  name: string;
  studentId: string;
  avatarUrl: string;
  department: string;
}

export enum ResourceType {
  PHYSICAL = 'Physical Book',
  EBOOK = 'E-Book',
  THESIS = 'Digital Thesis',
  JOURNAL = 'Online Journal'
}

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  type: ResourceType;
  year: number;
  // Specific properties based on type
  shelfLocation?: string;
  callNumber?: string;
  downloadUrl?: string;
  availability: 'Available' | 'On Loan' | 'Digital Access';
  coverImage: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  status: 'Occupied' | 'Available' | 'Maintenance';
  nextAvailable?: string;
}

export interface AnalyticsData {
  name: string;
  value: number;
}