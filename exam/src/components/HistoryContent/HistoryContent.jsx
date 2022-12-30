import React from 'react'
import classes from './HistoryContent.module.scss'
import HistorySingleTranslation from '../HistorySingleTranslation/HistorySingleTranslation'


export default function HistoryContent(props) {
    return(
        <div className={classes.history_container}>
            {props.history.map(translation =>
                <HistorySingleTranslation
                    from={translation.from}
                    to={translation.to}
                    input={translation.input}
                    output={translation.output}
                    key={translation.key}/>
            )}
        </div>
    );
}