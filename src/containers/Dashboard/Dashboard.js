import React from 'react';
import Space from 'components/atoms/Space';
import ContentTemplate from 'components/molecules/ContentTemplate';

import FreeServices from './FreeServices';
import Locations from './Locations';
import ProductLibrary from './ProductLibrary';
import TeamMembers from './TeamMembers';
import YourBrandElements from './YourBrandElements';
import ClientAdminDashboard from './ClientAdminDashboard';

import './style.css';

const Dashboard = ({ deleteUser, userDetails, fetching, getCountries, fetchUsersList, fetchMembersList }) => {
  // if (userDetails && userDetails.role === 'clientadmin') {
  //   return <ClientAdminDashboard />;
  // }

  return (
    <ContentTemplate title="Dashboard">
      <FreeServices />
      <Space size={25} />
      <Locations fetching={fetching} />
      <Space size={25} />
      <ProductLibrary fetching={fetching} userDetails={userDetails} />
      <Space size={25} />
      <TeamMembers
        deleteUser={deleteUser}
        getCountries={getCountries}
        fetching={fetching}
        userDetails={userDetails}
        fetchUsersList={fetchUsersList}
        fetchMembersList={fetchMembersList}
      />
      <Space size={25} />
      <YourBrandElements />
    </ContentTemplate>
  );
};

export default Dashboard;
