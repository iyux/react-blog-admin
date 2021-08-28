import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.css';

const ArticleNum = props => {
    const [type, setType] = useState('');
    const [num, setNum] = useState(0);
    useEffect(() => {
        const { articles, drafts, links, shows, says } = props;
        switch (props.type) {
            case 'articles': {
                setType('文章');
                setNum(articles.length);
                break;
            }
            case 'drafts': {
                setType('草稿');
                setNum(drafts.length);
                break;
            }
            case 'links': {
                setType('友链');
                setNum(links.length);
                break;
            }
            case 'shows': {
                setType('作品');
                setNum(shows.length);
                break;
            }
            case 'says': {
                setType('说说');
                setNum(says.length);
                break;
            }
            default: {
                break;
            }
        }
    }, [props]);
    return (
        <div className={props.isRight ? 'numberBox marginRight' : 'numberBox'}>
            <span className="type">{type}数</span>
            <span className="number">{num}</span>
        </div>
    );
};

export default connect(
    state => ({
        articles: state.articles,
        drafts: state.drafts,
        links: state.links,
        says: state.says,
        shows: state.shows,
    }),
    {}
)(ArticleNum);
