import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from 'gsap';
import './preloader.scss';
import logo from '../assets/images/preload.svg';

function LinearProgressWithLabel(props) {
  const el = React.useRef();
  const tl = React.useRef();
  const q = gsap.utils.selector(el);

  React.useEffect(() => {
    tl.current = gsap.timeline().to(q('.square'), {
      opacity: 0.7,
    }).to(q('.square'), {
      duration: 1.5,
      ease: 'powerInOut',
      opacity: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">
          {`${Math.round(props.value)}%`}
        </Typography>
      </div>
    </div>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.name-animation', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.2 });
  }, []);

  return (
    <Box>
      <div className="anime">
        <div className="load">
        <svg
  height="100%"
  fill="none"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width="100%"
  version="1.1"
  viewBox="0 0 857 151"
  id="lo"
>
  <text
    x="30%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    A
  </text>
  <text
    x="35%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    N
  </text>
  <text
    x="40%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    A
  </text>
  <text
    x="45%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    N
  </text>
  <text
    x="50%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    C
  </text>
  <text
    x="55%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    O
  </text>
  <text
    x="60%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    D
  </text>
  <text
    x="65%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    E
  </text>
  <text
    x="70%"
    y="50%"
    fontFamily="Cursive, Arial, sans-serif"
    fontSize="60"
    fill="#10E956"
    textAnchor="middle"
    dominantBaseline="middle"
    className="name-animation"
  >
    C
  </text>
</svg>

        </div>
        <LinearProgressWithLabel value={progress} />
      </div>
    </Box>
  );
}
