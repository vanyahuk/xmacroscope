import React from 'react';
import './index.css';
import Table from '../Tables/BaseTable';
import {
  RunColumns, RunDefaultSort, RunFormat, RunQuery, RunTitle, RunVariables,
} from '../Tables/Runs';

function Home() {
  return (
    <Table
      columns={RunColumns}
      defaultSort={RunDefaultSort}
      formatForTable={RunFormat}
      query={RunQuery}
      queryVariables={RunVariables}
      title={RunTitle}
    />
  );
}

export default Home;
