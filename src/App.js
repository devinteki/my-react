import React, {Component} from 'react'

class App extends Component {
    render(){
        return (
            <ul className="my-list">
                <li>{false? 'React.org' : '前端技术'}</li>
                <li>I Love React</li>
            </ul>
        )
    }
}

export default App