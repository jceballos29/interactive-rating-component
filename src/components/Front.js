/** @format */

import '../styles/front.css';

import star from '../images/icon-star.svg'

const ranking = [ 1, 2, 3, 4, 5];

const Front = ({handleSelect, select, setFinish}) => {
  
  return (
    <div className='front'>
      <div className='front-header'>
        <img src={star} alt="star"/>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>
      <div className='ranking'>
        {ranking.map((num) => (
          <button
            style={
              select === num
                ? {
                    backgroundColor: 'var(--Light-Grey)',
                    color: 'var(--White)',
                  }
                : null
            }
            onClick={() => {
              handleSelect(num);
            }}>
            {num}
          </button>
        ))}
      </div>
      <button className='submit' onClick={() => {setFinish(true)}}>SUBMIT</button>
    </div>
  );
};

export default Front;
