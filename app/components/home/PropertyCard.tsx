import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import IconButton from '../ui/IconButton';
import Avatar from '../ui/Avatar';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  images: string[];
  amenities: {
    bedrooms: number;
    bathrooms: number;
    hasWifi: boolean;
  };
  owner: {
    name: string;
    avatar?: string;
  };
  availableDates: string;
  isPetFriendly: boolean;
  additionalAmenities: number;
}

export default function PropertyCard({
  id,
  title,
  location,
  images,
  amenities,
  owner,
  availableDates,
  isPetFriendly,
  additionalAmenities,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={title}
          fill
          className="object-cover"
        />
        
        {/* Navigation arrows */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={previousImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Favorite button */}
        <div className="absolute top-3 right-3">
          <IconButton
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 7.5C17.5 4.77208 15.2279 2.5 12.5 2.5C10.8533 2.5 9.38889 3.30556 8.33333 4.58333C7.27778 3.30556 5.81333 2.5 4.16667 2.5C1.43875 2.5 -0.833333 4.77208 -0.833333 7.5C-0.833333 8.16319 -0.718056 8.79861 -0.506944 9.38889C0.722222 13.2 8.33333 17.5 8.33333 17.5C8.33333 17.5 15.9444 13.2 17.1736 9.38889C17.3847 8.79861 17.5 8.16319 17.5 7.5Z"
                  fill={isFavorite ? '#D92D20' : 'none'}
                  stroke={isFavorite ? '#D92D20' : '#667085'}
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        {/* Owner badge */}
        <div className="absolute top-3 left-3 bg-white rounded-full px-2 py-1 flex items-center gap-1.5">
          <Avatar src={owner.avatar} fallback={owner.name} size="sm" />
          <span className="text-xs font-medium text-[#344054]">Owner's home</span>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-2 py-1">
          <span className="text-xs font-medium text-[#344054]">
            {currentImageIndex + 1}/{images.length}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/property/${id}`} className="block">
          <h3 className="text-lg font-semibold text-[#101828] mb-1">{title}</h3>
          <p className="text-sm text-[#475467] mb-3">{location}</p>

          {/* Amenities */}
          <div className="flex items-center gap-4 text-sm text-[#475467] mb-3">
            <div className="flex items-center gap-1.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.8333 8.33333H4.16667C3.24619 8.33333 2.5 9.07952 2.5 10V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10C17.5 9.07952 16.7538 8.33333 15.8333 8.33333Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.83333 8.33333V5C5.83333 4.11594 6.17113 3.2681 6.77124 2.66799C7.37135 2.06788 8.21919 1.73008 9.10325 1.73008C9.98731 1.73008 10.8352 2.06788 11.4353 2.66799C12.0354 3.2681 12.3732 4.11594 12.3732 5V8.33333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{amenities.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.66667 5H13.3333C14.2538 5 15 5.74619 15 6.66667V10H5V6.66667C5 5.74619 5.74619 5 6.66667 5Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33333 10H16.6667C17.5871 10 18.3333 10.7462 18.3333 11.6667V13.3333C18.3333 14.2538 17.5871 15 16.6667 15H3.33333C2.41286 15 1.66667 14.2538 1.66667 13.3333V11.6667C1.66667 10.7462 2.41286 10 3.33333 10Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{amenities.bathrooms} Bathrooms</span>
            </div>
            {amenities.hasWifi && (
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99999 14.1667C10.9205 14.1667 11.6667 13.4205 11.6667 12.5C11.6667 11.5795 10.9205 10.8333 9.99999 10.8333C9.07952 10.8333 8.33333 11.5795 8.33333 12.5C8.33333 13.4205 9.07952 14.1667 9.99999 14.1667Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.69167 8.33333C6.65833 6.36667 8.625 5.83333 10 5.83333C11.375 5.83333 13.3417 6.36667 15.3083 8.33333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.66667 5C4.61667 2.05 7.56667 1.25 10 1.25C12.4333 1.25 15.3833 2.05 18.3333 5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>WiFi available</span>
              </div>
            )}
          </div>

          {/* Additional info */}
          <div className="flex items-center gap-2 text-sm text-[#475467]">
            {isPetFriendly && (
              <>
                <span>Pet friendly</span>
                <span className="w-1 h-1 bg-[#D0D5DD] rounded-full" />
              </>
            )}
            {additionalAmenities > 0 && (
              <>
                <span>+{additionalAmenities} more amenities</span>
                <span className="w-1 h-1 bg-[#D0D5DD] rounded-full" />
              </>
            )}
          </div>

          {/* Availability */}
          <div className="mt-3">
            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#079455]">
              <span>Available to Swap</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-[#475467]">{availableDates}</p>
          </div>
        </Link>
      </div>
    </div>
  );
} 