import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CourseCard from './CourseCard';
import CourseFilters from './CourseFilters';

const CoursesSection = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Course Builder Masterclass",
      instructor: "Platform Team",
      category: "Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Learn to create engaging courses with our advanced course builder tools and interactive content features.",
      duration: "2 weeks",
      isNew: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "LMS Analytics Deep Dive",
      instructor: "Data Team",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Master learner analytics, progress tracking, and institutional reporting features.",
      duration: "3 weeks",
      isPopular: true,
      rating: 4.8
    },
    {
      id: 3,
      title: "User Management & Permissions",
      instructor: "Admin Team",
      category: "Administration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Configure roles, permissions, and manage users across your institution effectively.",
      duration: "1 week",
      rating: 4.7
    },
    {
      id: 4,
      title: "Virtual Classroom Setup",
      instructor: "Technical Team",
      category: "Integration",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Set up live sessions, video conferencing, and interactive virtual classrooms.",
      duration: "2 weeks",
      isPopular: true,
      rating: 4.9
    },
    {
      id: 5,
      title: "Certification & Assessment Design",
      instructor: "Assessment Team",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Create comprehensive assessments and digital certification workflows.",
      duration: "2 weeks",
      rating: 4.5
    }
  ]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Extract unique categories
  const categories = ["Platform", "Analytics", "Administration", "Integration", "Assessment"];

  // Filter courses based on category and search term
  useEffect(() => {
    let filtered = [...courses];

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        course =>
          course.title.toLowerCase().includes(term) ||
          course.description.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
    }

    setFilteredCourses(filtered);
  }, [activeCategory, searchTerm, courses]);

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-lms-light/50 to-white -z-10"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-lms-primary/5 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-lms-secondary/5 -z-10"></div>
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-lms-accent/5 -z-10"></div>

      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lms-primary font-medium mb-2">Platform Training & Onboarding</p>
          <h2 className="heading-lg mb-4">Learn to Master Athena LMS</h2>
          <p className="subtext">
            Get the most out of your platform with our comprehensive training courses
            designed for administrators, instructors, and technical staff.
          </p>
        </div>

        <CourseFilters
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))
            ) : (
              <div className="col-span-3 py-16 text-center">
                <p className="text-gray-500 text-lg">No training courses found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search term.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoursesSection;