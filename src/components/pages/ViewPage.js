import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPage = () => {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    const fetchPalettes = async () => {
      try {
        const response = await axios.get(
          `https://cloud-project-server.onrender.com/users/${userId}/palettes`
        );

        setPalettes(response.data);
      } catch (error) {
        console.error('Error fetching palettes:', error);
      }
    };

    if (userId) {
      fetchPalettes();
    }
  }, []);

  const handleDeletePalette = async (userId, paletteId) => {
    try {
      await axios.delete(
        `https://cloud-project-server.onrender.com/users/${userId}/palettes/${paletteId}`
      );

      setPalettes((prevPalettes) =>
        prevPalettes.filter((palette) => palette.id !== paletteId)
      );
    } catch (error) {
      console.error('Error deleting palette:', error);
    }
  };

  return (
    <div>
      <h1>View Page</h1>
      {palettes.map((palette) => (
        <div key={palette.id}>
          <h2>{palette.title}</h2>
          <p>{palette.description}</p>
          <p>Public: {palette.public ? 'Yes' : 'No'}</p>
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
          <button
            onClick={() => handleDeletePalette(palette.userId, palette.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewPage;
