import React from 'react';

import './AnimePopularSection.css'

function renderAnimeContent(content) {
    return (
        <div className="anime-content-wrapper d-flex gap-3">
            {content.map((item) => {
                const {id, srcImg, title, url, description} = item;

                return (
                    <div key={id} className="card anime-card-wrapper w-25">
                        <img className="anime-card-img w-100 cover" src={srcImg} alt={title}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <a href={url} target='_blank' className="btn btn-primary">Watch now</a>
                    </div>
                )
            })}
        </div>
    )
}

export default class MostPopularSection extends React.Component {
    render() {
        return (
            <section className="most-popular-section">
                <div className="d-flex flex-column gap-4">
                    {this.props.mostPopularData.map((item) => {
                        const { title, content } = item;

                        return (
                            <div>
                                <h2 className="fw-bold mb-3">{title}</h2>
                                {renderAnimeContent(content)}
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}