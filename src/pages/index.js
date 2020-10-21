import React, { useEffect, useState } from 'react'
import iframeStyles from './iframe.module.scss'
import ScriptLoader from "../helpers/script-loader";

const documentWriteSting = 'document.write('
const surveyGizmoString = "script src=\"http' + ( (\"https:\" == document.location.protocol) ? \"s\" : \"\") + '://www.survey"


const Pages = () => {
    const pageData = "<style>\n.sg-question-title, tr, label {\n    font-size: 1.6rem !important;\n    line-height: 2.4rem !important;\n    color: #4a4a4a !important;\n    font-family: \"Proxima N W01 Reg\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif !important;\n}\n.sg-title {\n  font-size: 2rem !important;\n}\n.panel .sg-question {\n    border-bottom: none;\n}\n.panel .sg-question-options {\n    float: left!important;\n    width: 50%!important;\n}\n.panel legend.sg-question-title.sg-question-legend {\n    float: left !important;\n    width: 100% !important;\n}\n.panel .sg-progress-bar {\n    display: none;\n}\n.sg-content-hook-1, .sg-content-hook-2 {\n    display: none;\n}\n.panel {\n    background: #fff;\n    border: 0;\n    border-radius: 8px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);\n    margin-bottom: 15px;\n    padding: 20px;\n    max-width: 940px;\n    margin-left: auto;\n    margin-right: auto;\n}\n</style>\n<div class=\"panel\">\n    <div class=\"panel-body\">\n<h1>THIS IS A PRODUCTION SURVEY - DO NOT SUBMIT - SUBMISSIONS GO TO HR!</h1>\n        <!-- SURVEY EMBED -->\n<script type=\"text/javascript\" >document.write('<script src=\"http' + ( (\"https:\" == document.location.protocol) ? \"s\" : \"\") + '://www.surveygizmo.com/s3/5240222/GeraldTestingDev1?__no_style=true&__output=embedjs&__ref=' + escape(document.location.href) + '\" type=\"text/javascript\" ></scr' + 'ipt>');</script><noscript>SurveyGizmo - <a href=\"https://www.alchemer.com/\">survey software</a> for data driven teams. <a href=\"https://www.survey.alchemer.com/s3/5240222/GeraldTestingDev1?__no_style=true&?jsfallback=true\">Please take my survey now</a></noscript><style>.sg-survey{display:none; }</style>\n        <!-- /SURVEY EMBED -->\n    </div>\n</div>"

    let iFrameData = `${pageData}`
    if (true) {
        iFrameData = iFrameData.replace('document.location.protocol', `"${document.location.protocol}"`)
        iFrameData = iFrameData.replace('document.referrer', `"${document.referrer}"`)
        iFrameData = iFrameData.replace('document.location.origin', `"${document.location.origin}"`)
        iFrameData = iFrameData.replace('document.location.href', `"${document.location.href}"`)
        iFrameData = iFrameData.replace('document.location.pathname', `"${document.location.pathname}"`)
    }

    return (
        // <iframe title="iframeTitle" className={iframeStyles.iframe} src="https://www.surveygizmo.com/s3/5240222/GeraldTestingDev1" />
        <iframe title="iframeTitle" className={iframeStyles.iframe} srcDoc={iFrameData} />
        // <div className={iframeStyles.div} dangerouslySetInnerHTML={{__html: iFrameData}} />
        // <div className={iframeStyles.div} dangerouslySetInnerHTML={{__html: "<p> Area that we want to embed a code </p>"}} />
    )
}

export default Pages
