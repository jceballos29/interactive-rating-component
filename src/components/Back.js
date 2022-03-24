/** @format */

import '../styles/back.css';

const Back = ({ select }) => {
  return (
    <div className='back'>
      <span>You selected {select} of 5</span>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you
        ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Back;
