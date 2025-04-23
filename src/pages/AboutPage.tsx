import React from 'react';
import { Award, BookOpen, Users, Target, Heart, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About EduMind
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            We're on a mission to transform education through the power of knowledge, collaboration, and innovation.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-600 space-y-4">
                <p>
                  EduMind began in 2020 when a group of passionate educators, child psychologists, and educational technologists came together with a shared vision: to bridge the gap between theory and practice in education.
                </p>
                <p>
                  We recognized that teachers often lacked accessible professional development resources, parents struggled to understand child development, and the connection between schools and homes was frequently overlooked.
                </p>
                <p>
                  What started as a small blog has grown into a comprehensive platform serving thousands of educators and parents worldwide. Our team has expanded to include experts across multiple disciplines, all united by our commitment to improving educational outcomes for children.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg object-cover w-full h-96"
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team meeting"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission & Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              We're guided by a clear mission and core values that inform everything we do.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Evidence-Based Approach
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We believe in using research and data to inform our resources and recommendations, ensuring that our content reflects the latest findings in education and psychology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                        <Users className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Inclusive Education
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We are committed to creating resources that support diverse learning needs and promote equitable educational opportunities for all children.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-600 rounded-md shadow-lg">
                        <Heart className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Compassionate Support
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We recognize the challenges faced by educators and parents and strive to provide supportive, non-judgmental guidance and tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <Target className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Practical Application
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We focus on translating complex theories into actionable strategies that can be implemented in real-world educational settings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-600 rounded-md shadow-lg">
                        <Award className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Excellence & Innovation
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We are dedicated to creating high-quality resources and continuously innovating to meet the evolving needs of education.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-yellow-600 rounded-md shadow-lg">
                        <Coffee className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Community Building
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      We believe in the power of community and work to foster connections between educators, parents, and experts to share knowledge and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Meet the experts behind EduMind
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Emily Chen"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Dr. Emily Chen, Ph.D.</h3>
                <p className="text-blue-600 font-medium">Founder & CEO</p>
                <p className="mt-2 text-gray-600">
                  Former elementary school principal with 15+ years in education and a doctorate in Educational Leadership.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Marcus Johnson"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Dr. Marcus Johnson</h3>
                <p className="text-blue-600 font-medium">Chief Psychology Officer</p>
                <p className="mt-2 text-gray-600">
                  Clinical child psychologist with a specialization in developmental disorders and learning differences.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.pexels.com/photos/3775034/pexels-photo-3775034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sarah Martinez"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Sarah Martinez, M.Ed.</h3>
                <p className="text-blue-600 font-medium">Director of Curriculum</p>
                <p className="mt-2 text-gray-600">
                  Curriculum specialist with expertise in inclusive teaching practices and personalized learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-3 text-xl text-blue-100 sm:mt-4">
              Since our founding, we've made significant strides in our mission to transform education.
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">
                Educators & Parents Served
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                25,000+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">
                Educational Resources
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                1,200+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">
                Professional Collaborators
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                50+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;