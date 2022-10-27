import React, { useState } from "react";
import '../App.css';
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'


const MarkDown = ( ) => {
    const [markdown, setMarkdown] = useState("Welcome to markdown");
    return (
        <div className="center-div">
            <textarea 
                classname="left-side" 
                value={markdown} 
                onChange={(e) => setMarkdown(e.target.value)}>
            </textarea>
            
            <div classname="right-side">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm,remarkBreaks]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkDown;