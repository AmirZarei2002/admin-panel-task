import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ paths, icon: IconComponent, title }) {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:space-x-2 place-items-end text-[#777] mt-2">
            <div className="flex space-x-2 items-center">
                {paths?.reverse().map((path, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <span className="text-md font-mono pt-1"> &lt; </span>
                        )}
                        <Link to={'/' + path} className="text-md">
                            {path}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex items-center truncate">
                <div className="border-r-[1px] border-black/20 pr-2">
                    {IconComponent && (
                        <div className="flex items-center space-x-2">
                            <span className="text-md font-mono pt-1"> &lt; </span>
                            <IconComponent className="text-xl cursor-pointer" />
                        </div>
                    )}
                </div>
                <div className="pl-2">
                    {title && <h1 className="text-2xl font-bold">{title}</h1>}
                </div>
            </div>
        </div>
    );
}
