import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import { Row, Col, Button } from 'reactstrap';
import OponentResetButton from './OpponentResetButton';
import START_RUN from './graphql/StartRun.graphql';

const RaceStart = ({ opponentName }) => {
  const handleMutationCompleted = () => {
    console.log('mutation done');
  };

  return (
    <Mutation
      onCompleted={handleMutationCompleted}
      mutation={START_RUN}
      variables={{ start: '2018-03-23', opponent: 'thing' }}
    >
      {(sendMessage, { loading, error }) => (
        <Row>
          <Col>
            <Row>
              <Col>
                <Button color="primary" onClick={sendMessage}>
                    Start your race against {opponentName}
                </Button>
              </Col>
              <Col>
                <OponentResetButton />
              </Col>
            </Row>
            {loading && ''}
            {error && <p>Error :( Please try again</p>}
          </Col>
        </Row>
      )}
    </Mutation>
  );
};

RaceStart.propTypes = {
  opponentName: PropTypes.string.isRequired,
};

export default RaceStart;
