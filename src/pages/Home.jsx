import React, {useState} from 'react'
import reactDom from 'react-dom'
import InputGroup from '../components/InputGroup/InputGroup'
import FormGroup from '../components/FormGroup/FormGroup'
import '../styles/home.scss'


function Home() {

    const [groups, setGroups] = useState([])

    function addGroup(){
        let groupContainer = document.querySelector('#formGroups')

        let number = groups.length
        let newGroup = InputGroup({id: number})
        groups.push(newGroup)
        setGroups(groups)

        let Group = FormGroup({groups: groups})
        reactDom.render(Group, groupContainer)
    }

    function start(){
        let path = document.querySelector("#path_group_0").value
        console.log(path)
        window.callTool(`${path}`)
    }

    return (
        <div id="home-container">
            
            <div className="home-left">

                <div className="home-left-cape">
    
                    <h2 className='home-name'>InCCsight</h2>
                    <span className='home-slogan'>Analyze, Explore and Visualize</span>
                    <span className='home-descript'>The software to automate and facilitate the processing of your DTI data.</span>

                </div>

            </div>

            <div className="home-right">

                <div className="social-field">

                </div>

                <span className="home-phrase">We hope will help with your research</span>

                <div className="input-field">

                    <div className="input-group">
                        <label>Type Input</label>
                        <select id="type_input">
                            <option value="single">Single Subjects</option>
                            <option value="groups">Groups</option>
                        </select>
                    </div>

                    <div id="formGroups">
                        
                    </div>

                    <button className="btn-add" id="btn-add" onClick={addGroup}></button>

                </div>

                <button className='btn-start' onClick={start}>Start</button>

            </div>

        </div>
    )
}

export default Home