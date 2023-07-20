import { useState } from 'react';
import './style.scss';

const EmojiCard = ({ emoji }) => {
    const [code, setCode] = useState("uni");

    const getHtml = (str) => {
        const parser = new DOMParser();
        const decodedHTML = parser.parseFromString(str, 'text/html').documentElement.textContent;
        return decodedHTML;
    }

    const toggleCode = (e) => {
        if (e.target.name === "html") setCode("html");
        else setCode("uni");
    }
    return (
        <div className="emoji-card">
            <div className="emoji-block">
                <div className="emoji-img">{ getHtml(emoji.htmlCode[0]) }</div>
            </div>
            <div className="details-block">
                <span className="name">{ emoji.name.split("≊")[0].trim().toUpperCase() }</span>
                <div className="sub">
                    <span className="bold">Catagory:{ " " }</span>
                    <span> { emoji.category } </span>
                </div>
                <div className="sub">
                    <span className="bold">Group:{ " " }</span>
                    <span> { emoji.group } </span>
                </div>

            </div>
            <div className="options">
                <button name='uni' className='btn' onClick={ (e) => toggleCode(e) }>Unicode</button>
                <button name='html' className='btn' onClick={ (e) => toggleCode(e) }>HTMLcode</button>
            </div>
            <div className='codeType'>
                { code === "uni" ? emoji.unicode[0] : emoji.htmlCode[0] }
            </div>
        </div>
    )
}

export default EmojiCard;