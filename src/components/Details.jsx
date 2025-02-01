import { useState, useEffect } from 'react';

export default function Details(props) {
  const [activeInfo, setActive] = useState([]);
  useEffect(() => {
    if (props.id !== '') {
      getDetails(props.id)
    }
  }, [props.id])
  const getDetails = async (id) => {
    {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
        const data = await response.json();
        setActive(data)
      } catch (e) {
      }
    }
  }

  return (
    <div className='details'>
      {activeInfo && activeInfo.details && (
        <>
          <img className='details-img' src={activeInfo.avatar} alt="Картинка в процессе загрузки" />
          <div className='details-item'>Name: {activeInfo.name}</div>
          <div className='details-item'>City: {activeInfo.details.city}</div>
          <div className='details-item'>Company: {activeInfo.details.company}</div>
          <div className='details-item'>Position: {activeInfo.details.position}</div>
        </>
      )}
    </div>
  )
}