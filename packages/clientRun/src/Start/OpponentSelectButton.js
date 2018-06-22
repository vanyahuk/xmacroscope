//
// Mutate local state, changing race state to preRun and define opponent details
//
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const UPDATE_RACE_OPPONENT = gql`
  mutation UpdateRaceOpponent(
  $status: String!,
  $opponent: String!,
  $opponentName: String!,
  $opponentTime: Int!
  ) {
    updateRace(
      status: $status,
      opponent: $opponent
      opponentName: $opponentName
      opponentTime: $opponentTime
    ) @client
  }
`;

const OpponentSelectButton = ({ opponent, opponentName, opponentTime }) => (
  <Mutation
    mutation={UPDATE_RACE_OPPONENT}
    variables={{
      status: 'runTimerPre',
      opponent,
      opponentName,
      opponentTime,
    }}
  >
    {updateRace => (
      <Button
        color="primary"
        onClick={updateRace}
      >{opponentName}
      </Button>
    )}
  </Mutation>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
  opponentTime: PropTypes.number.isRequired,
};

export default OpponentSelectButton;