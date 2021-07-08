import { render } from '@testing-library/react'
import React from 'react'



class Index extends React.Component {
    render(){
        return (
            <div>
               <h1>Hello Dojo!</h1>
               <p>This I have to do:</p>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the Dogs</li>

            </ul>
              </div>
            );
        }
    }
    

export default Index