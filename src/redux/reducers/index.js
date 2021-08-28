import { combineReducers } from 'redux';

import loginState from './loginState';
import tags from './tags';
import classes from './classes';
import articles from './articles';
import drafts from './drafts';
import poem from './poem';

import galleries from './galleries';
import links from './links';
import logs from './logs';
import says from './says';
import shows from './shows';
import about from './about';

import msgs from './msgs';
import notice from './notice';

export default combineReducers({
    loginState,
    tags,
    classes,
    articles,
    poem,
    drafts,
    galleries,
    links,
    logs,
    says,
    shows,
    about,
    msgs,
    notice,
});
