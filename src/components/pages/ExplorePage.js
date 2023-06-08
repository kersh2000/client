import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExplorePage = () => {
  const [publicPalettes, setPublicPalettes] = useState([]);

  useEffect(() => {
    const fetchPublicPalettes = async () => {
      try {
        const response = await axios.get(
          'https://cloud-project-server.onrender.com/palettes/public'
        );

        setPublicPalettes(response.data);
      } catch (error) {
        console.error('Error fetching public palettes:', error);
      }
    };

    fetchPublicPalettes();
  }, []);

  return (
    <div>
      <h1>Explore Page</h1>
      {publicPalettes.map((palette) => (
        <div key={palette.id}>
          <h2>{palette.title}</h2>
          <p>{palette.description}</p>
          <p>Public: {palette.public ? 'Yes' : 'No'}</p>
          <p>Creator: {palette.creator}</p>
          <div>
            {palette.colours.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  width: '50px',
                  height: '50px',
                  display: 'inline-block',
                  marginRight: '5px',
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExplorePage;
