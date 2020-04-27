import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

test('Renders component with props',() => {
    const mockData =  {
        name: 'name'
    }   
    const{queryAllByText} =render(<Episodes episodes={[mockData]}/>)
    expect(queryAllByText(/name/i)).toHaveLength(1); 

})