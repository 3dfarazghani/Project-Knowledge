import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Brain, Users, BookOpen, Award } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Card, { CardContent } from '../../components/Card';

interface AnalyticsData {
  date: string;
  activeStudents: number;
  completedLessons: number;
  averageScore: number;
}

const Dashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from('analytics')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;

      setAnalyticsData(data || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: 'Active Students',
      value: '2,345',
      icon: Users,
      change: '+12%',
      color: 'text-blue-600',
    },
    {
      title: 'Lessons Created',
      value: '156',
      icon: BookOpen,
      change: '+8%',
      color: 'text-green-600',
    },
    {
      title: 'Average Engagement',
      value: '87%',
      icon: Brain,
      change: '+5%',
      color: 'text-purple-600',
    },
    {
      title: 'Completion Rate',
      value: '92%',
      icon: Award,
      change: '+3%',
      color: 'text-yellow-600',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Educator Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 text-sm font-semibold">
                  {stat.change}
                </span>
                <span className="text-gray-600 text-sm ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Student Engagement Overview</h2>
        <div className="h-80">
          <BarChart
            width={800}
            height={300}
            data={analyticsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="activeStudents" fill="#3B82F6" name="Active Students" />
            <Bar dataKey="completedLessons" fill="#10B981" name="Completed Lessons" />
            <Bar dataKey="averageScore" fill="#8B5CF6" name="Average Score" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;