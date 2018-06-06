import React from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const GET_SETTINGS = gql`
  query settings($location: String!) {
    settings(location: $location){
      location
      latitude
      longitude
      preRaceDelay
      postRaceDelay
      startLineTimeout
      raceTimeout
      attractDelay
    }
  }
`;

const UPDATE_RUN = gql`
  mutation RunStart(
    $run: NewRunRecord!
  ) {
    runStart(
      run: $run
    )
  }
`;

class RunningTimerPre extends React.Component {
  constructor(props) {
    super(props);
    this.onCompleted = this.onCompleted.bind(this);
  }

  onCompleted(runStart) {
    runStart({
      variables: {
        run: {
          start: 'placeholderStatus',
          opponent: 'placeholderOpponent',
        },
      },
    });
  }

  render() {
    return (
      <Query
        query={GET_SETTINGS}
        variables={{ location: process.env.REACT_APP_LOCATION }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <Mutation mutation={UPDATE_RUN}>
              {runStart => (
                <div>
                  <p>Pre race delay</p>
                  <p>The user has selected an opponent on the start line kiosk
                    and
                    now a timer is running.
                  </p>
                  <p>Once this timer has completed the race will automatically
                    start.
                  </p>
                  <Timer
                    duration={data.settings.preRaceDelay}
                    completion={() => {
                    this.onCompleted(runStart);
                  }}
                  /> milliseconds
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

RunningTimerPre.propTypes = {
  propItem: PropTypes.string,
};

RunningTimerPre.defaultProps = {
  propItem: '',
};

export default RunningTimerPre;
