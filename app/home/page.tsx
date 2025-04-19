'use client';

import HomeHeader from '../components/home/HomeHeader';
import SearchBar from '../components/home/SearchBar';
import SearchFilters from '../components/home/SearchFilters';
import PropertyGrid from '../components/home/PropertyGrid';

// Sample data for testing
const sampleProperties = [
  {
    id: '1',
    title: 'Modern Apartment in Brighton',
    location: 'Brighton, East Sussex',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 2,
      bathrooms: 1,
      hasWifi: true,
    },
    owner: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    availableDates: 'Available Jul 15 - Aug 30',
    isPetFriendly: true,
    additionalAmenities: 3,
  },
  {
    id: '2',
    title: 'Cozy Cottage in Cornwall',
    location: 'St. Ives, Cornwall',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 3,
      bathrooms: 2,
      hasWifi: true,
    },
    owner: {
      name: 'Sarah Smith',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    availableDates: 'Available Aug 1 - Sep 15',
    isPetFriendly: true,
    additionalAmenities: 5,
  },
  {
    id: '3',
    title: 'Luxury Flat in London',
    location: 'Shoreditch, London',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1560449017-7c4e2bd6d93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 1,
      bathrooms: 1,
      hasWifi: true,
    },
    owner: {
      name: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    availableDates: 'Available Jun 10 - Jul 20',
    isPetFriendly: false,
    additionalAmenities: 2,
  },
  {
    id: '4',
    title: 'Seaside Villa in Devon',
    location: 'Dartmouth, Devon',
    images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 4,
      bathrooms: 3,
      hasWifi: true,
    },
    owner: {
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    availableDates: 'Available Jul 5 - Aug 25',
    isPetFriendly: true,
    additionalAmenities: 4,
  },
  {
    id: '5',
    title: 'Country House in Yorkshire',
    location: 'York, Yorkshire',
    images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 5,
      bathrooms: 3,
      hasWifi: true,
    },
    owner: {
      name: 'David Taylor',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    availableDates: 'Available Aug 10 - Sep 30',
    isPetFriendly: true,
    additionalAmenities: 6,
  },
  {
    id: '6',
    title: 'City Apartment in Manchester',
    location: 'Manchester, Greater Manchester',
    images: ['https://images.unsplash.com/photo-1600607687644cacf4c9b1e6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 2,
      bathrooms: 1,
      hasWifi: true,
    },
    owner: {
      name: 'Lisa Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    availableDates: 'Available Jun 20 - Jul 30',
    isPetFriendly: false,
    additionalAmenities: 2,
  },
  {
    id: '7',
    title: 'Beach House in Norfolk',
    location: 'Norwich, Norfolk',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 3,
      bathrooms: 2,
      hasWifi: true,
    },
    owner: {
      name: 'Robert Clark',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    availableDates: 'Available Jul 25 - Aug 20',
    isPetFriendly: true,
    additionalAmenities: 3,
  },
  {
    id: '8',
    title: 'Mountain Retreat in Scotland',
    location: 'Edinburgh, Scotland',
    images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    amenities: {
      bedrooms: 4,
      bathrooms: 2,
      hasWifi: true,
    },
    owner: {
      name: 'James Anderson',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    availableDates: 'Available Aug 5 - Sep 10',
    isPetFriendly: true,
    additionalAmenities: 4,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      <main>
        <SearchBar />
        <SearchFilters />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <PropertyGrid properties={sampleProperties} />
        </div>
      </main>
    </div>
  );
} 