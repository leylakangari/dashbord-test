import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindeActionCreators } from 'redux';

import TypeBtn from '../components/comps/type';
import Status from '../components/comps/status';
import Table from '../components/comps/lease/table';
import { Container, Row, Col } from 'react-bootstrap';

const LeaseContainer = () =>{
      return( 
        <div className="dashboardContent">
          <Container>
              <Row className="paddingRowBottom">
                <Col md="auto">
                  <TypeBtn/>
                </Col>
                <Col md="auto">
                  <Status/>
                </Col>
              </Row>
            {/* <Table comps = {comps}/> */}
          </Container>
        </div> 
      )
    }

  function mapStateToProps(state){
    
    return {
      comps: state.comps
    }
  }

  export default connect(mapStateToProps, actions)(LeaseContainer);
