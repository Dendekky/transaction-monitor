import React from 'react';
import SimpleCard from '../../assets/components/card';

export default function Transaction (props) {
    return(
    <div>
      <div className='card'>
        <div className='cardVal'>
        <SimpleCard 
        title='Daily Transaction Volume'
        value='2,342' />
        </div>
        <div className='cardVal'>
        <SimpleCard 
        className='cardVal'
        title='Daily Transaction Value'
        value='#4, 000,000' />
        </div>
        <div className='cardVal'>
        <SimpleCard 
        className='cardVal'
        title='Total Transaction Volume'
        value='452,000' />
        </div>
        <div className='cardVal'>
        <SimpleCard 
        className='cardVal'
        title='Total Transaction Value'
        value='#4. 000,000' />
        </div>
      </div>
    </div>
    )
}
