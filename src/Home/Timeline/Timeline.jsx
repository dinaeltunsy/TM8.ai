import React from 'react'
import './timeline.css'
import { Checkmark } from 'react-checkmark'

const Timeline = () => {
  return (
    <>
        <div className="uk-container uk-padding">
        <div className="uk-timeline">
            <div className="uk-timeline-item">
                <div className="uk-timeline-icon">
                    <span className="uk-badge"><span uk-icon="check"><Checkmark size='40px' color='#24D1EF' /></span></span>
                </div>
                <div className="uk-timeline-content">
                    <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 className="uk-card-title">Easy to use</h3>
                            </div>
                        </div>
                        <div className="uk-card-body">
                                <p className="uk-text-success"> We have made it simple to create and manage your AI team. Give distinict personalities and train for specific roles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-timeline-item">
                <div className="uk-timeline-icon">
                    <span className="uk-badge"><span uk-icon="check"><Checkmark size='40px' color='#24D1EF' /></span></span>
                </div>
                <div className="uk-timeline-content">
                    <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 className="uk-card-title">Top line stats</h3>
                            </div>
                        </div>
                        <div className="uk-card-body">
                                                <p className="uk-text-success">At a glance, gain an understanding of your AI team's performance and utilisation rates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-timeline-item">
                <div className="uk-timeline-icon">
                    <span className="uk-badge"><span uk-icon="check"><Checkmark size='40px' color='#24D1EF' /></span></span>
                </div>
                <div className="uk-timeline-content">
                    <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 className="uk-card-title">Easy to train</h3>
                            </div>
                        </div>
                        <div className="uk-card-body">
                                                <p className="uk-text-success">Easily provide detailed training and knowledge to individual assistants, enabling them to perform complex tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-timeline-item">
                <div className="uk-timeline-icon">
                    <span className="uk-badge"><span uk-icon="check"><Checkmark size='40px' color='#24D1EF' /></span></span>
                </div>
                <div className="uk-timeline-content">
                    <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 className="uk-card-title">Data-driven decisions</h3>
                            </div>
                        </div>
                        <div className="uk-card-body">
                                                <p className="uk-text-success">React to current trends and sentiments by easily analysing visitor conversations with our proprietary AI Snapshot feature.</p>
                        </div>
                    </div>
                </div>
            </div>
           
                    
        </div>
    </div>
    </>
  )
}

export default Timeline