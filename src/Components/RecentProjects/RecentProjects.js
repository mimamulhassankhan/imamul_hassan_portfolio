import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import { worksData } from '../../WorksData/WorkData';
import RecentProjectsWorksItem from '../RecentProjectWorksItem/RecentProjectsWorksItem';

const RecentProjects = () => {
    const [recentWorks, setRecentWorks] = useState([]);
    useEffect(() => {
        setRecentWorks([...worksData]);
    },[])
    return (
        <div className="px-5 my-5 py-5">
            <h3 className="text-center my-5">Recent Project's I have done</h3>
            <CardColumns className="align-items-start" style={{columnCount: 1}}>
                {
                    recentWorks.map(rWork => <RecentProjectsWorksItem key={rWork.slNo} data={rWork}></RecentProjectsWorksItem>)
                }
            </CardColumns>
        </div>
    );
};

export default RecentProjects;