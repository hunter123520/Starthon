'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = [
  '#8884d8', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57',
  '#ffc658', '#ff7f50', '#ffbb28', '#c6b0ff', '#d988bc',
  '#8ea0ff', '#7fc97f', '#beaed4', '#fdc086', '#ffff99',
  '#386cb0', '#f0027f', '#bf5b17', '#666666', '#41ae76',
];

export default function StatisticsTab() {
  const [events, setEvents] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);

  useEffect(() => {
    fetch('/data/data_new.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setCategoryStats(getTopCategories(data));
        setMonthlyStats(getEventsPerMonth(data));
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  const getTopCategories = (data) => {
    const categoryCounts = {};

    data.forEach((event) => {
      if (typeof event.category === 'string') {
        const categories = event.category
          .replace(/&|and/gi, ',')
          .split(',')
          .map((cat) => cat.trim())
          .filter(Boolean);

        categories.forEach((cat) => {
          categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        });
      }
    });

    return Object.entries(categoryCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 20);
  };

  const parseDateString = (dateString) => {
    // Date format: "Month Day, Year" (e.g., "April 14, 2024")
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
   
    // Split the date into month, day, and year parts
    let [monthStr, dayYearStr,year] = dateString.split(' ');
    const month = months.indexOf(monthStr);  // Get the index of the month
    let [day, _] = dayYearStr.replace(',', '').split(' ');  // Remove the comma and split:
    // console.log("SSSSSSSSSSS",day.split("-")[0])
    // day = day.split("-")[0]
    day = day.split("-").length == 1 ? day: day.split("-")[0]
    // year = year.replace("Late","")
    // Check for invalid parsing results
    if (month === -1 || !year) {
      console.error(`Error parsing date: ${dateString}`);
      return new Date(`${months[0]} ${1}, ${2027}`);  // Return null if the date is invalid
    }
    console.log("SSSSSSSSSSS",`${months[month]} ${day}, ${year}`)
    // Return a new Date object (month is 0-indexed)
    return new Date(`${months[month]} ${day}, ${year}`);
  };
  

  const getEventsPerMonth = (data) => {
    const monthCounts = {};

    
    data.forEach((event) => {
      
      let date = event.Date;  // Assuming the "Date" field is used
      if (date) {
        
        const parsedDate = parseDateString(date);
        
        // Debugging: Log the parsed date object
        console.log(`Parsed date:`, parsedDate);
        
        if (!isNaN(parsedDate)) {
          const month = parsedDate.getMonth() + 1; // Months are 0-indexed
          const year = parsedDate.getFullYear();
          const monthYear = `${year}-${month < 10 ? '0' + month : month}`;
          
          monthCounts[monthYear] = (monthCounts[monthYear] || 0) + 1;
        }
      }
    });

    // Debugging: Log the month counts object
    console.log('Month counts:', monthCounts);

    // Convert the monthCounts object into an array and sort by month
    return Object.entries(monthCounts)
      .map(([monthYear, count]) => ({ monthYear, count }))
      .sort((a, b) => {
        const [yearA, monthA] = a.monthYear.split('-').map(Number);
        const [yearB, monthB] = b.monthYear.split('-').map(Number);
        return yearA === yearB ? monthA - monthB : yearA - yearB;
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>

      {/* Top Categories */}
      <div className="h-96 mb-12">
        <h2 className="text-xl font-semibold mb-2">Top 20 Most Frequent Categories</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categoryStats} layout="vertical" margin={{ left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={180} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Occurrences" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Events Per Month Chart */}
      <div className="h-96 mb-12">
  <h2 className="text-xl font-semibold mb-2">Events Per Month</h2>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={monthlyStats} margin={{ bottom: 100 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        dataKey="monthYear" 
        // angle={45} 
        textAnchor="end" 
        dy={10}  // Adjust this value to slide the labels down
        dx={30}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#82ca9d" name="Events" />
    </BarChart>
  </ResponsiveContainer>
</div>


      {/* Category Pie Chart */}
      <div className="h-96 mb-12">
        <h2 className="text-xl font-semibold mb-2">Category Distribution</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
            <Pie
              data={categoryStats}
              dataKey="value"
              nameKey="name"
              cx="40%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
