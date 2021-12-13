import { useEffect } from 'react';
import { FormOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import './index.css';

const About = props => {
    // 配制marked和highlight
    useEffect(() => {
        // 配置highlight
        hljs.configure({
            tabReplace: '',
            classPrefix: 'hljs-',
            languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
        });
        // 配置marked
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: code => hljs.highlightAuto(code).value,
            gfm: true, //默认为true。 允许 Git Hub标准的markdown.
            tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
            breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
        });
    }, []);
    // 转到编辑页面
    const turnToAboutEdit = isMe => {
        props.history.push(`/admin/aboutEdit?isMe=${isMe}`);
    };
    return (
        <>
            <div className="aboutType">
                <div className="meType">
                    <div
                        className="editAboutBtn"
                        onClick={() => {
                            turnToAboutEdit('1');
                        }}
                    >
                        <FormOutlined />
                    </div>
                    <span className="aboutTitle">关于我</span>
                </div>
                <div className="siteType">
                    <div
                        className="editAboutBtn"
                        onClick={() => {
                            turnToAboutEdit('');
                        }}
                    >
                        <FormOutlined />
                    </div>
                    <span className="aboutTitle">关于本站</span>
                </div>
            </div>
            <div className="aboutContent">
                <div
                    className="meContent markdownStyle"
                    dangerouslySetInnerHTML={{
                        __html: marked(
                            props.about.filter(item => item.isMe)[0]?.content || ''
                        ).replace(/<pre>/g, "<pre id='hljs'>"),
                    }}
                ></div>

                <div
                    className="siteContent markdownStyle"
                    dangerouslySetInnerHTML={{
                        __html: marked(
                            props.about.filter(item => !item.isMe)[0]?.content || ''
                        ).replace(/<pre>/g, "<pre id='hljs'>"),
                    }}
                ></div>
            </div>
        </>
    );
};

export default connect(state => ({ about: state.about }), {})(About);
