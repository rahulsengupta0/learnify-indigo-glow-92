import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CourseFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full md:w-auto"
      >
        <TabsList className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 md:flex">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="flex-1">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="relative w-full md:w-72">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default CourseFilters;