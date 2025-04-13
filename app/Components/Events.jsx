'use client';

import React, { useEffect, useState } from 'react';
import SelectiveCard from '@/app/Components/SelectiveCardAn';
import '../Styles/Browse.css';
import { Button } from '@mui/material';
import { Modal } from 'react-bootstrap';
import "../Styles/Events.css";
import APIService from '../Apis/APIService'
import ReviewAnalytics from "./Analytic"
import { CircularProgress } from '@mui/material';
export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [reviews,setReviews] = useState([]);
  const [waiting, setWaiting] = useState(false);
  useEffect(() => {
    fetch('/data/data_new.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);

        // Extract categories
        const uniqueCategories = new Set();
        data.forEach((event) => {
          if (typeof event.category === 'string') {
            const parts = event.category
              .replace(/&|and/gi, ',')
              .split(',')
              .map((cat) => cat.trim());
            parts.forEach((cat) => uniqueCategories.add(cat));
          }
        });
        setCategories(['All', ...Array.from(uniqueCategories)]);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) =>
        event.category &&
        event.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };

  const [selectedEvent, setSelectedEvent] = useState(null);
const [showModal, setShowModal] = useState(false);

const handleReviewClick = (event) => {
  setSelectedEvent(event);
  setShowModal(true);
  // APIService.sentiment()
  //           .then((response) => {
  //             setReviews(response["output"]);
              
  //           })
  //           .catch((error) => console.log("error", error));
  setWaiting(true);
  APIService.sentiment()
  .then((response) => {
    // assuming response["output"] is an array
    if (Array.isArray(response["output"])) {
      setReviews(response["output"]);
      setWaiting(false);
    } else {
      console.error("Output is not iterable", response["output"]);
    }
  })
  .catch((error) => console.log("error", error));
};

const mockFeedback = [
  "Great workshop, learned a lot!",
  "The speaker was engaging.",
  "I found the session a bit too long.",
  "Very informative and well-organized!",
  "Could use more practical examples."
];

const getClassColor = (label) => {
  switch (label) {
    case "Positive":
      return "positive";
    case "Negative":
      return "negative";
    case "Improvement Suggestions":
      return "suggestion";
    case "Questions":
      return "questions";
    case "Confusion":
      return "confusion";
    case "Support Request":
      return "support";
    case "Discussion":
      return "discussion";
    case "Course Comparison":
      return "comparison";
    case "Related Course Suggestions":
      return "related";
    default:
      return "neutral";
  }
};


  return (
    <div className="p-6">
      <Modal show={showModal} onHide={() => setShowModal(false)} centered dialogClassName="w-100">
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"100%"}}>
          <p><strong>Date:</strong> {selectedEvent?.Date}</p>
          <p><strong>Description:</strong> {selectedEvent?.Content}</p>
          <hr />
          <h6>User Feedback:</h6>
          {/* <ul>
          {reviews.map((item, index) => (
          <div key={index}>
            <p><strong>{item["Student Name"]}</strong>: {item["Feedback"]} - {item["predictions"]}</p>
          </div>
        ))}
          </ul> */}
           {waiting ? (
            <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ gap: "15px" }}>
              <CircularProgress />
            </div>
          ) : (
           <>
            <ReviewAnalytics reviews={reviews} />
        <div className="review-list">
  {reviews.map((item, index) => (
    <div
      key={index}
      className={`review-card ${getClassColor(item["predictions"])}`}
    >
      <div className="review-header">
        <span className="review-name">{item["Student Name"]}</span>
        <span className="review-label">{item["predictions"]}</span>
      </div>
      <p className="review-text">{item["Feedback"]}</p>
    </div>
  ))}
</div>
           </>
          )}
         
        </Modal.Body>
      </Modal>
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => filterByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-row flex-wrap justify-center items-start gap-4 px-4">
        {filteredEvents.map((e, i) => (
          <div className='d-flex flex-column'>
            <SelectiveCard
            key={'event-' + i}
            title={e.Title}
            description={
              e.Content?.split(' ').slice(0, 20).join(' ') +
              (e.Content?.split(' ').length > 20 ? '...' : '')
            }
            img={e.Poster}
            subdescription={e.Content?.length || 0}
            link={!e.Link ? '/Browse' : e.Link}
            date={e.Date}
          />
          <Button variant='outlined'  onClick={() => handleReviewClick(e)}>
            Analysis Review
          </Button>
          </div>
        ))}
      </div>
    </div>
  );
}