import React from 'react'
interface IProp{
    imgPath: string,
    title: string
}

const GroupItem: React.FC<IProp> = ({imgPath, title}) => {
    return (
        <div className='group-card'>
            <img src={imgPath} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default GroupItem;
