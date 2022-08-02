import React from "react";
import Container from "@mui/material/Container";

const DUMMY_ARR = [
  {
    id: 1,
    name: "haidoan",
    url: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg",
    comment: "nice gear",
  },
  {
    id: 2,
    name: "haidoan",
    url: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg",
    comment: "nice gear",
  },
  {
    id: 3,
    name: "haidoan",
    url: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg",
    comment: "nice gear",
  },
  {
    id: 4,
    name: "haidoan",
    url: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg",
    comment: "nice gear",
  },
];

const Feed = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        border: "1px solid #e7ebf0",
        borderRadius: "5px",
        marginTop: "2px",
      }}
    >
      <div>
        <p
          style={{ fontWeight: "bold", fontStyle: "italic", textAlign: "left", fontSize: '20px' }}
        >
          {DUMMY_ARR[0].name}
        </p>
      </div>
      <div style={{ border: "1px solid black" }}>
        <img style={{ maxWidth: "100%" }} src={DUMMY_ARR[0].url} />
      </div>
      <div>
        <p style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>stranger: </span>
          {DUMMY_ARR[0].comment}
        </p>
        <p style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>stranger: </span>
          {DUMMY_ARR[0].comment}
        </p>
        <p style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>stranger: </span>
          {DUMMY_ARR[0].comment}
        </p>
      </div>
    </Container>
  );
};

export default Feed;
