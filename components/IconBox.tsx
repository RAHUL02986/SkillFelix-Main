import React from 'react'
import Image from 'next/image';

interface IconBoxProps {
icon: string;
title: string;
description: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, description }) => (
    <div className="icon-box gap-5">
        <Image src={icon} alt={title} className="icon-box-icon w-12 h-12" width={100} height={50}/>
        <div className='lg:w-6/12 w-full'>
            <h3 className="icon-box-title">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);


export default IconBox
