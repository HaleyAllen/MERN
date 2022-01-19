import React from 'react';

const Tabs = (props) => {

    const {tabs} = props;

    const onClickHandler = (e, idx) => {
        props.currentMessage(parseInt(idx));
    }

    return (
        <div className="d-inline-flex flex-wrap mt-5">

            {
                tabs.map((tab, idx) => {
                    return <button key={idx} className="m-2 btn btn-lg btn-outline-success"
                    onClick={ (e) => onClickHandler(e, idx) }>{tab.name}</button>

                })

            }

        </div>
    )

}

export default Tabs;