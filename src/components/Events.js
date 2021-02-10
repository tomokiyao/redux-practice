import { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { readEvents } from '../actions';

class Events extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event, index) => (
      <TableRow key={index}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const buttonStyle = {
      position: 'fixed',
      right: 12,
      bottom: 12,
    };
    return (
      <>
        <FloatingActionButton
          style={buttonStyle}
          containerElement={<Link to="/events/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ events: state.events });

const mapDispatchProps = { readEvents };
// 別の書き方
// const mapDispatchProps = (dispatch) => ({
//   readEvents: () => dispatch(readEvents()),
// });

export default connect(mapStateToProps, mapDispatchProps)(Events);
