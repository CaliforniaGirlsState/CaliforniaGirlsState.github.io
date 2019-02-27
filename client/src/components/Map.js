import React from 'react';
import Typography from '@material-ui/core/Typography';

const handleClick = (e) => {
  e.preventDefault();

  fetch('/test')
  .then(res => res.text())
  .then(json => console.log('client: ', json))
}

const Map = () => (
  <div>
    <Typography variant="h3" gutterBottom>
      Map
    </Typography>
  </div>
);

export default Map;
