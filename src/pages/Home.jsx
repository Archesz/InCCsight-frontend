import React, {useState} from 'react'
import '../styles/home.scss'

function Home() {

    function addInput(){
        console.log('add')
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



                    <button className="btn-add" id="btn-add" onClick={addInput}></button>

                </div>

            </div>

        </div>
    )
}

export default Home